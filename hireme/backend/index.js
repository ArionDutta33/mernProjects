require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("./Models/user")
const app = express()
const photographerModel = require("./Models/photgrapher")
const cors = require("cors")
const cookieParser = require("cookie-parser")
mongoose.connect("mongodb://127.0.0.1:27017/hiremeDB").then(() => {
    console.log("mongo up")
})

const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Enable Access-Control-Allow-Credentials
    optionsSuccessStatus: 200 // Proper property name
};
app.use(cors(corsOptions));
app.use(cookieParser())
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

app.get("/hireme", async (req, res) => {
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

app.post("/register", async (req, res) => {
    try {
        console.log("hit")
        const { username, password, email } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await User.create({
            username,
            email,
            password: hash
        })
        await user.save()
        const tokenJwt = jwt.sign({ email }, "secret")
        res.cookie("jwttoken", tokenJwt, {
            maxAge: 3600000, // Cookie expiration time (1 hour)
            httpOnly: true, // Helps prevent XSS attacks by making the cookie inaccessible to JavaScript
            secure: false, // Set to true if using HTTPS in production
            sameSite: 'lax'

        })
        res.status(200).json({ message: "user registered", user })
        console.log(req.body)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

app.post("/logout")

app.post("/login", (req, res) => {
    console.log(req.body)
})
app.listen(3000, () => {
    console.log("server up")
})

