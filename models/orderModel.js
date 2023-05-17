const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'

   }, 
   amount: {
      type : Number, 
      required: true,
   }, 
   createdAt: {   
      type: Date,
      required: true,
      default: Date.now
   },
})

module.exports = mongoose.model('Order', orderSchema)