import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        
        this.state = {
            favoriteColor: 'red'
        };
    }
    handleColorChange = () => {
        this.setState({favoriteColor:'blue'})
    }
    render() {
        return (
            <>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button onClick={this.handleColorChange}>Change fav color</button>
            </>
        )
    }
    
}

export default Color;