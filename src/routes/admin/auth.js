const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const router = express.Router();

router.get('/signin',(req,res)=>{
    
});
router.post('/admin/signin', signin);

router.get('/signup',(req,res)=>{
    
});
router.post('/admin/signup', signup);



module.exports = router;