import Home from './components/Home';
import Favorites from './components/Favorites';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {useState, useEffect, createContext} from 'react';

export const AppContext = createContext(null);

function App() {

  const [cityList, setCityList] = useState([]);
  const [cityName, setCityName] = useState('Budapest');
  const [srchCity, setSrchCity] = useState('187423');
  const [favCities, setFavCities] = useState([]);

  return (
    <BrowserRouter>
        <Navbar />
        <AppContext.Provider value={{
            cityName, setCityName,
            cityList, setCityList,
            srchCity, setSrchCity,
            favCities, setFavCities
            }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </AppContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
