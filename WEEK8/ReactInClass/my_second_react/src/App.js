import Hello from './Hello';
import User from './User';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hi there!</div>
        <Hello />
        <User name={"Make"} username={"Jake"} email={'em@ail.com'} />
        <User name={"Flake"} username={"Crake"} email={'ema@aail.com'} />
      </header>
    </div>
  );
}

export default App;
