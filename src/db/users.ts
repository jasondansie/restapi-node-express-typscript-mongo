import exp from "constants";
import { StringIterator } from "lodash";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    authentication: {
        password: {type: String, required: false},
        salt: {type: String, required: false},
        sessionToken: {type: String, required: false},
    },
});

export const userModel = mongoose.model('User', userSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail = (email: string) => userModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => userModel.findOne({
    'authentication.sessionToken': sessionToken,
});
export const getUserById = (id: string) => userModel.findById(id);
export const createUser = (values: Record<string, any>) => new userModel(values)
.save().then((user) => user.toObject());
export const deletUserById = (id: string) => userModel.findOneAndDelete({_id: id});
export const updateUserById = (id: string, values: Record<string, any>) => userModel.findByIdAndUpdate(id, values);