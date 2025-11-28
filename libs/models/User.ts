import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    Id: { type: String },
    publicKey: { type: String },
    counter: {type: Number},
    deviceType: {type: String},
    backedUp: {type: Boolean},
    transport: {type: [String]}
}, 
{
    timestamps: true
})

export default models.User || model("User", UserSchema)