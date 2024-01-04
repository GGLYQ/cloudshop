//让node能连接上mysql
const mysql = require('mysql'); //引入安装的mysql插件
const config = require('../config/mySqlConfig.js'); //引入抛出的mysql配置

//创建线程池 把配置给到线程池去登录我的mysql软件
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

//连接数据库，执行sql语句
const allService = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { //连接数据库
        if (err) { //连接失败
          console.log(err, "数据库连接失败");
          reject(err);
        }
        else {  //连接成功
          console.log("数据库连接成功");
          connection.query(sql, values, (err, rows) => { //执行sql语句
            if (err) {//sql语句执行失败
              reject(err);
            }
            else {  //sql语句执行成功
              resolve(rows)
            }
            connection.release() //断开连接
          })
        }
      })
    })
  }
}

module.exports=allService
