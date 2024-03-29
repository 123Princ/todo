// signupSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  isSigningUp: false,
  error: null,
  signupData: [], // Store signup data
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupStart: (state) => {
      state.isSigningUp = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isSigningUp = false;
      state.signupData?.push(action.payload); 
      toast.success('Signup successful!');
     
    },
    signupFailure: (state, action) => {
      state.isSigningUp = false;
      state.error = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } = signupSlice.actions;

export const { reducer: signupReducer, actions: signupActions } = signupSlice;
