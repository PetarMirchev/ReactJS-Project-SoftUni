import User from '../models/User.js';
//bcryptjs for Hash user password 
import bcrypt from "bcryptjs";
//jsonwebtoken 
import jwt from "jsonwebtoken";

import { createError } from "../utils/error.js";



//register function
export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hashPassword,
        });

        await newUser.save()
        res.status(201).send("User has been created/register!")
    } catch (err) {
        next(err);
    }
};



//login function
export const login = async (req, res, next) => {
    try {
        //check username
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"))

        //check password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Entered password not correct!"))

        //if password is correct whe create new token for user (is admin?)
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_secret_key);

        const { password, isAdmin, ...otherDetails } = user._doc;

        //cookie access_token --> only by (httpOnly: true) more secure!
        res.cookie("access_token", token, { httpOnly: true, }).status(200).json({ ...otherDetails, isAdmin });
    } catch (err) {
        next(err);
    }
};

//***************************************************************************************************** */
// export const logout = async (req, res, next) => {
//     try {
//         res.clearCookie('auth');
//         res.status(200);
//     } catch (error) {
//         next(error);
//     }
    
// };
//******************************************************************************************************** */