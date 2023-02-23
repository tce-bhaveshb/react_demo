import React, { useState } from "react";

export default function Hook() {
  function Car() {
    const [brand] = useState("Ford");
    const [model] = useState("Mustang");
    const [year] = useState("1964");
    const [color] = useState("red");

    return (
      <>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p>
      </>
    );
  }

  /*____________________________________________*/

  function Car2() {
    let myCol = "Yellow";

    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "Black",
    });

    const updateColor = () => {
      setCar((previousState) => {
        return { ...previousState, color: myCol };
      });
    };

    return (
      <>
        <h1 style={{ color: car.color }}>My {car.brand}</h1>
        It is a {car.color} {car.model} from {car.year}.<br />
        <button type="button" onClick={updateColor}>
          {myCol}
        </button>
      </>
    );
  }

  /*____________________________________________*/

  function FavouriteColor() {
    const [color, setColor] = useState("red");

    return (
      <>
        <h1>My favourite <label style={{ color: color }}> color </label> is {color}.!</h1>
        <button type="button" onClick={() => setColor("Blue")}>Blue</button>{" "}&nbsp;
        <button type="button" onClick={() => setColor("Red")}>Red</button>{" "}&nbsp;
        <button type="button" onClick={() => setColor("Pink")}>Pink</button>{" "}&nbsp;
        <button type="button" onClick={() => setColor("Green")}>Green</button>{" "}&nbsp;
      </>
    );
  } //A

  return (
    <>
      <Car />
      <br />
      <Car2 />
      <br />
      <br />
      <FavouriteColor />
    </>
  );
}
