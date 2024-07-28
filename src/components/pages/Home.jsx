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
    <div>
         <div className=" flex flex-col gap-0  text-black">
         <div className="flex mt-20 text-5xl items-center justify-center">
          <h1 className="text-3xl  font-bold pl-10 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> Shop  <span className="text-white ">Smart</span> Shop-<span className="text-white">Nest !</span></h1>
         
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black size-8'/>
         </div>
         </div>
           <div className="h-[20vh]">
           {
             loading? <Spinner/>:
             posts.length > 0 ? 
             (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-10  min-h-[30%] ">
            {
              posts.map((post) => (
                <Products  key = {post.id} post={post}/> 
                )) 
            }
              </div> ):
            ( <div className="flex justify-center items-center p-20 m-20 bg-gray-200 h-40 w-80 border-collapse border-gray-500 rounded-xl">
             <p className="flex justify-center items-center ">No Data Found</p>
              </div>)
            }
           </div>
    </div>
  );
}

export default Home;
