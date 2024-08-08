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
  //   <div className="ml-4 sm:ml-6 md:ml-10 p-4 sm:p-6 border-b-4 overflow-hidden border-gray-300 rounded-lg mb-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
  // <div className="flex flex-col md:flex-row items-center">
  //         <div>
  //         <div className="flex justify-center items-center  overflow-hidden   bg-white dark:bg-gray-800 text-black dark:text-white p-6  ">
  //           <img src={item.image}  alt={item.title} className="h-[180px] w-fit ml-4 object-cover rounded-md hover:scale-110 transition duration-300 ease-in" />
  //           <div className="flex flex-col ml-3  bg-white dark:bg-gray-800 text-black dark:text-white p-4 " style={{fontFamily:'"Raleway", sans-serif'}}>
  //           <h1 className="text-gray-700 font-bold p-2 mt-2  bg-white dark:bg-gray-800 text-black dark:text-white p-4 " >{item.title}</h1>
  //           <h1 className="text-gray-600  p-2 font-medium text-[10px]">{item.description.split(" ").slice(0,20).join(" ")+"..."}</h1>
  //        </div>
  //       </div>
  //         <div>
  //             <div className="flex justify-between p-2 gap-4  bg-white dark:bg-gray-800 text-black dark:text-white ">
  //             <div className="font-semibold text-green-500 mr-10" style={{fontFamily:'"Raleway", sans-serif'}} >${item.price}</div>
  //             <div onClick={removeFromCart}><MdDeleteSweep className="size-8 flex items-center p-1 bg-red-400 rounded-full" />
  //             </div>
  //             </div>
  //             </div>
  //         </div>
  //       </div>
  //  </div>






  <div className="ml-4 sm:ml-6 md:ml-10 p-4 sm:p-6 border-b-4 border-gray-300 rounded-lg mb-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 text-black dark:text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
  <div className="flex flex-col md:flex-row items-center">
   <img src={item.image}  alt={item.title} className="h-[180px] w-fit ml-4 object-cover rounded-md hover:scale-110 transition duration-300 ease-in" />
    <div className="flex flex-col w-full md:w-1/2 bg-white dark:bg-gray-800 text-black dark:text-white p-4" style={{ fontFamily: '"Raleway", sans-serif' }}>
      <h1 className="text-gray-700 font-bold text-lg mb-2  bg-white dark:bg-gray-800 text-black dark:text-white">{item.title}</h1>
      <p className="text-gray-600 text-sm mb-4  bg-white dark:bg-gray-800 text-black dark:text-white">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
      <div className="flex justify-between items-center  bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="font-semibold text-green-500 text-lg  bg-white dark:bg-gray-800 text-black dark:text-white">${item.price}</div>
        <div onClick={removeFromCart} className="p-2 cursor-pointer">
          <MdDeleteSweep className="text-xl text-red-400 hover:text-red-600" />
        </div>
      </div>
    </div>
  </div>
</div>

  ) 
}

export default CartItem;


