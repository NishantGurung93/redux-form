import { createSlice } from '@reduxjs/toolkit';

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

export const { submitDetails } = userSlice.actions;

export default userSlice.reducer;
