import React, {useState} from 'react';

export default function TwoWayDataBinding() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            Enter text here : &nbsp;
            <input onChange={handleChange} value={name}/>     
            <h1>{name}</h1>
        </div>
    )
}
