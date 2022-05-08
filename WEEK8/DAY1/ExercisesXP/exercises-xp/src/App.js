import './App.css';
import React from 'react';
import UserFavoriteColors from './UserFavoriteColors';

function App() {
  const myelement = <h1>I Love JSX!</h1>; 
  const sum = 5+5;
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  const mycolors = ['blue','green','red','yellow'];

  return (
  <div className="App">
      <header className="App-header">
      <div>Hello World</div>
      <div>{myelement}</div>
      <div>React is {sum} times better with JSX</div>
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      {
        mycolors.map((color, i)=>{
          return (
          <UserFavoriteColors key={i} fav_colors={color} />
          )
        })
      }
      
      </header>
    </div>
  );
}

export default App;
