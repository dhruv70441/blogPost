import User from "../models/user.model.js"

export const userLogin =  (req, res) => {
    res.json({mssg:"user login"})    
}
export const userRegister = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password);
        res.status(201).json({email, password})// try to send user
    } catch (error) {
         res.status(400).json({error: error.massege})
    }  
}