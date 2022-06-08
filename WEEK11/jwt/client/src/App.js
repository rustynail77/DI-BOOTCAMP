import {Routes,Route} from 'react-router-dom';
import './App.css';
import LoginRegisterForm from './components/LoginRegisterForm';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import {ToastContainer} from 'react-toastify';
import {useState,createContext} from 'react';
import {Auth} from './auth/Auth';

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState('');

  return (
  <AppContext.Provider value={{accessToken, setAccessToken}}>
    <div className="App">
        <Nav />
        <Routes>
          <Route path='/login' element={<LoginRegisterForm title='Login' />} />
          <Route path='/register' element={<LoginRegisterForm title='Register' />} />
          <Route path='/home' element={<Auth><Home /></Auth>} />
          <Route path='/' element={<Auth><Home /></Auth>} />
          <Route path='/about' element={<Auth><About /></Auth>} reloadDocument/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
