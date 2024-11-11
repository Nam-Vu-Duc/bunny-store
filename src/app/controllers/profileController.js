const user = require('../models/userModel')
const order = require('../models/orderModel')

class profileController {
  async updateProfile(req, res, next) {
    const userInfo  = await user.findOne({ _id: req.params.id }).lean()
    const orderInfo = await order.find({ 'customerInfo.userId': req.params.id, deletedAt: null }).lean()
    // orderInfo.forEach(order => {
    // order.createdAt = order.createdAt.getDate() + '/' + (order.createdAt.getMonth()+1) + '/' + order.createdAt.getFullYear()
    //   if (order.status === 'preparing') order.status = 'Đang Xử Lý'
    //   if (order.status === 'delivering') order.status = 'Đang Giao'
    //   if (order.status === 'done') order.status = 'Hoàn Thành'
    // });
    res.render('users/updateProfile', { title: 'Cập nhật thông tin', userInfo, orderInfo })
  }

  updatedProfile(req, res, next) {
    user.updateOne({ _id: req.params.id}, {
      'userInfo.name'    : req.body.name,
      'userInfo.phone'   : req.body.phone,
      'userInfo.gender'  : req.body.gender,
      'userInfo.address' : req.body.address,
    })
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new profileController