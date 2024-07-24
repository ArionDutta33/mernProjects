import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./Routes/book.route.js"
import userRoute from "./Routes/user.route.js"
const app=express()
app.use(cors())
app.use(express.json())
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
app.use("/users",userRoute)

app.listen(3000,()=>{
    console.log("hello world")
})