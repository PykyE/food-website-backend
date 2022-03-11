import mongoose from "mongoose";
import { userSchema } from "../schemas/user.schema";

export const userModel = mongoose.model("User", userSchema);
