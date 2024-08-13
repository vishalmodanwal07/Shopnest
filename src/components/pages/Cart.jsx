import { AiFillSmile } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <div className="flex flex-col items-center gap-4 m-5 mb-20 p-4">
        <div className="flex text-center">
          <h1 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
            style={{ fontFamily: '"Shadows Into Light", cursive' }}>
            <span className="text-green-500">Your</span>
            <span className="bg-white dark:bg-gray-800 text-black dark:text-white p-2">Cart</span>
            is
            <span className="text-green-500 pl-2">Here!</span>
 
          </h1>
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black text-2xl sm:text-md lg:text-4xl' />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl  ">
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5  ">
            <div className="flex-1 bg-white dark:bg-gray-800 text-black dark:text-white">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
            <div className="flex flex-col max-h-60 items-center bg-gray-400 dark:bg-gray-700 text-black dark:text-white p-6  rounded-2xl shadow-lg max-w-sm mx-20 lg:max-w-md">
              <div className="text-center ">
                <h1 className="font-extrabold text-lg" style={{ fontFamily: '"Raleway", sans-serif' }}>Your Cart</h1>
                <p className="font-extrabold text-green-600" style={{ fontFamily: '"Raleway", sans-serif' }}>Summary</p>
                <p>
                  <span className="font-semibold" style={{ fontFamily: '"Raleway", sans-serif' }}>Total Items: {cart.length}</span>
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg" style={{ fontFamily: '"Raleway", sans-serif' }}>Total Amount: ${totalAmount.toFixed(2)}</p>
                <Link to={"/"}>
                  <button
                    type="button"
                    className="mt-4 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                    style={{ fontFamily: '"Raleway", sans-serif' }}>
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-4 rounded-xl  text-center shadow-[rgba(7,_65,_210,_0.1)_0px_20px_30px]">
              <p className="font-semibold" style={{ fontFamily: '"Raleway", sans-serif' }}>
                No Cart Items Added, please add items to the cart.
              </p>
            </div>
            <Link to={"/"}>
              <button
                type="button"
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                style={{ fontFamily: '"Raleway", sans-serif' }}>
                Explore Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
