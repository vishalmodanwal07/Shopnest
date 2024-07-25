
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home.jsx'
import Cart from './components/pages/Cart.jsx'
import About from './components/pages/About.jsx'
import {Routes , Route } from 'react-router-dom'


function App() {

  


  return (
    <>
     <Navbar/>
     
     <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Aboutus"  element ={<About/>}/>
     </Routes>
    
     
    
    </>
  )
}

export default App;
