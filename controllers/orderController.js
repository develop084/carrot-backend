const Order = require('../models/orderModel')

exports.getAllOrders = async (req, res) => { 
   
}



exports.addOrder = async (req, res) => {
   const {user, amount} = req.body

   try {
      const order = await Order.create({
         user, 
         amount
      })
      res.status(200).json({
         success: true,
         order
      })
   }
   catch (error) {
      res.status(500).json({error: error.message})
   }
}