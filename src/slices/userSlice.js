import { createSlice } from '@reduxjs/toolkit';

// This powerful function lets us set the initial state, reducers and actions in a clean manner
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    role: '',
    email: '',
    password: '',
  },
  reducers: {
    submitDetails: (state, action) => {
      const {
        name,
        role,
        email,
        password,
      } = action.payload;

      state.name = name;
      state.role = role;
      state.email = email;
      state.password = password;
    },
  },
});

// Exporting the action
export const { submitDetails } = userSlice.actions;

// Exporting the reducer
export default userSlice.reducer;
