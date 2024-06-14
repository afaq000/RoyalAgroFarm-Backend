
const express = require('express');
const investmentPlaneRouter = express.Router();
const investmentPlanController = require('../controllers/investor/investmentPlane');

investmentPlaneRouter.get('/plans', investmentPlanController.getAllPlans);


investmentPlaneRouter.post('/add', investmentPlanController.addPlan);
investmentPlaneRouter.delete('/deleteplane/:planId',investmentPlanController.deletePlane)

investmentPlaneRouter.put('/update/:planId', investmentPlanController.updatePlan);

module.exports = investmentPlaneRouter;
