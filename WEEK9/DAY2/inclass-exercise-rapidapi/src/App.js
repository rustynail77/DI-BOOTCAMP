import './App.css';
import React from 'react';
import FirstName from './Components/FirstName';
import SecondName from './Components/SecondName';
import ResultsButton from './Components/ResultsButton';
import Results from './Components/Results';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <FirstName />
          <SecondName />
          <ResultsButton />
          <Results />
        </header>
      </div>
    );
  }
 
export default App;