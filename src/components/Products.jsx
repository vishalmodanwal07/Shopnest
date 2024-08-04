/* eslint-disable react/prop-types */
// import { useDispatch, useSelector } from "react-redux";
// import { add, remove } from './redux/Slices/CartSlice'; 
// import { ladd , lremove } from "./redux/Slices/LikedSlice";
// import { IoHeartSharp } from "react-icons/io5";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// //firebase
// import { db } from "./firebase";
// import { fetchUserData } from "./redux/Slices/authSlice";


// // eslint-disable-next-line react/prop-types
// function Products({post}) {
//     const {cart} = useSelector((state) => state);
//     const {like} = useSelector((state) => state); 
//     // 
//    
//     // Ensure you're accessing the correct slice of state
//     const dispatch = useDispatch();

//     const addToCart = () => {
//         dispatch(add(post));
//         toast.success("Item added to cart");
//     };

//     const removeFromCart = () => {
//         dispatch(remove(post.id));
//         toast.error("Item removed from cart");
//     };
//     const addToLike = () => {
//         dispatch(ladd(post));
//         toast.success("Item added to Liked");
//     };
//     const removeFromLike = () => {
//         dispatch(lremove(post.id));
//         toast("Item removed from Liked");
//     };

 




 

//     return (
//         <div className="flex flex-col h-55 w-25 overflow-hidden hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-white items-center border-gray-700 border-collapse border-2 rounded-2xl justify place-content-center hover:scale-110 transition duration-300 ease-in ">
//             <div className=" flex  justify-between  mx-3 ">
//                 <p className="text-gray-700 font-bold p-2 mt-2" style={{fontFamily:'"Raleway", sans-serif'}}>{post.title.split(" ").slice(0,7).join(" ")+"..."}</p>
//                 <div className="flex m-4">
//                     {  like.some((p) => p.id == post.id) ?
//                     (< IoHeartSharp onClick={ removeFromLike} className=" p-2 m-2 text-red-500 size-10  bg-blue-700 rounded-full "/>):
//                     (< IoHeartSharp onClick={addToLike} className=" p-2 m-2 text-red-100 size-10  bg-blue-700 rounded-full "/>)

//                     }
//                 </div>
             
//             </div>
//             <div>
//                 <p className="w-40 text-gray-600 font-medium text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
//             </div>
//             <div className="h-[180px]  m-4 pt-3 border-1  w-fit rounded-xl hover:scale-110 transition duration-300 ease-in">
//                 <img src={post.image}  className="h-full  w-full "/>
//             </div>
//             <div className="flex justify-between items-center m-3 p-3 gap-20 w-full">
//             <div >
//                 <p className="text-green-500 font-semibold">${post.price}</p>
//             </div>
//             {
//                 cart.some((p) => p.id == post.id) ? (
//                     <button onClick={removeFromCart}
//                     className="text-gray-700 border-2 overflow-hidden border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in"
//                     style={{fontFamily:'"Raleway", sans-serif'}}>
//                         Remove Item
//                     </button>
//                 ) : (
//                     <button onClick={addToCart}
//                     className="text-gray-700 border-2 overflow-hidden border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in"
//                     style={{fontFamily:'"Raleway", sans-serif'}}>
//                         Add Item
//                     </button>
//                 )
//             }
//             </div>
           

//         </div>
//     );
// }

// export default Products;



import { useDispatch, useSelector } from "react-redux";
import { add, remove } from './redux/Slices/CartSlice'; 
import { ladd , lremove } from "./redux/Slices/LikedSlice";
import { IoHeartSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
function Products({post}) {
    const {cart} = useSelector((state) => state);
    const {like} = useSelector((state) => state); // Ensure you're accessing the correct slice of state
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
    };

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
    };
    const addToLike = () => {
        dispatch(ladd(post));
        toast.success("Item added to Liked");
    };
    const removeFromLike = () => {
        dispatch(lremove(post.id));
        toast("Item removed from Liked");
    };

 

    return (
        <div className="flex flex-col h-55 w-25 overflow-hidden hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-white items-center border-gray-700 border-collapse border-2 rounded-2xl justify place-content-center hover:scale-110 transition duration-300 ease-in ">
            <div className=" flex  justify-between  mx-3 ">
                <p className="text-gray-700 font-bold p-2 mt-2" style={{fontFamily:'"Raleway", sans-serif'}}>{post.title.split(" ").slice(0,7).join(" ")+"..."}</p>
                <div className="flex m-4">
                    {  like.some((p) => p.id == post.id) ?
                    (< IoHeartSharp onClick={ removeFromLike} className=" p-2 m-2 text-red-500 size-10  bg-blue-700 rounded-full "/>):
                    (< IoHeartSharp onClick={addToLike} className=" p-2 m-2 text-red-100 size-10  bg-blue-700 rounded-full "/>)

                    }
                </div>
             
            </div>
            <div>
                <p className="w-40 text-gray-600 font-medium text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            <div className="h-[180px]  m-4 pt-3 border-1  w-fit rounded-xl hover:scale-110 transition duration-300 ease-in">
                <img src={post.image}  className="h-full  w-full "/>
            </div>
            <div className="flex justify-between items-center m-3 p-3 gap-20 w-full">
            <div >
                <p className="text-green-500 font-semibold">${post.price}</p>
            </div>
            {
                cart.some((p) => p.id == post.id) ? (
                    <button onClick={removeFromCart}
                    className="text-gray-700 border-2 overflow-hidden border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in"
                    style={{fontFamily:'"Raleway", sans-serif'}}>
                        Remove Item
                    </button>
                ) : (
                    <button onClick={addToCart}
                    className="text-gray-700 border-2 overflow-hidden border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in"
                    style={{fontFamily:'"Raleway", sans-serif'}}>
                        Add Item
                    </button>
                )
            }
            </div>
           

        </div>
    );
}

export default Products;
