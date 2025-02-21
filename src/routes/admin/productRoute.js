const express = require('express')
const router = express.Router()
const flash = require('connect-flash')
const session = require('express-session')
const productController = require('../../app/controllers/admin/productController')
const upload = require('../../app/middleware/cloudinary');

router.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
router.use(flash())
router.get('/'                          , productController.allProducts)
router.get('/trash'                     , productController.trash)

router.get('/product/create'            , productController.createProduct)
router.post('/product/created'          , upload.single('img'), productController.productCreated)

router.get('/product/:id'               , productController.productInfo)
router.put('/product/updated/:id'       , upload.single('img'), productController.productUpdated)

router.delete('/product/soft-delete/:id', productController.softDelete)
router.delete('/product/delete/:id'     , productController.deleteProduct)
router.get('/product/restore/:id'       , productController.restore)

router.post('/data/products'            , productController.getProducts)
router.post('/data/product'             , productController.getProduct)
router.post('/data/filter'              , productController.getFilter)

module.exports = router