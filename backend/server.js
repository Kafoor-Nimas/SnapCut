import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();


// routes
app.use("/api/user", userRouter);


const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
