// controllers/webhookController.js
exports.handleWebhook = (req, res) => {
    const event = req.body;

    // Periksa apakah event adalah notifikasi pembayaran yang sukses
    if (event.status === 'PAID') {
        // Lakukan sesuatu, seperti memperbarui status order di database
        console.log(`Payment for transaction ${event.external_id} was successful.`);

        // Kirim notifikasi ke toko online atau pelanggan (misalnya email atau notifikasi ke web)
        // Misalkan kita mengubah status order di database atau API toko online

        // Response ke Xendit bahwa webhook diterima
        return res.status(200).send('Webhook received and handled');
    } else {
        // Untuk status lain (misalnya: EXPIRED, FAILED)
        console.log(`Transaction ${event.external_id} status changed: ${event.status}`);
    }

    res.status(200).send('Webhook received');
};
