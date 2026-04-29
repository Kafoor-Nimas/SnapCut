import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  listAllAppointment,
  listUserAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import userAuth from "../middleware/authUser.js";
import adminAuth from "../middleware/authAdmin.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/book", userAuth, bookAppointment);
appointmentRouter.get("/list", userAuth, listUserAppointment);
appointmentRouter.post("/cancel", userAuth, cancelAppointment);
appointmentRouter.get("/list-all", adminAuth, listAllAppointment);
appointmentRouter.post("/status", adminAuth, updateAppointmentStatus);

export default appointmentRouter;
