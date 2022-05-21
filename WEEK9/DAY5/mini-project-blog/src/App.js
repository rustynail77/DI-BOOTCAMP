import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';

import './App.css';

class App extends React.Component {
  
  
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/post' element={<Post />}></Route>
            </Routes>
        </div>
      </BrowserRouter>      
    );
  }
  
}

export default App;
