import { useState, createContext, useContext } from "react";
//import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function UseContext(){

function Component1() {
  const [user] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h3>{`Hello ${user}!`}</h3>
      <Component2/>
      </UserContext.Provider>
  );
}

function Component2() {
  return ( 
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />
    </>
  );
}

function Component5() {
    const user = useContext(UserContext);
  return (
    <>
      <h3>Component 5</h3>
      <h3>{`Hello ${user} again!`}</h3>
    </>
  );
}

return(
  <>
  <Component1 />
  <Component2 />
  <Component3 />
  <Component4 />
  <Component5 />
  </>
)
}