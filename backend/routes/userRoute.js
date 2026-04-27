import express from "express";
import {
  adminLogin,
  userLogin,
  userRegister,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/admin-login", adminLogin);

export default userRouter;
