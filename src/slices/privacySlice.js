import { createSlice } from '@reduxjs/toolkit';

// This powerful function lets us set the initial state, reducers and actions in a clean manner
export const privacySlice = createSlice({
  name: 'privacy',
  initialState: {
    trayEmail: false,
    otherEmail: false,
  },
  reducers: {
    submitPrivacy: (state, action) => {
      const {
        trayEmail,
        otherEmail,
      } = action.payload;

      state.trayEmail = trayEmail;
      state.otherEmail = otherEmail;
    },
  },
});

// Exporting the action
export const { submitPrivacy } = privacySlice.actions;

// Exporting the reducer
export default privacySlice.reducer;
