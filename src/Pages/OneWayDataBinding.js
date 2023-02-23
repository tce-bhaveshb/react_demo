import React, { useState } from "react";

export default function OneWayDataBinding() {
  function Parent(props) {
    const [text, setText] = useState("Hello");
    return (
      <div>
        <h1>{text}</h1>
        <Child changeText={(text) => setText(text)} />
      </div>
    );
  }

  function Child(props) {
    return (
      <div>
        <button onClick={() => props.changeText("World")}>
          Change the texts
        </button>
      </div>
    );
  }

  return <Parent />;
}

