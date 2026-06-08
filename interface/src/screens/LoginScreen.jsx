import { useState } from 'react'

import Header from "../components/Header"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [isAuthor, setIsAuthor] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async () => {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })

        })
        const data = await res.json()
        console.log(data)
        
    }

    // const handleChange = (event) => {
    //     setIsAuthor(event.target.checked)
    // }

    return (
        <div className="login-screen">
            {/* <div className="title-bar"> */}
            <Header />
            <Navbar />
            <main className="max-w-md mx-auto mt-12 px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold">
                        Login to your account
                    </h2>

                    <p className="mt-3">
                        Don't have an account?{" "}
                        <span onClick={() => { navigate("/signup") }} className="text-primary cursor-pointer">
                            Sign up
                        </span>
                    </p>
                </div>
                <div className="flex items-center my-8">
                    <div className="flex-1 border-t"></div>

                    <span className="px-4 text-gray-500">
                        OR
                    </span>

                    <div className="flex-1 border-t"></div>
                </div>
                <div className=""></div>
                {/* <span>OR</span> */}
                <div className="space-y-4">
                    <div className="relative ">
                        <MdOutlineEmail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={20}
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full border border-zinc-700 rounded p-3 pl-10"
                        />
                    </div>

                    <div className="relative">
                        <FiLock
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={20}
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full border border-zinc-700 rounded p-3 pl-10"
                        />
                    </div>
                    {/* <label>
                        <input type="checkbox" checked={isAuthor} onChange={handleChange} className="mr-2" />
                        I am an author
                    </label> */}
                </div>
                <button className="mt-4 w-full bg-black rounded relative overflow-hidden border border-black
    px-4 py-2 text-white z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white
    before:transition-all before:duration-500 before:ease-in-out before:-z-10 hover:text-black hover:before:w-full"
                    onClick={handleLogin}>
                    LOGIN
                </button>
            </main>

            {/* </div> */}
            {/* <h1>Signup Screen</h1> */}
            <Footer />
        </div>
    )
}

export default LoginScreen