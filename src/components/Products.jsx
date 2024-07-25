/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { add, remove } from './redux/Slices/CartSlice'; 

// eslint-disable-next-line react/prop-types
function Products({post}) {
    const {cart} = useSelector((state) => state); // Ensure you're accessing the correct slice of state
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
    };

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
    };

    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt={post.title} />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            {
                cart.some((p) => p.id == post.id) ? (
                    <button onClick={removeFromCart}>
                        Remove Item
                    </button>
                ) : (
                    <button onClick={addToCart}>
                        Add Item
                    </button>
                )
            }
            <ToastContainer />
        </div>
    );
}

export default Products;
