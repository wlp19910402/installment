const koa=require('koa');//引入
const router=require('./routers'); //导入路由
const bodyparser = require('koa-bodyparser') //引入koa-bodyparser中间件，这个中间件可以将post请求的参数转为json格式返回
const cors = require('koa2-cors');//解决跨域
const db = require('./libs/database') //链接数据库
const {HTTP_PORT} =require('./config') //导出端口号


let server=new koa();//创建服务
server.listen(HTTP_PORT);//监听的端口
server.use(bodyparser()) //使用中间件后，可以用ctx.request.body进行获取POST请求参数，中间件自动给我们解析为json
server.use(cors()) //解决跨域
server.context.db=db; //加上数据库
server.use(router);//加上路由
