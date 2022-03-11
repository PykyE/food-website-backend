import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (email: string) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },
      message: (props: any) => {
        `Email ${props.value} doesn't have a valid format`;
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 8,
  },
});
