import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  listUserAppointment,
} from "../controller/appointmentController.js";
import userAuth from "../middleware/authUser.js";

const appointmentRoute = express.Router();

appointmentRoute.post("/book", userAuth, bookAppointment);
appointmentRoute.get("/list", userAuth, listUserAppointment);
appointmentRoute.post("/cancel", userAuth, cancelAppointment);

export default appointmentRoute;
