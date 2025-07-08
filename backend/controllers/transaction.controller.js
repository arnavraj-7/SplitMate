import Transaction from './../models/transaction.schema.js'
const getTransactionbyId = async(req,res)=>{
    try {
        const transaction = await Transaction.findById(req.params.id)
        res.status(200).json(transaction)
        console.log("Transaction sent to :",req.params.id);
    } catch (error) {
        console.log("Error in getting transaction",error);
        res.status(500).json({"Message":"Internal Server Error. Please try again later"})
    }

}


const postTransactionbyId = async(req,res)=>{
    try {
        const transaction = await Transaction.insertOne(req.params.id)
        res.status(200).json(transaction)
        console.log("Transaction posted by :",req.params.id);
    } catch (error) {
        console.log("Error in posting transaction",error);
        res.status(500).json({"Message":"Internal Server Error. Please try again later"})
    }

}


export {getTransactionbyId,postTransactionbyId}