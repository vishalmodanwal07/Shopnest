/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "./redux/Slices/CartSlice";
import { toast } from "react-toastify";



const CartItem = ({item}) => {
  const dispatch =useDispatch();
  const removeFromCart =()=>{
    dispatch(remove(item.id))
    toast.error("item is removed from Cart");
  }
 
  return (
   <div className="  ml-10 p-4 border-b-4 w-[60%] overflow-hidden border-gray-300 rounded-lg  mb-6 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-110 transition duration-300 ease-in   bg-white dark:bg-gray-800 text-black dark:text-white p-4  " style={{ fontFamily: '"Raleway", sans-serif' }}>
        <div>
          <div>
          <div className="flex justify-center items-center p-3 overflow-hidden   bg-white dark:bg-gray-800 text-black dark:text-white p-4  ">
            <img src={item.image}  alt={item.title} className="h-[180px] w-fit ml-4 object-cover rounded-md hover:scale-110 transition duration-300 ease-in" />
            <div className="flex flex-col ml-3  bg-white dark:bg-gray-800 text-black dark:text-white p-4 " style={{fontFamily:'"Raleway", sans-serif'}}>
            <h1 className="text-gray-700 font-bold p-2 mt-2  bg-white dark:bg-gray-800 text-black dark:text-white p-4 " >{item.title}</h1>
            <h1 className="text-gray-600  p-2 font-medium text-[10px]">{item.description.split(" ").slice(0,20).join(" ")+"..."}</h1>
         </div>
        </div>
          <div>
              <div className="flex justify-between p-2 gap-4 ">
              <div className="font-semibold text-green-500 mr-10" style={{fontFamily:'"Raleway", sans-serif'}} >${item.price}</div>
              <div onClick={removeFromCart}><MdDeleteSweep className="size-8 flex items-center p-1 bg-red-400 rounded-full" />
              </div>
              </div>
              </div>
          </div>
        </div>
   </div>
  ) 
}

export default CartItem;


