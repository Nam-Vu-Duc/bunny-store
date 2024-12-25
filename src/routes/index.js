// admin
const adminHomeRoute = require('./admin/homeRoute')
const adminAllBrandsRoute = require('./admin/allBrandsRoute')
const adminAllCustomersRoute = require('./admin/allCustomersRoute')
const adminAllChatsRoute = require('./admin/allChatsRoute')
const adminAllEmployeesRoute = require('./admin/allEmployeesRoute')
const adminAllOrdersRoute = require('./admin/allOrdersRoute')
const adminAllProductsRoute = require('./admin/allProductsRoute')
const adminAllPurchasesRoute = require('./admin/allPurchasesRoute')
const adminAllStoresRoute = require('./admin/allStoresRoute')
const adminProfileRoute = require('./admin/profileRoute')

// user
const homeRoute = require('./user/homeRoute')
const productRoute = require('./user/productRoute')
const allProductsRoute = require('./user/allProductsRoute')
const introduceRoute = require('./user/introduceRoute')
const authenticationRoute = require('./auth/authenticationRoute')
const empAuthenticationRoute = require('./auth/empAuthenticationRoute')
const allOrdersRoute = require('./user/allOrdersRoute')
const profileRoute = require('./user/profileRoute')
const logOutRoute = require('./user/logOutRoute')
const checkAdmin = require('../app/middleware/checkAdmin')
const checkUser = require('../app/middleware/checkUser')
const cookieParser = require('cookie-parser')

function route(app) {
  app.use(cookieParser())
  // admin
  app.use('/admin', checkAdmin, adminHomeRoute)
  app.use('/admin/all-brands', checkAdmin, adminAllBrandsRoute)
  app.use('/admin/all-customers', checkAdmin, adminAllCustomersRoute)
  app.use('/admin/all-chats', checkAdmin, adminAllChatsRoute)
  app.use('/admin/all-employees', checkAdmin, adminAllEmployeesRoute)
  app.use('/admin/all-orders', checkAdmin, adminAllOrdersRoute)
  app.use('/admin/all-products', checkAdmin, adminAllProductsRoute)
  app.use('/admin/all-purchases', checkAdmin, adminAllPurchasesRoute)
  app.use('/admin/all-stores', checkAdmin, adminAllStoresRoute)
  app.use('/admin/profile', checkAdmin, adminProfileRoute)

  // user
  app.use('/', checkUser, homeRoute)
  app.use('/home', checkUser, homeRoute)
  app.use('/authentication', authenticationRoute)
  app.use('/emp/authentication', empAuthenticationRoute)
  app.use('/all-products', checkUser, allProductsRoute)
  app.use('/product',checkUser, productRoute)
  app.use('/all-orders', checkUser, allOrdersRoute)
  app.use('/introduce', checkUser, introduceRoute)
  app.use('/profile', checkUser, profileRoute)
  app.use('/log-out', checkUser, logOutRoute)
}
module.exports = route