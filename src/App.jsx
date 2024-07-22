import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home.jsx'
import Cart from './components/pages/Cart.jsx'
import About from './components/About.jsx'
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
        <Route path="/Aboutus"  element ={<About/>}/>
     </Routes>
    
     
    
    </>
  )
}

export default App;
