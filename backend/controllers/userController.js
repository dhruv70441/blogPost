import User from "../models/user.model.js"

export const userLogin =  (req, res) => {
    res.json({mssg:"user login"})    
}
export const userRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const user = await User.signup(firstName, lastName, email, password);
        res.status(201).json(user)// try to send user
    } catch (error) {
         res.status(400).json({error: error.message})
    }  
}