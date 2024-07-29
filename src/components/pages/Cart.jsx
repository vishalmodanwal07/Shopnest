import { AiFillSmile } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

function Cart() {
  const {cart}= useSelector((state)=>state);

  const [totalAmount ,setTotalAmount]= useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=> acc + curr.price,0)) ;
  }, [cart])
  return (
    <div  >
       <div className=" flex flex-col gap-0  text-black">
       <div className="flex mt-8 text-5xl items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white p-4">
          <h1 className="text-3xl  font-bold pl-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> <span className="text-green-500">Your</span><span className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 ">Cart</span>is<span className="text-green-500 pl-2">Here !</span></h1>
         
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black size-8 '/>
         </div>
       </div>
      
       <div>
        {
          cart.length > 0 ?
          (<div>
            <div>
              {
                cart.map((item, index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
              
            <div>
                <div>Your Cart</div>
                <p>Summary</p>
                <p>
                <span>Total Item:{cart.length}</span>
               </p>
            </div>
            <div>
              <p>Total Amount:`${totalAmount}`</p>
              <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        style={{fontFamily:'"Raleway", sans-serif'}}
      >
        Total Amount
      </button>
            </div>

             
          </div>):
          (<div className="flex justify-centre item centre">
            <h1>Cart Empty</h1>
            <Link to={"/"} >
            <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        style={{fontFamily:'"Raleway", sans-serif'}}
      >
        SHOP NOW
      </button>
            </Link>
          </div>
            
          )
        }
       </div>

    
      
    </div>
  )
}

export default Cart;

