import './App.css';
// import Parent from './Components/Parent';
// import Child from './Components/Child';
// import Counter from './Components/Counter';
// import ErrorBoundary from './ErrorBoundary';
import MyForm from './Components/MyForm';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import  {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-header">
        {/* <MyForm /> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/shop' element={<Shop/>} />
        </Routes>
      </div>
      {/* <Parent username={'admin'} >
        <Child />
      </Parent> */}
      {/* <ErrorBoundary>
        <Counter />
        <Child />
      </ErrorBoundary>
      <ErrorBoundary>
        Counter 2: <Counter />
      </ErrorBoundary> */}
      
      
      
    </div>
  );
}

export default App;
