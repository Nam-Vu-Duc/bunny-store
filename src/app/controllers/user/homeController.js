const product = require('../../models/productModel')
const brand = require('../../models/brandModel')

class homeController {
  async show(req, res, next) {
    const isUser = req.isUser === true ? true : false
    const userId = req.cookies.uid || null
    const chatId = req.cookies.chat_id || null
    const holderProducts = Array(5).fill({})
    const holderBrands = Array(15).fill({})
    
    // const [flashSaleProducts, hotProducts, hotSaleProducts, allProducts, brands, skincareProducts, makeupProducts] = await Promise.all([
    //   product.find({ deletedAt: null, status: 'flash-sale' }).limit(5).lean(),
    //   product.find({ deletedAt: null, status: 'hot' }).limit(5).lean(),
    //   product.find({ deletedAt: null }).sort({ saleNumber: -1 }) .limit(5).lean(),
    //   product.find({ deletedAt: null }).limit(5).lean(),
    //   brand.find({}).lean(),
    //   product.find({ deletedAt: null, categories: 'skincare' }).limit(5).lean(),
    //   product.find({ deletedAt: null, categories: 'makeup' }).limit(5).lean(),
    // ])
    // res.render('users/home', { title: 'Bunny House - Cửa hàng mỹ phẩm chính hãng', isUser, userId, flashSaleProducts, hotProducts, hotSaleProducts, allProducts, brands, skincareProducts, makeupProducts, chatId })
    res.render('users/home', { title: 'Bunny House - Cửa hàng mỹ phẩm chính hãng', isUser, userId, holderProducts, holderBrands})
  }

  async getProducts(req, res, next) {
    const status = req.body.status
    const data = await product.find({deletedAt: null, status: status}).sort({ saleNumber: -1 }).limit(5).lean()
    
    res.json({data: data})

  }

  async getBrands(req, res, next) {
    const data = await brand.find().lean()
    res.json({data: data})
  }

  async searchInfo(req, res, next) {
    const isUser = req.isUser === true ? true : false
    const userId = req.cookies.uid || null
    const chatId = req.cookies.chat_id || null
  
    const query = req.query.q

    const products = await product.find({
      $or: [
        { name: { $regex: query, $options: 'i'} },
        { brand: { $regex: query, $options: 'i'}}
      ]
    }).lean()
    res.render('users/searchInfo', { title: 'Kết quả tìm kiếm', isUser, userId, products, chatId, query });
  }
}
module.exports = new homeController