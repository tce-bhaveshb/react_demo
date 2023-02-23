import React, { useState } from 'react';
import { Button } from './Button.js';
import { ListComponent } from './ListComponent.js';

function BindComponent() {

  const [components, setComponents] = useState([]);
  const [componentNames] = useState(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']);

  function addComponent() {
    if (componentNames.length > 0) {
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);// .splice()
    } else {
      window.alert("No more planets to add!");
    }
  }

    return (
      <div>
        <p>Click below button to know planet names</p>
        <Button onClick={addComponent} text="Click me.!!" />
        {components.map((item, i) => (<ListComponent text={item} />))} {/* .maps() */}
      </div>
    )
}

export default BindComponent;