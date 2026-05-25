import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

dotenv.config();

const app=express();
// Built in middleware
app.use(express.json());

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

export default app;