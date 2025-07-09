import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default:'',
        required: false
    },

}, {
    timestamps: true
})

const User  = mongoose.model("User",UserSchema)
export default User