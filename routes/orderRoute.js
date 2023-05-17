const express = require('express');

const {getAllOrders, addOrder} = require('../controllers/orderController');

const router = express.Router();

router.route('/getallorders').get(getAllOrders);
router.route('/addOrder').post(addOrder)

module.exports = router;