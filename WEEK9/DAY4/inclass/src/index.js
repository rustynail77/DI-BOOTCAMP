import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';            //one
import { Provider } from 'react-redux';
// import logger from 'redux-logger';                            //two
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk'; //$$$
import {reducer} from './redux/reducers';
import {middleware} from './middlewares/middleware'

const store = createStore(reducer,applyMiddleware(middleware,thunk));   //three

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
);
// npm i redux-logger redux-thunk

// action => middleware => reducer => new State => store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
