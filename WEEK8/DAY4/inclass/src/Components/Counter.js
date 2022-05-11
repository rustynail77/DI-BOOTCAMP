import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0
        }
    }
    add = () => {
        this.setState({counter:this.state.counter+1})
    }
    render() {
        if (this.state.counter>=5) {
            throw Error ('Crashed...')
        }
        return (
            <>
                Count: {this.state.counter}
                <button onClick={this.add}>Add</button>
                <br />
            </>
        )
       
    }
}
export default Counter;