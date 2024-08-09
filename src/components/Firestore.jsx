import { doc, setDoc ,getDocs,collection } from 'firebase/firestore';
import { db } from './firebase';

const addItemToCart = async (userEmail, itemId, itemData) => {
    const cartItemRef = doc(db, 'users', userEmail, 'cartItems', itemId);
    await setDoc(cartItemRef, itemData);
  };
  
  const addItemToLiked = async (userEmail, itemId, itemData) => {
    const likedItemRef = doc(db, 'users', userEmail, 'likedItems', itemId);
    await setDoc(likedItemRef, itemData);
  };


  const getCartItems = async (userEmail) => {
    const cartItemsRef = collection(db, 'users', userEmail, 'cartItems');
    const snapshot = await getDocs(cartItemsRef);
    const cartItems = snapshot.docs.map(doc => doc.data());
    return cartItems;
  };
  
  const getLikedItems = async (userEmail) => {
    const likedItemsRef = collection(db, 'users', userEmail, 'likedItems');
    const snapshot = await getDocs(likedItemsRef);
    const likedItems = snapshot.docs.map(doc => doc.data());
    return likedItems;
  };