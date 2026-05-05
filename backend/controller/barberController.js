import { v2 as cloudinary } from "cloudinary";
import BarberModel from "../models/barberModel.js";

const addBarber = async (req, res) => {
  try {
    const { name, services, phone, experience, about, fees } = req.body;
    const image = req.file;

    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const imageUrl = result.secure_url;

    // Create and save the barber
    const newBarber = new BarberModel({
      name,
      services: JSON.parse(services),
      phone,
      experience,
      about,
      fees,
      image: imageUrl,
    });

    await newBarber.save();

    res.json({ success: true, message: "Barber added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listBarbers = async (req, res) => {
  try {
    const barbers = await BarberModel.find({});

    res.json({ success: true, barbers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeBarber = async (req, res) => {
  try {
    const { id } = req.body;

    await BarberModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Barber removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const toggleAvailability = async (req,res)=>{
  try {
    const {id}=req.body;

    const barber = await BarberModel.findById(id)

    await BarberModel.findByIdAndUpdate(id,{availability:!barber.availability});

    res.json({success:true,message:"Availabilty Updated"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}

export { addBarber, listBarbers, removeBarber, toggleAvailability };
