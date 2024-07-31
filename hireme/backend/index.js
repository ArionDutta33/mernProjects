const express = require("express")
const mongoose = require("mongoose")
const app = express()
const photographerModel = require("./Models/photgrapher")
const cors = require("cors")
mongoose.connect("mongodb://127.0.0.1:27017/hiremeDB").then(() => {
    console.log("mongo up")
})


app.use(cors());
app.use(express.json());
app.get("/test", async (req, res) => {
    const test = await photographerModel.find({})

    res.status(200).json({ message: 'ok', data: test })
})


app.listen(3000, () => {
    console.log("server up")
})

