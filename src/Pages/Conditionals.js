import React from 'react';

/*function UserLoggin(props) {
    return <h1>Welcome back.!</h1>;
}
function GuestLoggin(props) {
    return <h1>Please sign up.</h1>;
}

 export default function Conditionals(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserLoggin />
    }
    return <GuestLoggin />
} */

function Right() {
    return <h2>Apply</h2>
}

function Wrong() {
    return <h2>Wait.!</h2>
}

export default function Conditionals(isAge) {
    const age = isAge.age;
    return (
        age > 17 ? <Right /> : <Wrong />
    );
}
