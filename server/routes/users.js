const router = require('koa-router')()
//引入抛出的对象里的方法
const userService = require('../controllers/mySqlController.js')

router.prefix('/users')

//登录接口
router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body
  //去读取数据库中的users表，判断读取到的值和前端传过来的值是否匹配
  const result = await userService.userLogin(username, password)
})


module.exports = router
