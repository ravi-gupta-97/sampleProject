import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user';

const userSchema: Schema = new Schema<IUser>({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const userModel = model<IUser>('user', userSchema);

export default userModel;
