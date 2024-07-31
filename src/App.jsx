import { useEffect } from 'react';
import { getAuth , onAuthStateChanged } from 'firebase/auth';
import {app} from './components/firebase.js'
import Home from './components/pages/Home.jsx'
import Cart from './components/pages/Cart.jsx'
import Layout from './components/Layout.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favourite from './components/pages/Favourite.jsx'
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import { clearUser ,setUser} from './components/redux/Slices/authSlice.js';
import { useDispatch } from 'react-redux';


const auth =getAuth(app);
function App() {
  const dispatch =useDispatch();

  
useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth , (user)=>{
    if(user){
      // console.log("hello");
    dispatch(setUser(user));   }
    else{
      // console.log("you are logged out");
     dispatch( clearUser(null));
    }
  });
return()=>  unsubscribe(); 
},[]);



  return (
    <>
     <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Favourite" element={<Favourite />} />
          <Route path="Signup" element={<Signup/>}></Route>
          <Route path='Signin' element={<Signin/>}></Route>
        </Route>
      </Routes>
    </Router>
    
     
    
    </>
  )
}

export default App;
