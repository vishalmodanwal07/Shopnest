
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {store} from './components/redux/Store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Provider store ={store}>
      <App/>
      <ToastContainer />
  </Provider>
 </BrowserRouter>
);
