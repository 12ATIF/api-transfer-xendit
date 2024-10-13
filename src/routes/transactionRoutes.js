// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Route untuk membuat transaksi
router.post('/create-transaction', transactionController.createTransaction);

module.exports = router;
