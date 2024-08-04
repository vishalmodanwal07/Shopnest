import { useEffect, useState } from "react";
import Products from "../Products";
import Spinner from "../Spinner";
import { AiFillSmile } from "react-icons/ai";





function Home() {
 

  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading]= useState(false);
  const [posts , setPosts]=useState([]);
  async function fetchProductData(){
    setLoading(true);
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPosts(data);
    
  } catch (error) {
    console.log("error");
    setPosts([]);
  }   

  setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])

  

  return (
    <div >
         
         <div className=" flex flex-col h-10 gap-0 mb-20  bg-white dark:bg-gray-800 text-black dark:text-white p-4">
         <div className="flex mt-5 text-5xl items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white ">
          <h1 className="text-3xl  font-bold pl-10 bg-white dark:bg-gray-800 text-black dark:text-white  "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> <span className="text-green-500">Shop</span><span className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 ">Smart</span>Shop-<span className="text-green-500">Nest !</span></h1>
         
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black size-8 '/>
         
          
         </div>
        
         </div>
           <div className=" flex justify-center items-center bg-white  dark:bg-gray-800 text-black dark:text-white">
           {
             loading? <Spinner/>:
             posts.length > 0 ? 
             (<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 max-w-6xl mx-auto space-y-10 space-x-10  min-h-[30%] bg-white dark:bg-gray-800 text-black dark:text-white p-4 ">
            {
              posts.map((post) => (
                <Products  key = {post.id} post={post}/> 
                )) 
            }
              </div> ):
            ( <div className="flex justify-center  bg-gray-300 items-center  m-20 h-40 w-80 border-collapse shadow-[0_15px_40px_rgba(8,_112,_184,_0.7)] border-gray-500 rounded-xl  text-black dark:text-white p-4">
             <p className="flex justify-center items-center font-semibold" style={{ fontFamily: '"Raleway", sans-serif' }}>No Data Found , please check your internet connection !</p>
              </div>)
            }
           </div>
          
    </div>
  );
}

export default Home;
