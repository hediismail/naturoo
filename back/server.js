const express = require('express')
const app = express()
const db = require ('./Config/db.js')
db();
require('dotenv').config()
const body = require('body-parser')
app.use(express.json());
const cors = require('cors')
app.use(cors())


//Auth Route:

 const authRouter = require('./Route/authRoute')
 app.use('/app/auth', authRouter)
 



//Product Route:

const productRouter = require('./Route/productRoute')
 app.use('/app/product', productRouter) 

 //Paper Route:

const paperRouter = require('./Route/paperRoute')
app.use('/app/paper', paperRouter) 

//Order Route
const orderRouter = require('./Route/orderRoute')
app.use('/app/order', orderRouter)


// Connect to DB
const PORT = process.env.PORT || '4005'

app.listen(PORT,()=>{
    console.log(`server working ${PORT}`)
})