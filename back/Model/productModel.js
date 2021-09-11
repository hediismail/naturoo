const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    conseils:{
        type: String,
       required: true,
    },
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
      default:0,
  
},
qty: {
  type: Number,
  required: true,
  default: 0,
}
}
);

module.exports = mongoose.model("Product", productSchema);