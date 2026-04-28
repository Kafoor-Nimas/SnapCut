import express from "express";
import { addBarber, listBarbers, removeBarber } from "../controller/barberController.js";
import adminAuth from "../middleware/authAdmin.js";

const barberRouter = express.Router();

barberRouter.post("/add",adminAuth, addBarber);
barberRouter.get("/list", listBarbers);
barberRouter.post("/remove",adminAuth,removeBarber)

export default barberRouter;
