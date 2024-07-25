import { AiFillSmile } from "react-icons/ai";
import Button from "../Button";

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
    <div>
       <div className="mt-3 flex flex-col gap-0  text-black">
         <div className="flex text-5xl items-center justify-center">
         <h1 className="text-3xl  font-bold pl-10 "
         style={{fontFamily:'"Shadows Into Light", cursive'}}> Your  <span className="text-white ">Cart</span> is <span className="text-white">here !</span></h1>
          <AiFillSmile className='text-red-400 hover:text-yellow-200 size-8'/>
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
              <Button/>
            </div>

             
          </div>):
          (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"} >
                <Button />
            </Link>
          </div>
            
          )
        }
       </div>

    
      
    </div>
  )
}

export default Cart;

