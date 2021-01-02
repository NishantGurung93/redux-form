import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../slices/userSlice';
import privacyReducer from '../../slices/privacySlice';

export default configureStore({
  // Combines the two reducers for the rootReducer
  reducer: {
    user: userReducer,
    privacy: privacyReducer,
  },
});
