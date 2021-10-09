const express = require('express');
const { createProduct } = require('../../controller/product/product');
const { requireSignin, isAdmin } = require('../../middelware');
const router = express.Router();

router.post('/product/create',requireSignin,isAdmin,createProduct);
router.post('/product/getProduc',getProduct);


module.exports = router;