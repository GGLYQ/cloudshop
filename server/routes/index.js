const router = require('koa-router')()
const goods = require('../data/goods.js')
const userService = require('../controllers/mySqlController.js')


router.get('/goodsList', async (ctx, next) => {
  ctx.body = {
    code: '80000',
    message: '获取商品数据成功',
    data: goods
  }
})

router.post('/productDetail/:id', async (ctx, next) => {
  console.log(ctx.params.id);
  const idx = parseInt(ctx.params.id)  //获取前端传过来的id
  const product = goods.goodsList.find(item => item.id === idx) //查找id为前端传过来的id的那条数据
  const product1 = goods.goodsList1.find(item => item.id === idx)
  ctx.body = {
    code: '80000',
    message: '获取单条商品数据成功',
    data: product || product1
  }
})

router.post('/cartList', async (ctx, next) => {
  const { username } = ctx.request.body
  try {
    const result = await userService.cartList(username)
    // console.log(result);
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result,
        msg: '购物车数据获取成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'null',
        msg: '购物车是空的，去逛逛吧'
      }
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

router.post('/cartAdd', async (ctx, next) => {
  const { id, username, name, price, max, min, shop, address, guarantee, imgUrl, num } = ctx.request.body
  //判断该商品是否在cart数据库中存在
  try {
    let findres = await userService.cartFind(id)
    if (findres.length) {  //如找到数据则向前端报错
      ctx.body = {
        code: '80003',
        data: 'error',
        msg: '该商品已在购物车！'
      }
      num++;
    } else {  //如没找到则添加成功，往数据库添加这条数据
      await userService.cartAdd([id, username, name, price, max, min, shop, address, guarantee, imgUrl, num])
        .then(res => {
          console.log(res);
          if (res.affectedRows !== 0) {
            ctx.body = {
              code: '80000',
              data: 'success',
              msg: '添加成功！'
            }
          } else {
            ctx.body = {
              code: '80004',
              data: 'error',
              msg: '添加失败！'
            }
          }
        })
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})
module.exports = router
