// store.js
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userReducer from './slices/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export default store;