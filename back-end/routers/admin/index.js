
const Router=require('koa-router');
const {getToken,fetchTokenVerify} = require('../../plugins/token')
const {encrypt,decrypt}=require('../../plugins/crypto')
//创建router
let router=new Router();

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
    if(decrypt(row['pwd']) != password){
      ctx.body={err:'1',msg:'密码错误',result:''};
    }else{
      let token = getToken({accountid:accountId,accounttype:accountType})
      await ctx.db.query('UPDATE t_b_user_info SET token=? where account_id=? and account_type=?',[token,accountId,accountType]);
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
  let loginFlagData = await fetchTokenVerify(ctx) //验证账号是否是登录状态。是登录状态则返回用户的基本信息
  console.log(loginFlagData)
  if(loginFlagData.err==='0'){
    let row = loginFlagData.result
     ctx.body={
      err:'0',
      msg:'',
      result:{
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

//账号，token和账号类型进行检测是否登录
router.get('/refreshToken',async ctx=>{
  let loginFlagData = await fetchTokenVerify(ctx)
  if(loginFlagData.err==='0'){
    let row = loginFlagData.result
    let token = getToken({ accountid: row[ 'account_id' ], accounttype: row[ 'account_type' ] })
		 await ctx.db.query('UPDATE t_b_user_info SET token=? where account_id=? and account_type=?',[token,row['account_id'],row['account_type']]);
     ctx.body={
      err:'0',
      msg:'',
      result:{
        token
      }
    };
  }else{
    ctx.body= loginFlagData
  }
  return
})

//重置密码
router.post('/updatePwd',async ctx=>{
  let loginFlagData = await fetchTokenVerify(ctx) //验证账号是否是登录状态。是登录状态则返回用户的基本信息
  if(loginFlagData.err!=='0'){
    ctx.body= loginFlagData
    return
  }
  try{
    let {accountid,accounttype}=ctx.request.header;
    let {oldPwd, newPwd1,newPwd2}=ctx.request.body;
    if(!oldPwd||!newPwd1||!newPwd2){
      ctx.body={err:'1',msg:'密码不能为空',result:''};
    }
    if(newPwd1!==newPwd2){
      ctx.body={err:'1',msg:'两次密码不相等',result:''};
      return
    }
    if(newPwd1.length<6){
      ctx.body={err:'1',msg:'密码长度不能小于6',result:''};
      return
    }
    let rows =  await ctx.db.query("SELECT * FROM t_b_user_info WHERE account_id=? and account_type=?",[accountid,accounttype])
    if(rows.length===0){
      ctx.body={err:'1',msg:'用户名不存在',result:''};
      return
    }
    let row = rows[0];
    if(decrypt(row['pwd']) != oldPwd){
      ctx.body={err:'1',msg:'老密码输入不正确',result:''};
    }else{
      await ctx.db.query('UPDATE t_b_user_info SET pwd=? where account_id=? and account_type=?',[encrypt(newPwd1),accountid,accounttype]);
      ctx.body={
        err:'0',
        msg:'',
        result:''
      };
    }}catch(err){
    console.log(err)
  }
  return
})

module.exports=router.routes();