
const Router=require('koa-router');
const guid = require('uuid/v4');
const config = require('../../config');
const {fetchAuth}= require('../../plugins/admin')

//创建router
let router=new Router();
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

module.exports=router.routes();