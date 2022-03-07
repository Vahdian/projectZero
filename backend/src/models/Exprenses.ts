const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    month: {
        type: String,
        required: true,
        
    },
    day: {
        type: String,
        required: true,
        
    },
    year: {
        type: Number,
        required: true,
        
    },
    order: {
        type: String,
        required: true,
        
    },
    hour: {
        type: String,
        required: true
    },
    minutes: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isHouseExpense:{
        type:Boolean,
        required: true
    }
})

module.exports = mongoose.model("expenses", dataSchema)