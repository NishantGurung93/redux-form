import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../slices/userSlice';
import privacyReducer from '../../slices/privacySlice';

export default configureStore({
  reducer: {
    user: userReducer,
    privacy: privacyReducer,
  },
});
