import './App.css';
import Counter from './componenets/Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; 

import {reducer} from './reducers/reducers';
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
