import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default:'',
        required: false
    },
    transactions: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Transaction',
            required:false
        }
    ]

}, {
    timestamps: true
})

const User  = mongoose.model("User",UserSchema)
export default User