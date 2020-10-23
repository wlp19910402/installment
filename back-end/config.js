module.exports={

  DB_HOST:'localhost',//链接数据库的host
	DB_PORT:3306,//数据库的端口
	DB_USER:'root',//数据库的用户名
  DB_PASS:'admin',//数据库的密码
  DB_BASE:'installment',//数据库的名称

  HTTP_PORT:'8080',//服务监听的端口
  TOKEN_AGE:"1h", //登录有效期是1小时 =>1h,或者 2days
  TOKEN_SECRET:"￥&637128$#2&daiugang++3+d=danghang&",//对token进行盐的参数
  SECRET_KEY:"&d}u@a!hgjk|q3w^da+#2hg%.da/da3y\e639"//crypto密码加密的 公共）秘钥
}