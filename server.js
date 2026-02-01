import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectcloudinary from "./config/Cloudinary.js";
import userRouter from "./routes/userRoute.js"; // make sure filename matches exactly

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectcloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);

app.get("/", (_req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => console.log("Server started on PORT: " + port));
