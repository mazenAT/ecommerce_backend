const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const router = express.Router();

router.get('/signin',(req,res)=>{
    
});
router.post('/signin', signin);

router.get('/signup',(req,res)=>{
    
});
router.post('/signup', signup);

// router.post('/profile',requireSignin,(req, res)=>{
//     res.status(200).json({ user:'profile' })
// });


module.exports = router;