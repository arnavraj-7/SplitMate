import uploadToCloudinary from "../utils/cloudinary.js";
import Transaction from "./../models/transaction.schema.js";

const getTransactionbyId = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).json(transaction);
    console.log("Transaction sent to :", req.params.id);
  } catch (error) {
    console.log("Error in getting transaction", error);
    res
      .status(500)
      .json({ Message: "Internal Server Error. Please try again later" });
  }
};

const postTransactionbyId = async (req, res) => {
  try {
    const input = req.body;
    const inputFile = req.files?.image;
    let imgUrl = "";
    if (inputFile) {
      const filePath = inputFile.tempFilePath;
      imgUrl = await uploadToCloudinary(filePath, "transaction");
    }
    const new_transaction = new Transaction({
      paidBy: input.paidBy,
      paidFor: input.paidFor,
      amount: input.amount,
      text: input.text,
    });
    const saved = await new_transaction.save();
    
  
    res.status(200).json(saved);
    console.log("Transaction posted by :", req.params.id);
  } catch (error) {
    console.log("Error in posting transaction", error);
    res
      .status(500)
      .json({ Message: "Internal Server Error. Please try again later" });
  }
};

export { getTransactionbyId, postTransactionbyId };
