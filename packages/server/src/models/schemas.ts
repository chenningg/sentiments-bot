import mongoose from "mongoose";

const Schema = mongoose.schema;

// Create user schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username field is required."],
  },
});
