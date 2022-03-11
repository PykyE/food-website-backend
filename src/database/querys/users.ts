import { userModel } from "../models/user.model";

export const getAllUsers = () => {
  return userModel.find({});
};

export const getUserById = (userId: string) => {
  return userModel.findById(userId);
};

export const deleteUserById = (userId: string) => {
  return userModel.findByIdAndRemove(userId);
};

export const registerNewUser = (user: {}) => {
  return userModel.create(user);
};
