import Counter from './components/Counter';
import CounterWithHooks from './components/CounterWithHooks';
import Calculator from './components/Calculator';
import {connect, useSelector, useDispatch} from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const mytext = useSelector((state) => state.txt);
  const mydispatch = useDispatch();

  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/test'>Test</Link>
      </div>
    
      <div className="App">
        <h1>{mytext}</h1>
        <input type='text' onChange={(e)=>mydispatch({type:'CHANGE_TXT',payload:e.target.value})} />

        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='/test' element={<CounterWithHooks />} />
        </Routes>


          {/* <Counter /> */}
          {/* <Calculator /> */}
          <br />
          {/* <CounterWithHooks /> */}
        
      </div>
    </BrowserRouter>
  );
}

export default connect()(App);
