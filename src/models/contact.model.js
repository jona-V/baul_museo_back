import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);