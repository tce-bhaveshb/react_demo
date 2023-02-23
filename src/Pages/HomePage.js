import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/LandingPage">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
