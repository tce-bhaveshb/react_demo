/* function Car2(props) {
    return <h3>It's a {props.brand} Car.!</h3>;
} */

function MissedGoal() {
    return <h1>Missed.!! </h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal.!!</h1>;
  }
  
export default function Props(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </>
    );
  }  


/*
function Garage() {
    return (
        <>
            <h3>Who lives in my garage?
            <Car2 brand="Ford" /></h3>
        </>
    );
} */

/* function Garage() {
    const brandName = "Ford";
    return (
        <>
            <h2>Who lives in my garage?</h2>
            <Car2 brand={brandName} />
        </>
    );
} */

//export default Garage;