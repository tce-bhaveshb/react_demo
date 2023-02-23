import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(0);
  const [qube, setQube] = useState(0);

  useEffect(() => {
    setSquare(() => count * count);
    setQube(() => count * count * count);
  }, [count]); // <- add the count variable here

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Click Me.!!</button><br/><br/>
      <p>Count: {count}</p>
      <p>Square: {square}</p>
      <p>Qube: {qube}</p>
    </>
  );
}
