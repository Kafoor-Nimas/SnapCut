import express from "express";
import {
  adminLogin,
  getUserProfile,
  userLogin,
  userRegister,
} from "../controller/userController.js";
import userAuth from "../middleware/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/admin-login", adminLogin);
userRouter.get("/profile", userAuth, getUserProfile);

export default userRouter;
