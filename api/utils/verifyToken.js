import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


//check user Token is OK?
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated! (no token)"));
    };

    jwt.verify(token, process.env.JWT_secret_key, (err, user) => {
        if (err) return next(createError(403, "Your, Token is not valid! (expired)"));
        req.user = user;
        next();
    });
};
