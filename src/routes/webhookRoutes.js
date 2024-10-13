// routes/webhookRoutes.js
const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// Endpoint untuk menerima webhook dari Xendit
router.post('/payment', webhookController.handleWebhook);

module.exports = router;
