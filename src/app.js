import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import ApiError from "./utils/appError.js";

dotenv.config();

const app=express();
// Built in middleware
app.use(express.json());
app.use(loggerMiddleware)

//THird party middleware

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Test Route

app.get("/",(req,res)=>{
  res.status(200).json({
    success:true,
    message:"Task management system api running 😶"
  })
})


//Invalid route

app.use((req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

//Global error

app.use(errorMiddleware)


export default app;