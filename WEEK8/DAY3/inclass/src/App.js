import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  handleClicks = (i) => {
    this.setState({counter:this.state.counter+i});
  }
  render() {
    return (
      <>
        <div className="App-header">
          <div><button onClick={()=>this.handleClicks(1)}>Add</button>
          <button onClick={()=>this.handleClicks(-1)}>Reduce</button></div>
          <div>{this.state.counter}</div>
        </div>
      </>
      );
  }
  
}

export default App;
