const { getProducts, createProduct, updateProduct, deleteProduct,getImage,getProduct } = require('../controller/productController');
const { getCategories } = require('../controller/categoryController');
const fileUpload = require('../middleware/fileUpload');
const {check}= require('express-validator');

const router= require('express').Router();
router.get('/categories',getCategories);
router.get('/products',getProducts);
router.get('/products/:id',getProduct);
router.get('/products/:id/image',getImage);
router.post('/products',fileUpload.upload.single('image'),createProduct);
router.put('/products/:id',fileUpload.upload.single('image'),updateProduct);
router.delete('/products/:id',deleteProduct);
module.exports=router;