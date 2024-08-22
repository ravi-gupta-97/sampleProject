
import { IUser } from "../interfaces/user";
import userModel from "../models/userModel"

export const createAUser = (userName: string, email: string, password: string): Promise<IUser> => {
    return userModel.create({ userName, email, password });
}

export const getUserDetails = (email: string): Promise<IUser | null> => {
    return userModel.findOne({ email });
}