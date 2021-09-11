const Product = require ('../Model/productModel') 
const  asyncHandler = require  ('express-async-handler')

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
    res.json({ products, page, pages: Math.ceil(count / pageSize) })
  })

module.exports = {
   
        // Add Products
        addProduct:async (req, res)=>{
            
               
           const {title, description, imageUrl, conseils, price, rating}=req.body
    
           try{
               product= new Product({
                title, 
                description,
                 imageUrl, 
                 conseils,
                price, rating
               })
               await product.save()
               res.json(product)
           }  
           catch(error){console.error(error.message)}
         
        },
        getProduct:async(req, res)=>{
            try{
                const product = await Product.find();
                res.json(product)
            }
            catch(error){console.error(error.message)}
     },
     deleteProduct: async (req, res)=>{
        try{
            const product = await Product.findByIdAndDelete(req.params.id)
            res.json(product)
        }
        catch(error){console.error(error.message)}
      
    },
    updateProduct: async (req, res)=>{
        try{
            const product =await Product.findByIdAndUpdate(req.params.id, req.body,        
         {new :true})
         res.json(product)
    }
    catch(error){console.error(error.message)}
    },
    getProductDetail : async (req, res) => {
        try {
          const product = await Product.findById(req.params.id);
      
          res.json(product);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server Error" });
        }
    }
  
    }
    

