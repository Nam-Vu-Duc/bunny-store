const express = require('express')
const router = express.Router()
const homeController = require('../../app/controllers/user/homeController')

router.get('/', homeController.show)
router.post('/data/products', homeController.getProducts)
router.get('/data/out-of-order-products', homeController.getOutOfOrderProducts)
router.post('/data/order-products', homeController.getOrderProducts)
router.post('/data/brands', homeController.getBrands)
router.get('/data/user', homeController.getUsers)
router.post('/data/search', homeController.searchInfo)

module.exports = router