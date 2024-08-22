import { Request, Response } from 'express';
import { dbQueries } from '../database';
import { generateToken, passwordDecryption, passwordEncrytion } from './utils';
import { IUser } from '../interfaces/user';
import { getUserDetails } from '../database/dbQueries';



export const createUser = async (req: Request, res: Response) => {
    try {
        const { userName, email, password }: IUser = req.body;
        if (!userName || !email || !password) {
            return res.status(400).json({ message: "Incomplete data" });
        }
        const encryptedPassword = await passwordEncrytion(password);
        const user: IUser = await dbQueries.createAUser(userName, email, encryptedPassword);
        const data = { id: user._id };
        const token = generateToken(data);
        return res.status(201).json({ token, message: "User created Successfully" });
    } catch (error) {
        return res.status(500).json({ error });
    }

}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password }: IUser = req.body;
        if (!email || !password)
            return res.status(400).json({ message: "Incomplete data" });
        const user: (IUser | null) = await getUserDetails(email);
        if (!user)
            return res.status(400).json({ message: "User does not exist" });
        const passwordFlag: boolean = await passwordDecryption(password, user.password);
        if (!passwordFlag)
            return res.status(400).json({ message: "Password Error" });
        const data = { id: user._id };
        const token = generateToken(data);
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ error });
    }
}