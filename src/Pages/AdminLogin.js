import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/LandingApp.css'
import BackgroundImage from '../assets/images/bg.png'

export default function AdminPage() {
    return (
        <><br/><br/>
        <div style={ HeaderStyle } className="text-center m-5-auto" >
            <h2>Admin Credentials</h2>
            <form action="/TableData">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <footer>
                <p><Link to="/LandingPage">Back to Homepage</Link></p>
            </footer>
            </form>
            
        </div>
        </>
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