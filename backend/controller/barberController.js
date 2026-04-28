import {v2 as cloudinary} from "cloudinary";
import BarberModel from "../models/barberModel.js";

const addBarber = async (req, res) => {
  try {
    const { name, services, phone, experience, about, fees } = req.body;
    const image = req.file;

    const result = await cloudinary.uploader.upload(image.path, {
        resource_type:"image",
    })

    const imageUrl = result.secure_url;
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listBarbers = async (req,res) =>{
    try {

        const barbers = await BarberModel.find({})

        res.json({success:true,barbers})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}