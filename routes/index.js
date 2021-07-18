const { getProducts, createProduct, updateProduct, deleteProduct, } = require('../controller/productController');
const { getCategories } = require('../controller/categoryController');
const {check}= require('express-validator');

const router= require('express').Router();
router.get('/categories',getCategories);
router.get('/products',getProducts);
router.post('/products',createProduct);
router.put('/products/:id',updateProduct);
router.delete('/products/:id',deleteProduct);
module.exports=router;