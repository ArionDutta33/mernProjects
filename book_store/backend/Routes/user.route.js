import express from "express"
import {signup} from "../Controller/user.controller.js"
const router=express.Router()
router.post("/signup",signup)

export default router;