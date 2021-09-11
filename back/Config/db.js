const mongoose = require ('mongoose')

const db_connection = ()=>{
    mongoose.connect('mongodb+srv://khila:khila02@cluster0.b9an0.mongodb.net/Naturopathie', 
    {
      
    useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        
      })
      .then(() =>{console.log('data_base connected')})
      .catch(()=>{console.log('error')})
}


module.exports = db_connection