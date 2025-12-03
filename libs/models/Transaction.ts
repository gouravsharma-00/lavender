import mongoose, { Schema, models, model } from 'mongoose'

const transactionSchema = new Schema({

    title: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String, required: true },
    date: { type: String, required: true }, // ISO string
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },

}, {
    timestamps: true
})

transactionSchema.index({ user: 1, date: -1 });

export const Transaction = models.Transaction || model("Transaction", transactionSchema)