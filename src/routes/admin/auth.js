const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const {  isValidated, validateSignup, validateSignin } = require('../../validator/auth');
const router = express.Router();


router.post('/admin/signin',validateSignin,isValidated, signin);
router.post('/admin/signup',validateSignup,isValidated, signup);



module.exports = router;