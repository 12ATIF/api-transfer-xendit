// app.js
require('dotenv').config(); // Mengambil variabel dari .env
const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./src/routes/transactionRoutes');
const webhookRoutes = require('./src/routes/webhookRoutes');

const app = express();
app.use(bodyParser.json()); // Parsing request body

// Menggunakan route transaksi
app.use('/api', transactionRoutes);

// Menggunakan port dari .env atau default ke 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
