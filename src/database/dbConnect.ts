import mongoose from 'mongoose';

export const databaseConnect = (dbURL: string) => new Promise((resolve, reject) => {
    try {
        console.debug("database connection initiated");
        mongoose.connect(dbURL);
        console.debug("database connected")
        resolve(true);
    } catch (error) {
        reject(error);
    }
})