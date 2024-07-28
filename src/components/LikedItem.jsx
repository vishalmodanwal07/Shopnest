/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { lremove } from "./redux/Slices/LikedSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const LikedItem = ({item}) => {
    const dispatch =useDispatch();
    const removeFromLike = () => {
        dispatch(lremove(item.id));
        toast("like");
    };
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
           <div   onClick={removeFromLike}>
           <MdDeleteSweep   className="size-8" />
           </div>
  
          </div>
          <ToastContainer  />
      </div>
    )
  }
  
  export default LikedItem;
  