import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// db connection
const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/book_api")
      .then(() => console.log("DB Connected Successfully!"));
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};
connectDB();

// Use routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
