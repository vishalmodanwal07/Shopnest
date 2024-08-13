import { useEffect, useState } from "react";
import Products from "../Products";
import Spinner from "../Spinner";
import { AiFillSmile } from "react-icons/ai";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
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

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex flex-col items-center gap-4 mb-20 p-4 m-5 bg-white dark:bg-gray-800">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center flex items-center justify-center gap-2 bg-white dark:bg-gray-800"
          style={{ fontFamily: '"Shadows Into Light", cursive' }}>
          <span className="text-green-500">Shop</span>
          <span className="bg-white dark:bg-gray-800 text-black dark:text-white">Smart</span>
          Shop-
          <span className="text-green-500">Nest!</span>
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black text-2xl sm:text-md lg:text-4xl' />
        </h1>
        
      </div>

      <div className="flex justify-center items-center bg-white dark:bg-gray-800 p-2">
        {loading ? (
          <Spinner />
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto bg-white dark:bg-gray-800">
            {posts.map((post) => (
              <Products key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-4 m-8 border border-gray-500 shadow-[rgba(7,_65,_210,_0.1)_0px_20px_30px]">
            <p className="font-semibold text-center" style={{ fontFamily: '"Raleway", sans-serif' }}>
              No Data Found, please check your internet connection!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
