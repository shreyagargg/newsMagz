// import React, { useState } from 'react'

import Header from "../components/Header"
import Navbar from "../components/NavBar"

function LoginScreen() {
    return(
        <div className="signup-screen">
            <div className="title-bar">
                <Header />
                <Navbar />
           
            </div>
            {/* <h1>Signup Screen</h1> */}
        </div>
    )
}

export default LoginScreen