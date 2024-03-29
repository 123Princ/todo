// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './authSlice';
import { signupReducer } from './SigupSlice';
import { todoReducer } from './TodoSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'signup',],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedSignupReducer = persistReducer(persistConfig, signupReducer);
const persistedTodoReducer = persistReducer(persistConfig, todoReducer);
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    signup: persistedSignupReducer,
    todo:persistedTodoReducer
    // Add other reducers if needed
  },
});

export const persistor = persistStore(store);
export default store;
