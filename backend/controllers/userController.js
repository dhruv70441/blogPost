import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "Invalid email" });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid password" });
        }

        // Generate token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "90d",
        });

        // Send response
        return res.status(200).json({
            status: "success",
            token,
            message: "User logged in successfully",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const userRegister = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const user = await User.signup(firstName, lastName, email, password);
       //res.status(201).json(user)
        const token = jwt.sign({_id: user._id},process.env.SECRET_KEY,{
            expiresIn:"90d",
        })
        res.status(201).json({
            status:"success",
            message:"User registered successfully",
            token,
            user:{
                id:user._id, 
                firstName:user.firstName,
                lastName:user.lastName, 
                email:user.email
            }
        })
    } catch (error) {
         res.status(400).json({error: error.message})
    }  
    next()
}