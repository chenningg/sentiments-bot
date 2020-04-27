import mongoose from "mongoose";

const Schema = mongoose.Schema;

// User schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email field is required."],
  },
  userKey: {
    type: String,
    required: [true, "Username field is required."],
  },
});

// Create models (object based on schema)
export const User = mongoose.model("User", UserSchema);
