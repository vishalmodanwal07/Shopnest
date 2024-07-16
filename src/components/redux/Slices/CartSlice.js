 import {createSlice} from '@reduxjs/toolkit'


 export const CartSlice = createSlice({
       name:"cart",
       initialState:[],
       redusers:{
        add:()=>{},
        remove:()=>{}
       }
 })

 export const {add, remove}= CartSlice.actions;
 export default  CartSlice.reducer;