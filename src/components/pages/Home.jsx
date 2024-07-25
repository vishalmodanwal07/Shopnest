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
         <div className="mt-3 flex flex-col gap-0  text-black">
         <div className="flex text-5xl items-center justify-center">
          <h1 className="text-3xl  font-bold pl-10 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> Shop  <span className="text-white ">Smart</span> Shop-<span className="text-white">Nest !</span></h1>
         
          <AiFillSmile className='text-red-400 hover:text-yellow-200 size-8'/>
     </div>
     </div>
      {
        loading? <Spinner/>:
        posts.length > 0 ? 
        (<div>
            {
              posts.map((post) => (
                <Products key = {post.id} post={post}/>
                )) 
            }
        </div> ):
       <div>
       <p>No Data Found</p>
       </div>
      }
    </div>
  );
}

export default Home;
