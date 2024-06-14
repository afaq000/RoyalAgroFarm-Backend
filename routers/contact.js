// contactRouter.js
const express = require('express');
const contactRouter = express.Router();
const contactController = require('../controllers/buyer/contact');
// POST route for submitting contact form
contactRouter.post('/contact', contactController.submitContactForm);
module.exports =contactRouter;