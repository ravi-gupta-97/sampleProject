
import { IUser } from "../interfaces/user";
import userModel from "../models/userModel"

export const createAUser = (userName: string, email: string, password: string): Promise<IUser> => {
    return userModel.create({ userName, email, password });
}