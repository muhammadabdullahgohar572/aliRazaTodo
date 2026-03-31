import mongoose, { Schema } from "mongoose";

const usersachma = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "email required !!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password required !!"],
  },
  about: String,
  profileurl: String,
});

// Check if the model is already compiled and available in mongoose.models
export const user = mongoose.models.users || mongoose.model("users", usersachma);
