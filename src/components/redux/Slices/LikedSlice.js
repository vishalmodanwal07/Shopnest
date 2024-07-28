import { createSlice } from "@reduxjs/toolkit";



export const liked = createSlice({
    name: 'like',
    initialState:[],
    reducers:{
        ladd: (state, action) => {
            state.push(action.payload);
        },
        lremove: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});
export const { ladd, lremove } = liked.actions;
export default liked.reducer;