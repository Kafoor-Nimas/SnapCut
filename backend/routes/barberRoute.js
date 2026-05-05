import express from "express";
import {
  addBarber,
  listBarbers,
  removeBarber,
  toggleAvailability,
} from "../controller/barberController.js";
import adminAuth from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";

const barberRouter = express.Router();

barberRouter.post("/add", adminAuth, upload.single("image"), addBarber);
barberRouter.get("/list", listBarbers);
barberRouter.post("/remove", adminAuth, removeBarber);
barberRouter.post("/availability", adminAuth, toggleAvailability);


export default barberRouter;
