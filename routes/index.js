const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controller/productController');
const router= require('express').Router();
router.get('/products',getProducts);
router.post('/products',createProduct);
router.put('/products/:id',updateProduct);
router.delete('/products/:id',deleteProduct);
module.exports=router;