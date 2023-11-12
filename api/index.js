import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

//*************************************************************************** */
import cors from "cors";

// const cors = () => (req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Auth');
//     res.setHeader('access-control-expose-headers', 'Set-Cookie');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// };




//************************************************************************************* */

//import on file 'routes'
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";


//********************************************************************************** */

import cookieParser from "cookie-parser";



//********************************************************************************** */

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_KEY);
        console.log("MongoDB acc & pass OK!");
    } catch (error) {
        throw error;
    }
};


mongoose.connection.on('error', err => {
    logError(err);
});


mongoose.connection.on("disconnected", () => {
    console.log("ERROR connect or reconnect to MongoDB!");
});


mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
});



app.listen(8800, () => {
    connect();
    console.log("connected to back-end at port:8800 ! -->  http://localhost:8800/");
});

//***************************************************************************************************************** */



//"cors" for fix Access to XMLHttpRequest at '...' from origin 'localhost:3000' has been blocked by CORS policy in development mode 
//This fix the POST request from react app in development mode. 
app.use(cors());

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   }));
// app.options('*', cors())

//middleware
app.use(cookieParser());

//middleware's to access routes
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);



//middleware's for err on API
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Hello Error from Handler! Something went wrong Bro!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        massage: errorMessage,
        stack: err.stack,
    })
})