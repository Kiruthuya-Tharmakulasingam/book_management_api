import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

export default mongoose.model("Book", bookSchema);
