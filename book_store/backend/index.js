import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./Routes/book.route.js"
const app=express()
app.use(cors())
dotenv.config()

const url=process.env.URL
try {
mongoose.connect(url).then(()=>{
    console.log("mongodb connected")
})
} catch (error) {
   console.log("error",error) 
}
//defining routes

app.use("/book",bookRoute)

app.listen(3000,()=>{
    console.log("hello world")
})