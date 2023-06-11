const router = require('koa-router')()
const goods=require('../data/goods.js')

router.post('/goodsList', async (ctx, next) => {
  ctx.body={
    code:'80000',
    message:'获取商品数据成功',
    data:goods
  }
})

module.exports = router
