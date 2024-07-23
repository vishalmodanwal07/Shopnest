import { useEffect, useState } from "react";
import Products from "../Products";
import Spinner from "../Spinner";
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
  useEffect(()=>{fetchProductData();},[])

  return (
    <div>
      {
        loading? <Spinner/>:
        posts.length>0?(
          <div>
            {
              posts.map((post) => (
                <Products key={post.id} post={post}/>
              )) 
            }
         
          </div>
        ):
       <div>
        Data not found
       </div>
      }
      
      
    </div>
  )
}

export default Home;
