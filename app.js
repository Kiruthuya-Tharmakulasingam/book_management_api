import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/bookRoutes.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// db connection
const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/first_app")
      .then(() => console.log("DB Connected Successfully!"));
  } catch (error) {}
};
connectDB();

// Use routes
app.use("/api/users", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
