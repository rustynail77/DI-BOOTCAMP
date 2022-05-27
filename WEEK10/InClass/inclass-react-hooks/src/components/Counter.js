import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
handleClick = (num) => {
    this.setState({counter: this.state.counter+num});
}
render() {
    return (
        <>
            <button onClick={()=>this.handleClick(-1)}>-</button>
            <h4>Counter: {this.state.counter}</h4>
            <button onClick={()=>this.handleClick(1)}>+</button>        
        </>
    )
}
}
export default Counter;