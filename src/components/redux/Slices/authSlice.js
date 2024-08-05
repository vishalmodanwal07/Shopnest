
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;









// //firebase implementation----->

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { auth , db } from '../../firebase';


// export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }) => {
//   const userCredential = await auth.signInWithEmailAndPassword(email, password);
//   return userCredential.user;
// });


// export const signUp = createAsyncThunk('auth/signUp', async ({ email, password }) => {
//   const userCredential = await auth.createUserWithEmailAndPassword(email, password);
//   return userCredential.user;
// });

// export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (userId) => {
//   const doc = await db.collection('users').doc(userId).get();
//   return doc.data();
// });


// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     status: 'idle',
//     likedItems: [],
//     cartItems: [],
//   },
//   reducers: {
//     signOut(state) {
//       state.user = null;
//       state.likedItems = [];
//       state.cartItems = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signIn.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })
//       .addCase(signUp.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })
//       .addCase(fetchUserData.fulfilled, (state, action) => {
//         state.likedItems = action.payload?.likedItems || [];
//         state.cartItems = action.payload?.cartItems || [];
//       });
//   },
// });

// export const { signOut } = authSlice.actions;
// export default authSlice.reducer;