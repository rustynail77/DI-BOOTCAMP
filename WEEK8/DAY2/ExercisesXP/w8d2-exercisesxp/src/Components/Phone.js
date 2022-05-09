import React from "react";

class Phone extends React.Component {
    constructor() {
        super();
        
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    changeColor = () => {
        this.setState({color:'blue'});
    }
    render() {
        return (
            <>
                <h3>My Phone is a {this.state.brand}</h3>
                <div>it is {this.state.color} {this.state.model} from {this.state.year}</div>
                <button onClick={this.changeColor}>Change to BLUE!</button>
            </>
        )
    }
    
}

export default Phone;