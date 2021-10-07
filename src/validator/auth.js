const { check, validationResult } = require('express-validator');

exports.validateSignup = [
    check('firstName')
    .notEmpty()
    .withMessage('first Name is required'),
    check('lastName')
    .notEmpty()
    .withMessage('last Name is required'),
    check('email')
    .isEmail()
    .withMessage('enter a valid email'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character long')
];
exports.validateSignin = [
    check('email')
    .isEmail()
    .withMessage('enter a valid email'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character long')
];
exports.isValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({errors:errors.array()[0].msg})
    }
    next();
};