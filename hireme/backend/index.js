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
//nodemailer configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASS
    }
})
//end

app.get("/test", async (req, res) => {
    const test = await photographerModel.find({})

    res.status(200).json({ message: 'ok', data: test })
})

app.post("/email-send", async (req, res) => {
    const { photographerId, senderEmail, subject, text } = req.body;
    const photographer = await photographerModel.findById(photographerId);

    if (!photographer) {
        return res.status(404).json({ message: "Photographer not found" });
    }

    const photographerEmail = photographer.email;
    const photographerName = `${photographer.firstname} ${photographer.lastname}`;

    const mailOptions = {
        from: process.env.user_mail,
        to: photographerEmail,
        subject: subject,
        text: `Message from ${senderEmail}:\n\n${text}`,
        replyTo: senderEmail
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error });
    }

    console.log(req.body.senderEmail);
});

// app.post("/email-send", (req, res) => {
//     console.log(req.body)
// })
app.listen(3000, () => {
    console.log("server up")
})

