import AppointmentModel from "../models/appointmentModel.js";
import BarberModel from "../models/barberModel.js";
import UserModel from "../models/userModel.js";

const bookAppointment = async (req, res) => {
  try {
    const { userId } = req.headers;
    const { barberId, date, time } = req.body;
    // get barber data
    const barber = await BarberModel.findById(barberId);

    if (!barber.availability) {
      return res.json({ success: false, message: "Barber not available" });
    }

    // get user data
    const user = await UserModel.findById(userId).select("-password");

    const appointement = new AppointmentModel({
      userId,
      barberId,
      userData: user,
      barberData: barber,
      date,
      time,
      fees: barber.fees, //take fees from barber not user input
    });

    await appointement.save();

    res.json({ success: true, message: "Appointment booked successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listUserAppointment = async (req, res) => {
  try {
    const { userId } = req.headers;

    const userAppointment = await AppointmentModel.find({ userId });

    res.json({ success: true, userAppointment });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    await AppointmentModel.findByIdAndUpdate(appointmentId, {
      status: "Cancelled",
    });

    res.json({ success: true, message: "Appointment cancelled successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listAllAppointment = async (req, res) => {
  try {
    const appointments = await AppointmentModel.find({});

    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;

    await AppointmentModel.findByIdAndUpdate(appointmentId, { status });

    res.json({
      success: true,
      message: "Appointment status updated succesfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  bookAppointment,
  listUserAppointment,
  cancelAppointment,
  listAllAppointment,
  updateAppointmentStatus,
};
