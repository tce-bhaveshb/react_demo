import React from 'react'
import '../CSS/LandingApp.css'
import { Link } from 'react-router-dom'

export default function StudentEntry() {
    return (
        <><br /><br />
            <datalist id="packages">
                <option value="Pro" />
                <option value="Front End Developer" />
                <option value="Back End Developer" />
                <option value="Full stack Developer" />
                <option value="UI / UX Designer" />
            </datalist>
            <datalist id="facultynames">
                <option value="Medha" />
                <option value="ABCD" />
            </datalist>
            <div style={HeaderStyle} className="text-center m-5-auto" >
                <h2>Enter New Student Data</h2>
                <form action="/TableData">
                    <p>
                    <label>Student Name &nbsp;</label>
                    <input type="text" name="student_name" required />
                    </p><p>
                    <label>Package Taken &nbsp;</label>
                    <input list="packages" required/>
                    </p><p>
                    <label>Faculty Assigned &nbsp;</label>
                    <input list="facultynames" required/>
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