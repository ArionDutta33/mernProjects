require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")

const app = express()
const photographerModel = require("./Models/photgrapher")
const cors = require("cors")
mongoose.connect("mongodb://127.0.0.1:27017/hiremeDB").then(() => {
    console.log("mongo up")
})


app.use(cors());
app.use(express.json());
// //nodemailer configuration
// const transporter = nodemailer.createTestAccount({
//     service: "gmail",
//     auth: {
//         user: process.env.user_mail,
//         pass: process.env.user_pass
//     }
// })
// //end

app.get("/test", async (req, res) => {
    const test = await photographerModel.find({})

    res.status(200).json({ message: 'ok', data: test })
})

// //email set up
// app.post("/emial-send", async (req, res) => {
//     const { photographerId, subject, text } = req.body;
//     const photographer = await photographerModel.findById(photographerId);
//     const photgrapherEmail = photographer.email;
//     const photographerName = photographer.firstname + photographer.lastname;

//     const mailOptions = {
//         from: process.env.user_mail,
//         to: photgrapherEmail,
//         subject: subject,
//         text: text
//     }
//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: "Email sent successfully" })
//     } catch (error) {
//         res.status(500).json({ message: "Failed to send email", error })
//     }
// })

app.listen(3000, () => {
    console.log("server up")
})

