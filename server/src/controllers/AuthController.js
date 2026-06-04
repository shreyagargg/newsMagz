import {signup, login} from "../services/AuthServices.js"

const SignupController = async (req, res) => {
    try{
        console.log("body: ", req.body)
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({error: "Email and password are required"})
        }
        const data = await signup(email, password)
        res.status(201).json(data)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const LoginController = async (req, res) => {
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({error: "Email and password are required"})
        }
        const data = await login(email, password)
        res.status(200).json(data)
    }
    catch(error){
        return res.status(400).json({error: error.message})
    }
}

export {SignupController, LoginController}