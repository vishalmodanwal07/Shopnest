import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './components/firebase.js';
import Home from './components/pages/Home.jsx';
import Cart from './components/pages/Cart.jsx';
import Layout from './components/Layout.jsx';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Favourite from './components/pages/Favourite.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import { clearUser, setUser } from './components/redux/Slices/authSlice.js';
import { useDispatch } from 'react-redux';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const AppWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        navigate('/'); 
        toast.success("WELCOME! you are login");
        
        // Navigate to home page on successful login
      } else {
        dispatch(clearUser(null));
      }
    });
    return () => unsubscribe();
  }, [auth, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Favourite" element={<Favourite />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
      <ToastContainer  position="top-center"/>
    </Router>
  );
}

export default App;
