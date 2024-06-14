const express = require('express');
const userRouter = express.Router();
const { buyerSignup, adminSignup, investerSignup, BuyerLogin, adminLogin, investerLogin, getAllUser, deletUser, forgotPassword } = require('../controllers/user')

// Buyer signup route
userRouter.post('/buyer/signup', buyerSignup);

// Admin signup route
userRouter.post('/admin/signup', adminSignup);

// Investor signup route
userRouter.post('/investor/signup', investerSignup);

// Buyer login route
userRouter.post('/buyer/login', BuyerLogin);

// Admin login route
userRouter.post('/admin/login', adminLogin);

// Investor login route
userRouter.post('/investor/login', investerLogin);
userRouter.get('/getAlluser',getAllUser)
userRouter.delete('/deleteuser/:id',deletUser)
userRouter.post('/request',forgotPassword)

module.exports = userRouter;
