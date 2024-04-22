import React from 'react';
import './index.css';
import App from './App';
import store from './Redux_saga/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


