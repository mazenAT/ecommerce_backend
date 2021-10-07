const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const { isValidated, validateSignup, validateSignin } = require('../validator/index');
const router = express.Router();

// router.get('/signin',(req,res)=>{
    
// });
router.post('/signin',validateSignin,isValidated, signin);

// router.get('/signup',(req,res)=>{
    
// });
router.post('/signup',validateSignup,isValidated, signup);

// router.post('/profile',requireSignin,(req, res)=>{
//     res.status(200).json({ user:'profile' })
// });


module.exports = router;