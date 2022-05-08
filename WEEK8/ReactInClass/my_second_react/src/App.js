import Hello from './Hello';
import User from './User';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hi there!</div>
        <Hello />
        <User />
      </header>
    </div>
  );
}

export default App;
