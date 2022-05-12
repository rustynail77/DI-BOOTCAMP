// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import ErrorBoundary from './ErrorBoundary';
import PostList from './Components/PostList';
import data from './data.json';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

async function fetchData () {
  try{
    const response = await fetch('https://webhook.site/0fcc922d-26f5-4430-bdb2-e34a2bc6c555', {
    method: 'POST',
    mode: 'no-cors',
    headers:{'Content-type':'application/json'},
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    })})
    console.log(response);
  } catch(err) {
    console.log(err)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={fetchData}>Show data</button>
      
      
      {/* <h1>This is an h1 title</h1> */}
      {/* {data.map((obj,i)=>{
        return (
          <>
            <PostList key={i} array={obj}/>
          </>
        )
      })}
      <Example1 />
      <Example2 />
      <Example3 /> */}
          {/* <nav className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
          </nav>
        <div>
        <Routes>
            <Route path='/' element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
            <Route path='/profile' element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
            <Route path='/shop' element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>
        </div> */}
        
      </header>
    </div>
  );
}

const HomeScreen = () => {
  return(<h2>Home</h2>)
}
const ProfileScreen = () => {
  return(<h2>Profile</h2>)
}
const ShopScreen = () => {
  throw new Error ('An error has occurred.')
}

export default App;
