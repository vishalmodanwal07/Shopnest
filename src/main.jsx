/* eslint-disable react/no-deprecated */


import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {store} from './components/redux/Store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


