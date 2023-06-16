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
          reject(err);
        }
        else {  //连接成功
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

//登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

//查询用户账号是否存在
const userfind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

//注册
const userRegister = (values) => {
  let _sql=`insert into users set username=?,password=?;`
  return allService.query(_sql,values)
}

//根据用户名查找用户 根据用户名查找此用户购物车的数据 
const cartList=(username)=>{
  let _sql=`select * from cart where username="${username}";`
  return allService.query(_sql)
}

//在cart中添加一条数据
const cartAdd=(values) => {
  let _sql=`insert into cart set id=?,username=?,name=?,price=?,max=?,min=?,shop=?,address=?,guarantee=?,imgUrl=?,num=?;`
  return allService.query(_sql,values)
}

//在cart中查找商品id为多少的那一项以便添加数据
const cartFind=(id)=>{
  let _sql = `select * from cart where id="${id}";`
  return allService.query(_sql)
}

module.exports = {
  userLogin,

  userfind,
  userRegister,

  cartList,
  cartAdd,
  cartFind
}