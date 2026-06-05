import { supabase } from "../config/db.js";

// const signup = async(email, password) => {
//     console.log("Email: ", email)
//     console.log("Password: ", password)
//     const {data, error} = await supabase.auth.signUp({email, password})
//         // console.log(JSON.stringify(result, null, 2));
//     console.log("Data: ", data)
//     console.log("Error: ", error)
//     if(error) throw error
//     return data
// }

// const login = async(email, password) => {
//         console.log("Email: ", email)
//     console.log("Password: ", password)
//     const {data, error} = await supabase.auth.signInWithPassword({email, password})
//         console.log("Data: ", data)
//     console.log("Error: ", error)
//     if(error) throw error
//     return data
// }

// export {signup, login}


import jwt from "jsonwebtoken"

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.user_id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )
}