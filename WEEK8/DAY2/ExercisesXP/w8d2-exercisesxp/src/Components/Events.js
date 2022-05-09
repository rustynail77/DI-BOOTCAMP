import React from "react";

class Events extends React.Component {
    constructor () {
        super();
        this.state = {
            isToggleOn: true
        }
    }
    handleKeyPress = (e) => {
        if (e.key==='Enter') {
           alert(e.target.value);
        }
    }
    handleClick = (e) => {
        this.setState({
            isToggleOn:(
                (this.state.isToggleOn)? false : true)
            })
    }
    render() {
        return (
            <>
                <button onClick={this.props.clickMe}>Click Me</button>
                <input onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleClick}>{this.state.isToggleOn?"ON":"OFF"}</button>
            </>
        )
    }
    
}

export default Events;