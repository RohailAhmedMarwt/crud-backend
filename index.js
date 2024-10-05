import express from "express";
import Connection from "./db/connection.js";
import cors from 'cors'
import dotenv from 'dotenv'
import foodRouter from "./Routes/foodRoute.js";

const app = express();

dotenv.config()

app.use(express.json())
app.use(cors(
    {
        origin:["https://crud-plum-two.vercel.app/"],
        methods:["POST" , "GET"]
    }
))
const PORT = process.env.PORT;
Connection();

app.use("/api/Foods" , foodRouter)
app.listen(PORT , ()=>{
    console.log(`Backend is running on port ${PORT}`);
})
