import { generateToken } from "../lib/utils.js"
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";



export const signup = async (req, res) => {
    const { Fullname, gmail, password } = req.body
    try {
        if(!Fullname||!gmail||!password )
        {
            return res.status(400).json({ message: "All fields are required " })

        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 digit " })

        }

        const user = await User.findOne({ gmail })

        if (user) return res.status(400).json({ message: "gmail already Exists" })

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            Fullname,
            gmail,
            password: hashedpassword

        })
        if (newUser) {
            // jwt token generate 
            generateToken(newUser._id,res)
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                Fullname:newUser.Fullname,
                password:newUser.password,
                gmail:newUser.gmail,
                profilepic:newUser.profilepic,

            });

        }
        else{
            res.status(400).json({ message: "Invalid user data" })
            
        }



    } catch (error) {
        console.log('Error in signup controller',error.message)
        res.status(500).json({message:"Internal server ERROR"})
    };

}

export const login = (req, res) => {
    res.send("login route")

}

export const logout = (req, res) => {
    res.send("logout route")

}