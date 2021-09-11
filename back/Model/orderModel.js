const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userLastName: {
      type: String,
      required: true,
    },
    userPhone: {
      type: String,
      required: true,
    },
    userAdresse: {
      type: String,
      required: true,
    },
    userMail: {
      type: String,
      required: true,
    },

    orderItems: [
      {
        title: { type: String },
        qanty: { type: String },
        imageUrl: { type: String },
        price: { type: String },
        rating: { type: String },
        description: { type: String },

        // product: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   required: true,
        //   ref: 'Produit',
        // },
      },
    ],

    // shippingAddress: {
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   postalCode: { type: String, required: true },
    //   country: { type: String, required: true },
    // },
    // paymentMethod: {
    //   type: String,
    //   required: true,
    // },
    // paymentResult: {
    //   id: { type: String },
    //   status: { type: String },
    //   update_time: { type: String },
    //   email_address: { type: String },
    // },

    // shippingPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    totalPrice: {
      type: Number,
      // required: true,
      default: 0.0,
    },
    // isPaid: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // paidAt: {
    //   type: Date,
    // },
    // isDelivered: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // deliveredAt: {
    //   type: Date,
    // },
  },
  // {
  //   timestamps: true,
  // },
)
// orderSchema.path('title') instanceof mongoose.SchemaType
// orderSchema.path('imageUrl') instanceof mongoose.SchemaType
// orderSchema.path('price') instanceof mongoose.SchemaType
// module.exports = mongoose.model('Order', orderSchema)

module.exports = Order = mongoose.model('Order', orderSchema)
