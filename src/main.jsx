
// import ReactDOM from 'react-dom/client'

// import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {store} from './components/redux/Store'







// ReactDOM.createRoot(document.getElementById('root')).render(
//  <BrowserRouter>
//   <Provider store ={store}>
//       <App/>
     
//   </Provider>
//  </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />  
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


