const express = require('express');
const { createCategoty, retriveCategory } = require('../../controller/category/category');
const { requireSignin, isAdmin } = require('../../middelware');

const router = express.Router();

router.post('/category/create',requireSignin,isAdmin,createCategoty)
router.get('/category/getcategory',retriveCategory);

module.exports = router;