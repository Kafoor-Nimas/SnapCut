import mongoose from "mongoose";

const barberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    image: { type: String, required: true },
    phone: { type: Number, required: true },
    experience: { type: Number, required: true },
    about: { type: String, required: true },
    availability: { type: Boolean, default: true },
    fees: { type: Number, required: true },
  },
  { timestamps: true },
);

const BarberModel =
  mongoose.models.barber || mongoose.model("barber", barberSchema);

export default BarberModel;
