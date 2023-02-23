import React from 'react';
import style from '../CSS/MyStyle.module.css';

export default function List() {

    function Car(props) {
        return <li>Its a {props.brand}</li>
    }

    /* export default function Garage(){
        const cars = ['Ford' , 'Suzuki', 'Audi' ];
        return(
            <>
                <h2>Which cars are in my garage ?</h2>
                <ul>
                    {cars.map((car) => <Car brand = {car} />)}
                </ul>
            </>
        );
    } */

    function Garage() {
        const myStyleColor = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Sans-Serif",
            textAlign: "center"
        }

        const cars = [
            { id: 1, brand: 'Ford' },
            { id: 2, brand: 'Suzuki' },
            { id: 3, brand: 'Audi' }
        ];
        
        return (
            <>
                <div className={style.mybody}>
                    <h2 style={myStyleColor}>Which cars are in my garage ?</h2>
                    <ul style={{ color: "Cyan", textAlign: "left" }}>
                        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
                    </ul>
                    {/* <p className={style.bigblue}>CSS Practise</p> */}
                </div>
            </>
        );
    }

    return (
        <>
            <Garage />
        </>
    )
}