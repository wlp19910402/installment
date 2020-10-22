const koa=require('koa');
const Router=require('koa-router');
const mysql=require('mysql');
const wrapper=require('co-mysql');
const body = require('koa-better-body');
const guid = require('uuid/v4');
const config = require('./config');
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors');//解决跨域
//创建服务
let server=new koa();
server.listen(8080);
server.use(bodyparser())
server.use(cors()) //解决跨域
//连接数据库
let conn=mysql.createConnection({
	host: 'localhost',
	port:3306,
	user: 'root',
	password: 'admin',
	database: 'installment'
});
let db=wrapper(conn);
server.context.db=db;
//创建router
let router=new Router();
router.get('*', async (ctx, next)=>{
  // ctx.set('Access-Control-Allow-Origin', '*');
  // ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  // ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  console.log(ctx)
  try{
    await next();
  }catch(e){
    ctx.status=500;
    ctx.body={error: 1, msg: 'server internal error'};
  }
});

router.get('/sdahga', async ctx=>{
  let rows=await ctx.db.query("SELECT * FROM t_b_user_info");
  ctx.body={
    error: 0,
    data: rows
  };
  return
});

//根据账号和密码还有账号类型进行登录
router.post('/login',async ctx=>{
  try{
    let {accountId, password,accountType}=ctx.request.body;
    let rows =  await ctx.db.query("SELECT * FROM t_b_user_info WHERE account_id=? and account_type=?",[accountId,accountType])
    if(rows.length===0){
      ctx.body={err:'1',msg:'用户名不存在',result:''};
      return
    }
    let row = rows[0];
    if(row['pwd'] != password){
      ctx.body={err:'1',msg:'密码错误',result:''};
    }else{
      let token= guid().replace(/\-/g,'');
      let token_expires=Math.floor(Math.floor(Date.now()/1000)+config.TOKEN_AGE)
      await ctx.db.query('UPDATE t_b_user_info SET token=?,token_expires=? where account_id=? and account_type=?',[token,token_expires,accountId,accountType]);
      ctx.body={
        err:'0',
        msg:'',
        result:{
          token,
          userName:row['user_name'],
          department:row['department'],
          companyUnit:row['company_unit'],
          position:row['position'],
          acceptOrderStatus:row['accept_order_status']
        }
      };
    }
  }catch(err){
    console.log(err)
  }
  return
})

//账号，token和账号类型进行检测是否登录
router.get('/checkIsLogin',async ctx=>{
  let loginFlagData = await fetchAuth(ctx)
  if(loginFlagData.err==='0'){
    let row = loginFlagData.result
    let token= guid().replace(/\-/g,'');
		 await ctx.db.query('UPDATE t_b_user_info SET token=? where account_id=? and account_type=?',[token,row['account_id'],row['account_type']]);
     ctx.body={
      err:'0',
      msg:'',
      result:{
        token,
        userName:row['user_name'],
        department:row['department'],
        companyUnit:row['company_unit'],
        position:row['position'],
        acceptOrderStatus:row['accept_order_status']
      }
    };
  }else{
    ctx.body= loginFlagData
  }
  return
})
//外勤人员设置接单的值
router.post('/setAcceptOrderStatus',async ctx=>{
  try{
    let loginFlagData = await fetchAuth(ctx)
    if(loginFlagData.err==='0'){
      let {acceptOrderStatus}=ctx.request.body;
      let {token}=ctx.request.header;
      await ctx.db.query('UPDATE t_b_user_info SET accept_order_status=? where token=? ',[acceptOrderStatus,token]);
      ctx.body= {  err:'0', msg:'',  result:acceptOrderStatus};
    }else{
      ctx.body= loginFlagData
    }
  }catch(err){
    console.log(err)
  }
  return
})
server.use(router.routes());

//验证登录
const  fetchAuth =async(ctx)=>{
  try{
  let {accountid, token,accounttype}=ctx.request.header;
  let rows =  await ctx.db.query("SELECT * FROM t_b_user_info WHERE account_id=? and account_type=?",[accountid,accounttype])
  if(rows.length===0){
    return ({err:'1',msg:'用户名不存在',result:''});
  }
  let row = rows[0];
	 if(row['token'] != token){
		 return {err:'1',msg:'没登录，拒绝访问,请先登录',result:''};
	 }else if(row['token_expires']<Math.floor(Date.now()/1000)){
    return( {err:'1',msg:'登录已经过期',result:''});
  }else{
    //如果是登录状态则延期登录有效期
		let token_expires=Math.floor(Math.floor(Date.now()/1000)+config.TOKEN_AGE)
		 await ctx.db.query('UPDATE t_b_user_info SET token_expires=? where account_id=? and account_type=?',[token_expires,accountid,accounttype]);
     return ({  err:'0', msg:'',  result:row});
   }
  }catch(err){
    console.log(err)
    return
  }
}