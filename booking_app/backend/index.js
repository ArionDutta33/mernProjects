const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("./models/user")
const cookieParser = require("cookie-parser")
const imageDownloader = require("image-downloader")
const multer = require("multer")
mongoose.connect("mongodb://127.0.0.1:27017/airbnb").then(() => {
    console.log("mongodb connected")
})

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtTokenSecret = "78uijrkajnuhido938uwey"

app.use(express.json());
app.use(cookieParser())
app.use("/uploads", express.static(__dirname + "/uploads"))
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.get("/test", (req, res) => {
    res.send("test ok")
})

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const userDoc = await User.create({
            name, email, password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(userDoc)
    } catch (error) {
        res.status(422).json({ message: "Something went wrong" })
    }

})
app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const userDoc = await User.findOne({ email })
    if (userDoc) {
        const passwOk = await bcrypt.compareSync(password, userDoc.password)
        if (passwOk) {
            jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtTokenSecret, {}, (err, token) => {
                if (err) throw err;

                res.cookie("token", token).json(userDoc)
            })
        } else {
            res.status(422).json("not correct")
        }
    } else {
        res.json("not founds")
    }
})

app.get("/profile", (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtTokenSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id)
            res.json({ name, email, _id })
        })
    } else {
        res.json(null)
    }

})
app.post("/logout", (req, res) => {
    res.cookie("token", "").json(true)
})

app.post("/upload-by-link", async (req, res) => {
    const { link } = req.body
    const newName = 'photo' + Date.now() + '.jpg'
    await imageDownloader.image({
        url: link,
        dest: __dirname + "/uploads/" + newName
    })
    res.json(newName)

})
const photosMiddlware = multer({ dest: "uploads" })
app.post("/upload", photosMiddlware.array("photos", 100), (req, res,) => {
    res.json(req.files)
})
app.listen(3000, () => {
    console.log("server up")
})