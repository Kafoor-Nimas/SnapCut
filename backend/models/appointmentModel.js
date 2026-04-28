import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    barberId: { type: String, required: true },
    userData: { type: Object, required: true }, //snapshot of user
    barberData: { type: Object, required: true }, //snapshot of barber
    date: { type: String, required: true },
    time: { type: String, required: true },
    fees: { type: Number, required: true },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Confirmed", "Cancelled"],
    },
  },
  { timestamps: true },
);

const AppointmentModel =
  mongoose.models.appointment ||
  mongoose.model("appointment", appointmentSchema);

export default AppointmentModel;
