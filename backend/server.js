import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import barberRouter from "./routes/barberRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();
// connect cloudinary
connectCloudinary();

// routes
app.use("/api/user", userRouter);
app.use("/api/barber", barberRouter);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
