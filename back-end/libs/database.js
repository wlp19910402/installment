
const mysql=require('mysql');
const wrapper=require('co-mysql');
const {DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_BASE} = require('../config.js');

//连接数据库
let conn=mysql.createConnection({
	host: DB_HOST,
	port:DB_PORT,
	user: DB_USER,
	password: DB_PASS,
	database: DB_BASE
});
module.exports=wrapper(conn);