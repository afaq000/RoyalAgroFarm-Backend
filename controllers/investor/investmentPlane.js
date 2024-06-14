
const InvestmentPlane = require('../../models/investor/InvestmentPlane');
// const InvestmentPlan = require('../../models/investor/InvestmentPlane');

exports.getAllPlans = async (req, res) => {
    try {
        const plans = await InvestmentPlane.find();
        res.send(plans);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.addPlan = async (req, res) => {
    try {
        const { name, duration, interestRate,Status,amount } = req.body
        const plan = new InvestmentPlane({
            name,
            duration,
            Status,
            amount,
            interestRate
        });
        await plan.save();
        res.status(201).send({message:"investment plane is sucessfully added"});
        console.log("plan",plan)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updatePlan = async (req, res) => {
    try {
        const { planId } = req.params;
        const { name, duration, interestRate,status,amount } = req.body;
        const updatedPlan = await InvestmentPlane.findByIdAndUpdate(
            planId,
            { name, duration, interestRate,status,amount },
            { new: true }
        );
        res.send(updatedPlan);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};



exports.deletePlane = async (req, res) => {
    try {
        const { planId } = req.params; // Change this to match the route parameter
        console.log(planId, "planId");

        const deletedProduct = await InvestmentPlane.findByIdAndDelete(planId); // Use planId here as well
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Plane not found' });
        }
        res.status(200).json({ message: 'Plane deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};


