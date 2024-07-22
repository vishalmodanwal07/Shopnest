import { AiFillSmile } from "react-icons/ai";




function Header() {
  
  return (
    
     <div className="mt-3 flex flex-col gap-0  text-black">
        <div className="flex text-5xl items-center justify-center">
         <h1 className="text-3xl  font-bold pl-10 "> Shop  <span className="text-white">Smart</span> Shop-<span className="text-white">Nest</span></h1>
          <AiFillSmile className='hover:text-yellow-200'/>
     </div>
     </div>
    
       
      
  )
}


export default Header