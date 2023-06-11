const router = require('koa-router')()
const goods=require('../data/goods.js')

router.get('/goodsList', async (ctx, next) => {
  ctx.body={
    code:'80000',
    message:'获取商品数据成功',
    data:goods
  }
})

router.post('/productDetail/:id', async (ctx, next) => {
  console.log(ctx.params.id);
  const idx=parseInt(ctx.params.id)  //获取前端传过来的id
  const product=goods.goodsList.find(item => item.id === idx) //查找id为前端传过来的id的那条数据
  const product1=goods.goodsList1.find(item =>item.id === idx)
  ctx.body={
    code:'80000',
    message:'获取单条商品数据成功',
    data:product||product1
  }
})
module.exports = router
