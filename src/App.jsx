import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home.jsx'
import Cart from './components/pages/Cart.jsx'
import Footer from './components/Footer.jsx'
import {Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

  


  return (
    <>
     <Navbar/>
     <Header/>
     <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Footer"  element ={<Footer/>}/>
     </Routes>
    
     
    
    </>
  )
}

export default App;
