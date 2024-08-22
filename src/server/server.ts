import express from 'express';
import userRouter from '../routes/userRoute'

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter);

export const startServer = (PORT: number) => new Promise((resolve, reject) => {
    try {
        console.log("Server connection initiated");
        app.listen(PORT, () => {
            console.log(`Server started at PORT ${PORT}`);
            resolve(true);
        });
    } catch (error) {
        reject(error);
    }

})