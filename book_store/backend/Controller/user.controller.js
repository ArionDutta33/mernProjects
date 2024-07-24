import mongoose from 'mongoose';
import User from "../Model/user.model.js"

import bcryptjs from "bcryptjs"
export const signup=async(req,res)=>{
    try {
        const{fullname,email,password}=req.body
        const user=User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashPassword=bcryptjs.hash(password,12)
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })
      await createdUser.save()
        res.status(201).json({message:"User created successfullys"})
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({message:"internal server error"})
    }
}

// export const login=async(req,res)=>{
//     try {
//         const{email,password}=req.body
//         const isMatch=bcryptjs.compare(password,usepassword)
//     } catch (error) {
        
//     }
// }