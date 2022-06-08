import SearchForm from './components/SearchForm';
import Results from './components/Results';
import './App.css';
import {useState, useEffect, createContext} from 'react';

export const AppContext = createContext(null);

function App() {

  const [depCity, setDepCity] = useState('');
  const [arrCity, setArrCity] = useState('');
  const [potentialDestinations, setPotentialDestinations] = useState([]);
  const [potentialAirports, setPotentialAirports] = useState([]);


  return (
    <div>
      <h1>Liron's React RyanAir FareFinder</h1>
      <AppContext.Provider value = {{
          depCity, setDepCity,
          arrCity, setArrCity,
          potentialAirports, setPotentialAirports,
          potentialDestinations, setPotentialDestinations
          }}>
        <SearchForm />
        <Results />
      </AppContext.Provider>
    </div>
  );
}

export default App;
