const Order = require('../Model/orderModel')

module.exports = {
  // @desc    Create new order
  // @route   POST /api/orders
  // @access  Private
  addOrderItems: async (req, res) => {
    const { orderItems, totalPrice } = req.body
    // if (orderItems && orderItems.length === 0) {
    //   res.status(400)
    //   throw new Error('No order items')
    //   return
    // } else {
    const order = new Order({
      userId: req.user._id,
      userName: req.user.name,
      userLastName: req.user.lastname,
      userPhone: req.user.phone,
      userAdresse: req.user.phone,
      userMail: req.user.email,
      orderItems,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  },
  // @desc    Get order by ID
  // @route   GET /api/orders/:id
  // @access  Private
  getOrderById: async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email',
    )
    if (order) {
      res.json(order)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  },

  // @desc    Get all orders
  // @route   GET /api/orders
  // @access  Private/Admin
  getOrders: async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
  },
}
