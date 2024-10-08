/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "./redux/Slices/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="ml-4 sm:ml-6 md:ml-10 p-2 sm:p-6 container mx-auto border-b-4 border-gray-300 rounded-lg mb-6  hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 text-black dark:text-white shadow-[rgba(7,_65,_210,_0.1)_20px_20px_30px]" style={{ fontFamily: '"Raleway", sans-serif' }}>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 text-black dark:text-white">
      <img src={item.image}  alt={item.title} className="h-[180px] w-fit ml-4 object-cover rounded-md hover:scale-110 transition duration-300 ease-in" />
        <div className="flex flex-col w-full md:w-2/3 bg-white dark:bg-gray-800 text-black dark:text-white p-4">
          <h1 className="text-gray-700 font-bold text-lg mb-2 bg-white dark:bg-gray-800 text-black dark:text-white">{item.title}</h1>
          <p className="text-gray-600 text-sm mb-4 bg-white dark:bg-gray-800 text-black dark:text-white">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-green-500 text-lg">${item.price}</div>
            <div onClick={removeFromCart} className="p-2 cursor-pointer">
              <MdDeleteSweep className="text-3xl text-red-400 hover:text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
 