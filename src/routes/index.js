// middleware
const checkAdmin    = require('../app/middleware/checkAdmin')
const checkUser     = require('../app/middleware/checkUser')
const cookieParser  = require('cookie-parser')

// admin
const adminHomeRoute      = require('./admin/homeRoute')
const adminBrandRoute     = require('./admin/brandRoute')
const adminCustomerRoute  = require('./admin/customerRoute')
const adminChatRoute      = require('./admin/chatRoute')
const adminEmployeeRoute  = require('./admin/employeeRoute')
const adminOrderRoute     = require('./admin/orderRoute')
const adminProductRoute   = require('./admin/productRoute')
const adminPurchaseRoute  = require('./admin/purchaseRoute')
const adminStoreRoute     = require('./admin/storeRoute')
const adminSupplierRoute  = require('./admin/supplierRoute')
const adminProfileRoute   = require('./admin/profileRoute')
const adminLogOutRoute    = require('./admin/logOutRoute')

// user
const homeRoute         = require('./user/homeRoute')
const allProductsRoute  = require('./user/allProductsRoute')
const allBrandsRoute    = require('./user/allBrandsRoute')
const introduceRoute    = require('./user/introduceRoute')
const allOrdersRoute    = require('./user/allOrdersRoute')
const profileRoute      = require('./user/profileRoute')
const logOutRoute       = require('./user/logOutRoute')
const chatRoute         = require('./user/chatRoute')
const refreshRoute      = require('./user/refreshToken')

// login
const authenticationRoute    = require('./auth/authenticationRoute')
const empAuthenticationRoute = require('./auth/empAuthenticationRoute')
function route(app) {
  app.use(cookieParser())
  // admin
  app.use('/admin'              , checkAdmin, adminHomeRoute)
  app.use('/admin/all-brands'   , checkAdmin, adminBrandRoute)
  app.use('/admin/all-customers', checkAdmin, adminCustomerRoute)
  app.use('/admin/all-chats'    , checkAdmin, adminChatRoute)
  app.use('/admin/all-employees', checkAdmin, adminEmployeeRoute)
  app.use('/admin/all-orders'   , checkAdmin, adminOrderRoute)
  app.use('/admin/all-products' , checkAdmin, adminProductRoute)
  app.use('/admin/all-purchases', checkAdmin, adminPurchaseRoute)
  app.use('/admin/all-stores'   , checkAdmin, adminStoreRoute)
  app.use('/admin/all-suppliers', checkAdmin, adminSupplierRoute)
  app.use('/admin/profile'      , checkAdmin, adminProfileRoute)
  app.use('/admin/log-out'      , checkAdmin, adminLogOutRoute)

  // user
  app.use('/'             , checkUser, homeRoute)
  app.use('/home'         , checkUser, homeRoute)
  app.use('/all-products' , checkUser, allProductsRoute)
  app.use('/all-brands'   , checkUser, allBrandsRoute)
  app.use('/all-orders'   , checkUser, allOrdersRoute)
  app.use('/introduce'    , checkUser, introduceRoute)
  app.use('/profile'      , checkUser, profileRoute)
  app.use('/log-out'      , checkUser, logOutRoute)
  app.use('/api/chat'     , checkUser, chatRoute)
  app.use('/refresh-token', refreshRoute)

  // login
  app.use('/authentication'     , authenticationRoute)
  app.use('/emp/authentication' , empAuthenticationRoute)
}
module.exports = route