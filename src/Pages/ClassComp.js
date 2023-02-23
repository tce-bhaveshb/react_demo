import React from 'react';

// Basic Class Component Demo
/* export class Car extends React.Component {
    render() {
        return (
            <p>First Paragraph of Class Component Area</p>
        )
    }
} */

// Constructor in Component 
export class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "Red", model : "Ford"};
    }
    render() {
      return <h2>It's a {this.state.color} {this.state.model} Car.!</h2>;
    }
}

// Props in the Constructor
/* export class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <h2>It's a {this.props.color} {this.props.model} Car.!</h2>
        );
    }
} */

// Use color property in render function
/* export class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: "Red" };
    }
    render() {
        return (
        <h2>Its a {this.state.color} Car</h2>
        );
    }
} */

// Pass color in render() without constructor, add value when calling
/* export class Car extends React.Component {
    render() {
        return (<h2>Its a {this.props.color} Car</h2>
        );
    }
} */

