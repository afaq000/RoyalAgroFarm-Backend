const Order = require('../../models/buyer/order');
const createOrder = async (req, res) => {
    const { userId, productId, quantity, address } = req.body;
    // Input validation
    if (!userId || !productId || !quantity || !address) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const newOrder = new Order({
            userId,
            productId,
            quantity,
            address
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('userId', 'name email role') // Populate user details
            .populate('productId', 'name description imageUrl price'); // Populate product details
        res.status(200).json(orders);
        console.log("apis hit")
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err,"error")
    }
};
module.exports = { createOrder, getAllOrders };