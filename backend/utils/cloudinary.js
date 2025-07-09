import {v2 as cloudinary} from 'cloudinary'


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

const uploadToCloudinary =async (filePath,folder)=> {
try{
    const fileUrl  = await cloudinary.uploader
    .upload(filePath,{
        folder: `splitmate/${folder}`
    })
    return fileUrl.secure_url;
}catch(error){
    console.log("Error in uploading to cloudinary",error)
}
}

export default uploadToCloudinary