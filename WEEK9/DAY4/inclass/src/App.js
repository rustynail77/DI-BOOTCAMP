import React from 'react'
import FirstNameComponent from './components/FirstNameComponent';
import SecondNameComponent from './components/SecondNameComponent';
import ButtonComponent from './components/ButtonComponent';
import ResultsComponent from './components/ResultsComponent';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <FirstNameComponent />
          <SecondNameComponent />
          <ButtonComponent />
          <ResultsComponent />
        </header>
      </div>
    );

}

export default App;
