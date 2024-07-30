
import {app} from './components/firebase.js'
import Home from './components/pages/Home.jsx'
import Cart from './components/pages/Cart.jsx'
import Layout from './components/Layout.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favourite from './components/pages/Favourite.jsx'
import Signup from './components/Signup.jsx';


function App() {

  


  return (
    <>
     <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Favourite" element={<Favourite />} />
          <Route path="Signup" element={<Signup/>}></Route>
        </Route>
      </Routes>
    </Router>
    
     
    
    </>
  )
}

export default App;
