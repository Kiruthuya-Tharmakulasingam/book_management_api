import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/bookRoutes.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use("/api/users", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
