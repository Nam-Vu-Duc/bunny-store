const product = require('../models/productModel')
const brand = require('../models/brandModel')

class allProductsController {
  showAllProducts(req, res, next) {
    const currentPage  = req.query.page   || 1
    const sortedColumn = req.query.column || ''
    const sort         = req.query.sort   || ''
    const type         = req.params.slug
    const itemsPerPage = 10
    const skip         = (currentPage - 1) * itemsPerPage

    product.find({ deletedAt: null }).lean()
      .then(product => { 
        product.forEach(product => {
          product.price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          product.oldPrice = product.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        })
        let title = 'Toàn Bộ Sản Phẩm'

        if (type === 'flash-sale') {
          product = product.filter(product => product.status === 'flash-sale' )
          title   = 'Sản Phẩm Đang Flash Sale'
        }
        if (type === 'hot') {
          product = product.filter(product => product.status === 'hot' )
          title   = 'Sản Phẩm Đang Hot'
        }
        if (type === 'new-arrival') {
          product = product.filter(product => product.newArrival === 'yes' )
          title   = 'Sản Phẩm Mới Về'
        }
        if (type === 'skincare') {
          product = product.filter(product => product.skincare !== '' )
          title   = 'Sản Phẩm Skincare'
        }
        if (type === 'makeup') {
          product = product.filter(product => product.makeup !== '' )
          title   = 'Sản Phẩm Makeup'
        }

        if (sortedColumn === 'price' && sort === 'asc') {
          product = product.sort((a, b) => a.price - b.price)
        } else if (sortedColumn === 'price' && sort === 'desc') {
          product = product.sort((a, b) => b.price - a.price)
        }

        const productLength = product.length
        const newProduct = product.slice(skip, skip + itemsPerPage)
        
        res.render('users/allProducts', { title: title, newProduct, type, productLength, currentPage, sortedColumn, sort }) })
      .catch(next)
  }

  showSkincare(req, res, next) {
    product.find({ deletedAt: null, skincare: req.params.slug }).lean()
      .then(product => { 
        product.forEach(product => {
          product.price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          product.oldPrice = product.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        })        
        const type       = req.params.slug
        const newProduct = product

        res.render('users/allProducts', { title: 'Dòng Skincare', newProduct, type }) })
      .catch(next)
  }

  showMakeUp(req, res, next) {
    product.find({ deletedAt: null, makeup: req.params.slug }).lean()
      .then(product => { 
        product.forEach(product => {
          product.price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          product.oldPrice = product.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        })        
        const type       = req.params.slug
        const newProduct = product
        
        res.render('users/allProducts', { title: 'Dòng Makeup', newProduct, type }) })
      .catch(next)
  }

  showAllBrands(req, res, next) {
    brand.find().lean()
      .then(brand => { 
        res.render('users/allBrands', { title: 'Toàn bộ thương hiệu', brand }) })
      .catch(next)
  }

  showBrand(req, res, next) {
    product.find({ deletedAt: null, brand: req.params.slug }).lean()
      .then(product => { 
        const newProduct = product
        res.render('users/allProducts', { title: req.params.slug, newProduct }) })
      .catch(next)
  }
}

module.exports = new allProductsController