import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import LikedSlice from "./Slices/LikedSlice";
import themeSlice from "./Slices/themeSlice";
 

 export const store = configureStore({
    reducer:{
        cart : CartSlice,
        like : LikedSlice,
        theme : themeSlice
    },
  
 });
 