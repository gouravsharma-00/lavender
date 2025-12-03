import mongoose, { Schema, models, model } from "mongoose";
import { TransactionSchema } from './Transaction'

const UserSchema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  transactions: {
    type: [TransactionSchema],
    default: []
  },
  totalBalance: {
    type: Number, 
    default: 0
  },
  accountHealth: {
    type: String,
    enum : ["grow", "stable", "decline"],
    default: "stable"
  }
  
}, {
  timestamps: true,
});


export const User =  models.User || model("User", UserSchema);
