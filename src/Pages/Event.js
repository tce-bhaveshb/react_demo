import React from 'react';

// React event 
/* export default function Football() {
    const shoot = () => {
        alert("Great shot");
    }
    return (
        <button onClick={shoot}>Take a shot.!</button>
    );
} */

// React event using Parameter
/* export default function Football() {
    const shoot = (a) => {
        alert(a);
    }
    return (
        <button onClick={()=> shoot("Goal !")}> Take a shot.!</button>
    );
} */

// React event using Object
/* export default function Football(){
    const shoot = (a, b) =>{
        alert(a + " Event is : " + b.type);
        console.log(a); 
    }
    return(
        <button onClick={(event)=>shoot("Goal.!", event)}>
            Take a shot
        </button>
    );
} */

export default class Football extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: "", lastName: ""
        };
    }

    changeFirst(event) {
        this.setState({
            yourName: event.target.value
        });
    }

    changeLast(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Event Example</h2>

                <label htmlFor="name">Enter First Name : &nbsp;</label>
                <input type="text" id="yourName" onChange={this.changeFirst.bind(this)} /><p />

                <label htmlFor="name">Enter Last Name : &nbsp;</label> 
                <input type="text" id="lastName" onChange={this.changeLast.bind(this)}></input><p />
  
                <label htmlFor="name">Full Name : &nbsp; {this.state.yourName} {this.state.lastName} </label>
                    
            </div>
        );
    }
}

