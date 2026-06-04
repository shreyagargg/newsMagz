import { supabase } from "../config/db.js";

const signup = async(email, password) => {
    console.log("Email: ", email)
    console.log("Password: ", password)
    const {data, error} = await supabase.auth.signUp({email, password})
        // console.log(JSON.stringify(result, null, 2));
    console.log("Data: ", data)
    console.log("Error: ", error)
    if(error) throw error
    return data
}

const login = async(email, password) => {
        console.log("Email: ", email)
    console.log("Password: ", password)
    const {data, error} = await supabase.auth.signInWithPassword({email, password})
        console.log("Data: ", data)
    console.log("Error: ", error)
    if(error) throw error
    return data
}

export {signup, login}