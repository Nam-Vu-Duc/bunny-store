const member = require('../../models/memberModel')
const orderStatus = require('../../models/orderStatusModel')
const paymentMethod = require('../../models/paymentMethodModel')
const position = require('../../models/positionModel')
const productStatus = require('../../models/productStatusModel')

class attributeController {
  async show(req, res, next) {
    return res.render('admin/attribute', { title: 'Chỉnh sửa thuộc tính', layout: 'admin' })
  }

  // read
  async getMembership(req, res, next) {
    const membership = await member.find().lean()
    return res.json({data: membership})
  }

  async getOrderStatus(req, res, next) {
    const orderStatuses = await orderStatus.find().lean()
    return res.json({data: orderStatuses})
  }

  async getPaymentMethod(req, res, next) {
    const paymentMethods = await paymentMethod.find().lean()
    return res.json({data: paymentMethods})
  }

  async getPosition(req, res, next) {
    const positions = await position.find().lean()
    return res.json({data: positions})
  }

  async getProductStatus(req, res, next) {
    const productStatuses = await productStatus.find().lean()
    return res.json({data: productStatuses})
  }

  // create
  async createMembership(req, res, next) {
    try {
      await member.create(req.body)
      return res.json({isValid: true, message: 'Thêm thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async createOrderStatus(req, res, next) {
    try {
      await orderStatus.create(req.body)
      return res.json({isValid: true, message: 'Thêm thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async createPaymentMethod(req, res, next) {
    try {
      await paymentMethod.create(req.body)
      return res.json({isValid: true, message: 'Thêm thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async createPosition(req, res, next) {
    try {
      await position.create(req.body)
      return res.json({isValid: true, message: 'Thêm thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async createProductStatus(req, res, next) {

    try {
      await productStatus.create(req.body)
      return res.json({isValid: true, message: 'Thêm thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  // update
  async updateMembership(req, res, next) {
    try {
      await member.updateOne({ code: req.body.code}, {
        name: req.body.name
      })
      return res.json({isValid: true, message: 'Cập nhật thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async updateOrderStatus(req, res, next) {
    try {
      await orderStatus.updateOne({ code: req.body.code}, {
        name: req.body.name
      })
      return res.json({isValid: true, message: 'Cập nhật thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async updatePaymentMethod(req, res, next) {
    try {
      await paymentMethod.updateOne({ code: req.body.code}, {
        name: req.body.name
      })
      return res.json({isValid: true, message: 'Cập nhật thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async updatePosition(req, res, next) {
    try {
      await position.updateOne({ code: req.body.code}, {
        name: req.body.name
      })
      return res.json({isValid: true, message: 'Cập nhật thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async updateProductStatus(req, res, next) {

    try {
      await productStatus.updateOne({ code: req.body.code}, {
        name: req.body.name
      })
      return res.json({isValid: true, message: 'Cập nhật thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  // delete
  async deleteMembership(req, res, next) {
    try {
      await member.deleteOne({ code: req.body.code})
      return res.json({isValid: true, message: 'Xoá thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async deleteOrderStatus(req, res, next) {
    try {
      await orderStatus.deleteOne({ code: req.body.code})
      return res.json({isValid: true, message: 'Xoá thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async deletePaymentMethod(req, res, next) {
    try {
      await paymentMethod.deleteOne({ code: req.body.code})
      return res.json({isValid: true, message: 'Xoá thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async deletePosition(req, res, next) {
    try {
      await position.deleteOne({ code: req.body.code})
      return res.json({isValid: true, message: 'Xoá thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }

  async deleteProductStatus(req, res, next) {
    try {
      await productStatus.deleteOne({ code: req.body.code})
      return res.json({isValid: true, message: 'Xoá thành công'})
      
    } catch (error) {
      return res.json({isValid: false, message: error.message})
    } 
  }
}
module.exports = new attributeController