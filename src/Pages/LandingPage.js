import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/LandingApp.css'
import BackgroundImage from '../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Laqshya Academy</h1>
            <p className="main-para text-center">Attendance System</p>
            <div className="buttons text-center">
            <Link to="/TeacherLogin">
                    <button className="primary-button">Teachers log in</button>
                </Link>
                <Link to="/AdminLogin">
                    <button className="primary-button">Admin log in</button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}