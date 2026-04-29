import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  listUserAppointment,
} from "../controller/appointmentController.js";
import userAuth from "../middleware/authUser.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/book", userAuth, bookAppointment);
appointmentRouter.get("/list", userAuth, listUserAppointment);
appointmentRouter.post("/cancel", userAuth, cancelAppointment);

export default appointmentRouter;
