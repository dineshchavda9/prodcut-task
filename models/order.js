// importing Mongoose module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating user schema
let orderSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    quantity: {
        type: Number,
        default: 1
    },

    totalPrice: {
        type: Number,
        required: true
    }



}, {
    timestamps: true,
}, {
    collection: "orders"
});

// Create model from the order schema
const orders = mongoose.model("orders", orderSchema);

// Exporting Order Module
module.exports = orders;