import { Request, Response } from 'express';
import { dbQueries } from '../database';
import { generateToken, passwordEncrytion } from './utils';
import { IUser } from '../interfaces/user';


export const createUser = async (req: Request, res: Response) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return res.status(400).json({ message: "Incomplete data" });
        }
        const encryptedPassword = await passwordEncrytion(password);
        const user: IUser = await dbQueries.createAUser(userName, email, encryptedPassword);
        const data = { id: user._id };
        const token = generateToken(data);
        return res.status(201).json({ token, message: "User created Successfully" });
    } catch (error) {
        return res.status(500).json("Internal server error")
    }

}