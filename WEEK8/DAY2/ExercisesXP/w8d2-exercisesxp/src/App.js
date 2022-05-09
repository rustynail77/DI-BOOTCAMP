import './App.css';
import Car from './Components/Car';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
 
  return (
    <div className="App">
      <Car value={carinfo} />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
