const router = require('koa-router')()
const goods = require('../data/goods.js')
const allTypeGoods = require('../data/allTypesGoods.js')
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
  let { id, username, name, price, max, min, shop, address, guarantee, imgUrl, num } = ctx.request.body
  //判断该商品是否在cart数据库中存在

  try {
    let findres = await userService.cartFind(id)
    if (findres.length) {  //如找到数据则向前端报错
      await userService.numAdd(id).then(res => {
        // console.log(res);
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: '80000',
            data: 'success',
            msg: '商品已在购物车！'
          }
        } else {
          ctx.body = {
            code: '80004',
            data: 'error',
            msg: '添加失败！'
          }
        }
      })
    } else {  //如没找到则添加成功，往数据库添加这条数据
      await userService.cartAdd([id, username, name, price, max, min, shop, address, guarantee, imgUrl, num = min])
        .then(res => {
          // console.log(res);
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

router.post('/cartModify', async (ctx, next) => {
  const { num, id } = ctx.request.body
  await userService.cartModify(num, id).then(res => {
    // console.log(res);
    if (res.affectedRows !== 0) {
      ctx.body = {
        code: '80000',
        data: 'success',
        msg: '修改成功！'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '修改失败！'
      }
    }
  })
})

router.post('/cartDelete', async (ctx, next) => {
  const { id } = ctx.request.body
  await userService.cartDelete(id).then(res => {
    // console.log(res);
    if (res.affectedRows !== 0) {
      ctx.body = {
        code: '80000',
        data: 'success',
        msg: '删除成功！'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '删除失败！'
      }
    }
  })
})

router.post('/cartFind', async (ctx, next) => {
  const { id } = ctx.request.body
  let result = await userService.cartFind(id)
  if (result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '商品数据获取成功'
    }
  } else {
    ctx.body = {
      code: '80004',
      data: 'null',
      msg: '无此商品'
    }
  }

})

//首页点击导航栏不同种类获取商品数据
router.get('/type', async (ctx, next) => {
  ctx.body = {
    code: '80000',
    message: '获取商品数据成功',
    data: allTypeGoods
  }
})

router.post('/addressList', async (ctx, next) => {
  const { username } = ctx.request.body
  try {
    const result = await userService.addressList(username)
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result,
        msg: '地址数据获取成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'null',
        msg: '去设置一个地址吧！'
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

router.post('/defaultModify', async (ctx, next) => {
  const { isDefault, id } = ctx.request.body
  await userService.defaultModify(isDefault, id).then(res => {
    // console.log(res);
    if (res.affectedRows !== 0) {
      ctx.body = {
        code: '80000',
        data: 'success',
        msg: '修改成功！'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '修改失败！'
      }
    }
  })
})

router.get('/defaultFind', async (ctx, next) => {
  const result = await userService.defaultFind()
  if (result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '默认地址数据获取成功'
    }
  } else {
    ctx.body = {
      code: '80004',
      data: 'null',
      msg: '去设置一个地址吧！'
    }
  }
})

router.post('/addressAdd', async (ctx, next) => {
  let { id,username, name, tel, address, isDefault } = ctx.request.body
  try {
    await userService.addressAdd([id,username, name, tel, address, isDefault])
      .then(res => {
        // console.log(res);
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
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})
module.exports = router
