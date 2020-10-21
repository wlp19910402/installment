const koa=require('koa');
const Router=require('koa-router');
const mysql=require('mysql');
const wrapper=require('co-mysql');
const body = require('koa-better-body');
const guid = require('uuid/v4');
const config = require('./config');
const bodyparser = require('koa-bodyparser')
//
let server=new koa();
server.listen(8080);
server.use(bodyparser())
//
let conn=mysql.createConnection({
	host: 'localhost',
	port:3306,
	user: 'root',
	password: 'admin',
	database: 'installment'
});
let db=wrapper(conn);
server.context.db=db;

//
let router=new Router();
router.get('*', async (ctx, next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');
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
  let {accountId, password,accountType}=ctx.request.body;
  console.log(ctx.request.body)
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
     console.log(row)
     ctx.body={
      err:'0',
      msg:'',
      result:{
        token,
        user_name:row['user_name'],
        department:row['department'],
        company_unit:row['company_unit'],
        user_position:row['user_position']
      }
    };
   }
   return
})


//账号，token和账号类型进行检测是否登录
router.post('/checkIsLogin',async ctx=>{
  let {accountId, token,accountType}=ctx.request.body;
  console.log(ctx.request.body)
  let rows =  await ctx.db.query("SELECT * FROM t_b_user_info WHERE account_id=? and account_type=?",[accountId,accountType])
  if(rows.length===0){
    ctx.body={err:'1',msg:'用户名不存在',result:''};
    return
  }
  let row = rows[0];
  console.log(row['token_expires'],Math.floor(Date.now()/1000))
	 if(row['token'] != token){
		 ctx.body={err:'1',msg:'没登录',result:''};
	 }else if(row['token_expires']<Math.floor(Date.now()/1000)){
    ctx.body={err:'1',msg:'登录已经过期',result:''};
  }else{
    let token= guid().replace(/\-/g,'');
		let token_expires=Math.floor(Math.floor(Date.now()/1000)+config.TOKEN_AGE)
		 await ctx.db.query('UPDATE t_b_user_info SET token=?,token_expires=? where account_id=? and account_type=?',[token,token_expires,accountId,accountType]);
     console.log(row)
     ctx.body={
      err:'0',
      msg:'',
      result:{
        token,
        user_name:row['user_name'],
        department:row['department'],
        company_unit:row['company_unit'],
        user_position:row['user_position']
      }
    };
   }
   return
})
server.use(router.routes());
