import React from 'react';

/* function Counter(){
return(
<p>Counter Component Area</p>
)
} */

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    IncrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                <button onMouseOver={this.IncrementCount}>Hovered {count} times</button>
            </div>
        )
    }
}

export default Counter;