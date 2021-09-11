const express = require ('express')
const router = express.Router()
const product = require ('../Controller/productController')


router.post('/add', product.addProduct)
router.get('/get', product.getProduct)
router.delete('/:id', product.deleteProduct)
router.put('/:id', product.updateProduct)
router.get("/:id", product.getProductDetail);

module.exports = router