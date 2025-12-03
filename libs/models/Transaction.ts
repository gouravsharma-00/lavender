import mongoose, { Schema } from 'mongoose'

export const TransactionSchema = new Schema({
    type: {
        required: true,
        enum : ["income", "expense"],
        type: String
    },
    category: {
        required: true,
        type: String,
        enum : [
            "Salary",
            "Business",
            "Bonus",
            "Refund",
            "Investment",
            "Food",
            "Travel",
            "Tax",
            "Shopping",
            "Bills",
            "Medical",
            "Miscellaneous"
        ]
    },
    note: {
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        required: true
    }
})
