import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    paidBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    paidFor:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    share:{
        type:Number,
        required:true
    }
}],
amount:{
    type:Number,
    required:true
},
    text:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        default:'',
        required:false
    },
    settled:{
        type:Boolean,
        default:false,
    },
    settledAt:{
        type:Date,
        required:false
    }
},{
    timestamps:true
})

const Transaction = mongoose.model("Transaction",TransactionSchema)
export default Transaction