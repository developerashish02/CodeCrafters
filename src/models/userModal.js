import mongoose from "mongoose";
import { boolean } from "yup";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
    verifyToken: String,
    verifyTokenExipry: Date

});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
