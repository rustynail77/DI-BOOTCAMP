import './App.css';
// import ErrorBoundary from './Components/ErrorBoundary';
import React from 'react';
import Color from './Components/Color'

// class BuggyCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         counter: 0
//       }
//     }
//     handleClick = () => {
        
//         this.setState({counter:this.state.counter+1})
//     }

//     render () {
//         if (this.state.counter>=5) {
//             throw Error ('Crashed...')
//         }
//       return(
//       <>
//         <h2 onClick={this.handleClick}>Counter: {this.state.counter}</h2>
        
//       </>
//       )  
//   }
// }

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <BuggyCounter /> */}
        <Color />
        
        
      </header>
    </div>
  );
}

export default App;
