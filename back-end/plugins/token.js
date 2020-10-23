const jwt = require('jsonwebtoken')
const {TOKEN_AGE,TOKEN_SECRET}=require('../config')

//生成token
exports.getToken =(payload={})=>{
  return jwt.sign(payload, TOKEN_SECRET, { expiresIn: TOKEN_AGE})
}

//验证token
const getJWTPayload=(token)=>{
  return jwt.verify(token,TOKEN_SECRET,(err,decode)=>{
    if(err){
      return {err:"1",msg:"token 验证已过期",result:""}
    }else{
      return {err:"0",msg:"",result:decode}
    }
  })
}

//验证登录,先从数据库中查询是否有当前请求的header的用户数据，有则继续验证token是否有效
exports.fetchTokenVerify =async(ctx)=>{
  try{
  let {accountid, token,accounttype}=ctx.request.header;
  let rows =  await ctx.db.query("SELECT * FROM t_b_user_info WHERE account_id=? and account_type=?",[accountid,accounttype])
  if(rows.length===0){
    return ({err:'1',msg:'用户名不存在',result:''});
  }
  let row = rows[0];
  let tokenVerify = getJWTPayload(token) //验证token ,'0'则有效的token，否则无效
	 if(row['token'] != token && tokenVerify.err!=="0"){
		 return {err:'1',msg:'token无效了',result:''};
   }else{
     return ({  err:'0', msg:'',  result:{...row}});
   }
  }catch(err){
    return {err:'1',msg:'请求异常',result:''};
  }
}