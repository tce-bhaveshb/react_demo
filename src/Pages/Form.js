import React from 'react';
import { useState } from 'react';

// console.log("Inside");
// Simple Form
/* export default function Form(){
    return(
        <form>
            <label>Enter your name : 
            <input type="text" /></label>
        </form>
    ); 
} */

// Handling forms
/* export default function Form() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />  
            </label>
        </form> 
    );
} */

// Use of Submit form 
export default function Form() {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You entered name : "${name}" and password : "${pwd}"`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name :</label>&nbsp;
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br/><br/>
            <label>Enter your password :</label>&nbsp;
            <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <p/><br/>
            <input type="submit" />
        </form>
    );
}