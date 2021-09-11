const mongoose = require ('mongoose')
const Schema = mongoose.Schema
// import bcrypt from 'bcryptjs'

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum:['user', 'admin'],
      default:'user',
      required: true,
    },
  },
//   {
//     timestamps: true,
//   },
)



module.exports = mongoose.model('Auth', authSchema)

// default Auth
