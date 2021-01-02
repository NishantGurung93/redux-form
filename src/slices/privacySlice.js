import { createSlice } from '@reduxjs/toolkit';

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

export const { submitPrivacy } = privacySlice.actions;

export default privacySlice.reducer;
