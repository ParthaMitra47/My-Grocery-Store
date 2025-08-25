import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    cartItems:{type: Object, default:{} },
}, {minimize:false})
// if the cartItems field was {}, Mongoose would delete it.But Setting minimize: false disables this feature, ensuring that the cart: {} field is always saved to the database even when empty.

const User = mongoose.models.user || mongoose.model('user', userSchema)

//If model already exists use it, if not create new using the given schema.

export default User //to use it in other files