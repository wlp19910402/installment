
const {TOKEN_AGE} = require('../config');

//验证登录方法
exports.fetchAuth =async(ctx)=>{
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
		let token_expires=Math.floor(Math.floor(Date.now()/1000)+TOKEN_AGE)
		 await ctx.db.query('UPDATE t_b_user_info SET token_expires=? where account_id=? and account_type=?',[token_expires,accountid,accounttype]);
     return ({  err:'0', msg:'',  result:row});
   }
  }catch(err){
    console.log(err)
    return
  }
}