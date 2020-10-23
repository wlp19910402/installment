
 const Router = require('koa-router');
//创建router
let router=new Router();
router.get('*', async (ctx, next)=>{
  console.log(ctx)
  try{
    await next();
  }catch(e){
    ctx.status=500;
    ctx.body={error: 1, msg: 'server internal error'};
  }
});

router.use('/admin', require('./admin'));
router.use('/foreignStaff', require('./foreignStaff'));

module.exports=router.routes();