const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const {  isValidated, validateSignup, validateSignin } = require('../../validator');
const router = express.Router();

router.get('/signin',(req,res)=>{
    
});
router.post('/admin/signin',validateSignin,isValidated, signin);

router.get('/signup',(req,res)=>{
    
});
router.post('/admin/signup',validateSignup,isValidated, signup);



module.exports = router;