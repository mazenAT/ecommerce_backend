const express = require('express');
const { signup, signin } = require('../controller/auth');
const { isValidated, validateSignup, validateSignin } = require('../validator/auth');
const router = express.Router();


router.post('/signin',validateSignin,isValidated, signin);


router.post('/signup',validateSignup,isValidated, signup);

// router.post('/profile',requireSignin,(req, res)=>{
//     res.status(200).json({ user:'profile' })
// });


module.exports = router;