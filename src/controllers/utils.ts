import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_KEY = "abcdefghijklmnopqrstuvwxyz";

export const passwordEncrytion = async (password: string) => {
    const salt = await bcrypt.genSalt(8);
    return bcrypt.hash(password, salt);
}
export const passwordDecryption = async (password: string, storedPassword: string) => {
    return bcrypt.compare(password, storedPassword);
}

export const generateToken = (data: object) => {
    return jwt.sign(data, JWT_KEY);
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_KEY);
}

