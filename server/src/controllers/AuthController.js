// import {signup, login} from "../services/AuthServices.js"
import bcrypt from 'bcrypt'

// import bcrypt from "bcrypt"
import { supabase } from "../config/db.js"

const SignupController = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email,
          hashed_password: hashedPassword,
          role: "reader"
        }
      ])
      .select("user_id, email, created_at")

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(201).json(data[0])
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// export default SignupController

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" })
    }

    // const result = await db.query(
    //   `SELECT * FROM users WHERE email = $1`,
    //   [email]
    // )
    const {data: users , error} = await supabase.from("users").select("*").eq("email", email)
    if(error) {
      return res.status(400).json({ error: error.message })
    }


    const user = users[0]

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" })
    }

    const isMatch = await bcrypt.compare(password, user.hashed_password)

    if (!isMatch) {
      return res.status(400).json({ error: "Wrong Password" })
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.user_id,
        email: user.email
      }
    })

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export { SignupController, LoginController }