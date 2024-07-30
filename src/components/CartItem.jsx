/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "./redux/Slices/CartSlice";



const CartItem = ({item , itemIndex}) => {
  const dispatch =useDispatch();
  const removeFromCart =()=>{
    dispatch(remove(item.id));
  }
 
  return (
    <div className=" flex  flex-col my-8 overflow-hidden  border-2 border-collapse rounded-xl bg-gray-100 w-[70%] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]  hover:scale-110 transition duration-300 ease-in items-center border-gray-700">
        <div>
          <div className="flex">
          <div className=" w-[40%] m-5 p-3 border-1   rounded-xl hover:scale-110 transition duration-300 ease-in">
                <img src={item.image}  className="  w-full "/>
            </div>
          <div>
            <h1 className="text-gray-700 font-bold p-2 mt-2" style={{fontFamily:'"Raleway", sans-serif'}}>{item.title}</h1>
            <h1 className="text-gray-600  p-2 font-medium text-[10px]">{item.description}</h1>
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
