// models/transactionModel.js
class Transaction {
    constructor(external_id, amount, payer_email, description) {
        this.external_id = external_id;
        this.amount = amount;
        this.payer_email = payer_email;
        this.description = description;
    }
}

module.exports = Transaction;
