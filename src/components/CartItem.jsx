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
    <div>
        <div>
          <div>
              <img src={item.image}/>
          </div>
          <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>
          <div>{item.price}</div>
         <div onClick={removeFromCart}
         >
         <MdDeleteSweep className="size-8" />
         </div>

        </div>
      
    </div>
  )
}

export default CartItem;
