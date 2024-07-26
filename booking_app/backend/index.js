const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("./models/user")
mongoose.connect("mongodb://127.0.0.1:27017/airbnb").then(() => {
    console.log("mongodb connected")
})

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtTokenSecret = "78uijrkajnuhido938uwey"

app.use(express.json())
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

                res.cookie("token", token).json("pass ok")
            })
        } else {
            res.status(422).json("not correct")
        }
    } else {
        res.json("not founds")
    }
})
app.listen(3000, () => {
    console.log("server up")
})