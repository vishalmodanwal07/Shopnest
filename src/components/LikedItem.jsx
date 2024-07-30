/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { lremove } from "./redux/Slices/LikedSlice";
import {like} 




const LikedItem = ({item}) => {
  const {like} = useSelector((state) => state);
    const dispatch =useDispatch();
    const removeFromLike = () => {
        dispatch(lremove(item.id));
       
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
         
      </div>
    )
  }
  
  export default LikedItem;
  