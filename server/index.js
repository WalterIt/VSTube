import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to DB!"))
    .catch((error) => {
      throw error;
    });
};

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // This piece of code is necessary to have access to the form data
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
app.use(cookieParser());

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/videos", videoRoutes);
app.use("/comments", commentRoutes);

app.listen("8800", () => {
  connect();
  console.log(`Server running on port: 8800!`);
});
