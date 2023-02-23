import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/LandingApp.css'

export default function PackagesEntry() {
    return (
        <><br /><br />
            <div style={HeaderStyle} className="text-center m-5-auto" >
                <h2>Create New Package</h2>
                <form action="/TableData">
                    <p>
                    <label>Subject 1 &nbsp;</label>
                    <input type="text" name="subject_1"/>
                    </p><p>
                    <label>Subject 2 &nbsp;</label>
                    <input type="text" name="subject_2"/>
                    </p><p>
                    <label>Subject 3 &nbsp;</label>
                    <input type="text" name="subject_3"/>
                    </p><p>
                    <label>Subject 4 &nbsp;</label>
                    <input type="text" name="subject_4"/>
                    </p><p>
                    <label>Subject 5 &nbsp;</label>
                    <input type="text" name="subject_5"/>
                    </p><p>
                    <button id="sub_btn" type="submit">Submit</button>
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
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}