const Router=require('koa-router');
const {fetchAuth}= require('../../plugins/admin')
const config = require('../../config');
//创建router
let router=new Router();
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

module.exports=router.routes();