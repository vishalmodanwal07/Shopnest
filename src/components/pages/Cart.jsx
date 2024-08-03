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
    <div >
       <div className=" flex flex-col gap-0  text-black">
       <div className="flex mt-5 text-5xl items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white p-4">
          <h1 className="text-3xl  font-bold pl-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> <span className="text-green-500">Your</span><span className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 ">Cart</span>is<span className="text-green-500 pl-2">Here !</span></h1>
         
          <AiFillSmile className='text-yellow-300 animate-bounce hover:text-black size-8 '/>
         </div>
       </div>
      
       <div className="flex pl-20">
        {
          cart.length > 0 ?
          (<div className="flex px-25 relative">
            <div className="">
              {
                cart.map((item, index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>



            <div className=" bg-gray-100 h-[25%] w-[40%] px-10 pt-10 ml-20 mt-8 border-2 border-collapse rounded-xl hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:scale-110 transition duration-300 ease-in items-center border-gray-700 ">
               <h1 className="font-bold text-black flex justify-center items-center" style={{fontFamily:'"Raleway", sans-serif'}}> Your Cart</h1>
               <p className="flex justify-center items-center text-green-500 font-semibold"  style={{fontFamily:'"Raleway", sans-serif'}}>Summary</p>
               <p>
                <span className="flex justify-center items-center text-black font-semibold" style={{fontFamily:'"Raleway", sans-serif'}}>Total Item:  {cart.length}</span>
               </p>

               <div className="mt-8 px-10">
               <p className="flex justify-center items-center font-bold text-black  m-2" style={{fontFamily:'"Raleway", sans-serif'}} >Total Amount:   `${totalAmount}`</p>
                <button
                type="button"
                className=" rounded-md bg-black ml-8 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                style={{fontFamily:'"Raleway", sans-serif'}} >Explore More
                </button>
               </div>
               
            </div>
              
            {/* <div className="bg-white">
                <div className="font-bold  " style={{fontFamily:'"Raleway", sans-serif'}}>Your Cart</div>
                <p className="text-green-500 font-semibold"  style={{fontFamily:'"Raleway", sans-serif'}}>Summary</p>
                <p>
                <span style={{fontFamily:'"Raleway", sans-serif'}}>Total Item:{cart.length}</span>
               </p>
              <div>
              <p style={{fontFamily:'"Raleway", sans-serif'}} >Total Amount:`${totalAmount}`</p>
              <button
                type="button"
                className="rounded-md bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                style={{fontFamily:'"Raleway", sans-serif'}} >Checkout Now
              </button>
            </div>
            </div> */}
           
      </div>):




          (<div className="flex justify-centre item centre">
            <h1>Cart Empty</h1>
            <Link to={"/"} >
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              style={{fontFamily:'"Raleway", sans-serif'}} >   SHOP NOW </button>
            </Link>
          </div>)
        }
       </div>

    
      
    </div>
  )
}

export default Cart;

