import User from "../models/users.schema.js";
import uploadToCloudinary from "../utils/cloudinary.js";

const postUser = async (req, res) => {
    try {
        const input = req.body
        const inputFile = req.files?.image;
        console.log("inputFile",inputFile);
        console.log("body",input);
        const userName = input.username
        const user = await User.findOne({username:userName})
        if(user){
            res.status(400).json("username is taken. Please try again with another username")
            return;
        }
        let imgUrl = "";
        if (inputFile) {
            const filePath = inputFile.tempFilePath;
            imgUrl = await uploadToCloudinary(filePath,'profile');
        }
        const newUser = new User({
            username: userName,
            name:input.name,
            profilePic:imgUrl

        })
        await newUser.save()
        res.status(200).json(newUser);
    } catch (error) {
        console.log("Error in posting user:\n", error);
    }
};    


const getUser = async(req,res)=>{
    const id = req.params.id
    try {
        res.status(200).json(`${id}`)
    } catch (error) {
        console.log("Error in getting user:\n", error);
    }
}

export {postUser,getUser}