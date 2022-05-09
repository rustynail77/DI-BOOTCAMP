import React from "react";
import Garage from "./Garage";
import Events from "./Events";

class Car extends React.Component {
    constructor() {
        super();
        
        this.state = {
            color: 'red'
        };
    }
    clickHandler = () => {
        alert('I was clicked');
    }
     
    render() {
        return (
            <>
                <h2>This car is {this.props.value.model} in color {this.state.color}</h2>
                <Garage size={'small'}/>
                <Events clickMe={this.clickHandler}/>
            </>
        )
    }
    
}

export default Car;