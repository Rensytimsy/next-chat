import mongoose, { Schema, models, model } from "mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface UserSchema extends Document {
  name: string;
  secondName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const userModel = new Schema<UserSchema>(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    secondName: {
      type: String,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
      min: 8,
      max: 20,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

userModel.pre("save", async function (next) {
  try {
    if (this.isModified("password") || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
    }
    next();
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error);
    next(error);
  }
});

const userSchema = models.User || model("User", userModel);
export default userSchema;
