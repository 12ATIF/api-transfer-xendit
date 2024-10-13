// controllers/transactionController.js
require('dotenv').config(); // Memuat variabel .env
const axios = require('axios');
const Transaction = require('../models/transactionModel');

// Fungsi untuk membuat transaksi dan mengirim ke Xendit
exports.createTransaction = async (req, res) => {
    try {
        // Membuat instance transaksi baru dari data yang diterima
        const { external_id, amount, payer_email, description } = req.body;
        const transaction = new Transaction(external_id, amount, payer_email, description);

        // Mengirim transaksi ke API Xendit
        const xenditResponse = await axios.post('https://api.xendit.co/v2/invoices', transaction, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(process.env.YOUR_XENDIT_API_KEY + ':').toString('base64')}` // Mengambil API Key dari .env
            }
        });

        // Respon dari Xendit dikirim kembali ke toko online
        res.status(200).json({
            message: 'Transaction created successfully!',
            data: xenditResponse.data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Transaction creation failed',
            error: error.response ? error.response.data : error.message
        });
    }
};
