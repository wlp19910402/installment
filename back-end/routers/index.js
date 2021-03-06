
 const Router = require('koa-router');
//创建router
let router=new Router();
router.get('*', async (ctx, next)=>{
  try{
    await next();
  }catch(e){
    ctx.status=500;
    ctx.body={error: 1, msg: 'server internal error'};
  }
});

router.use('/admin', require('./admin'));
router.use('/performStaff', require('./performStaff'));

module.exports=router.routes();