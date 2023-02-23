import React, { Component } from "react";

export default class XMLHttpReq extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.getData();
  }
  

  getData() {
    var xhr = new XMLHttpRequest(); // create a new XMLHttpRequest
    xhr.addEventListener("load", () => {      // get a callback when the server responds
      console.log(xhr.responseText); // update the state of the component with the result here
    });
    xhr.open("GET", "https://dog.ceo/api/breeds/list/all"); // open the request with the verb and the url
    xhr.send(); // send the request
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
        <h4>{/* xhr.responseText.status */}</h4>
      </div>
    );
  }
}
