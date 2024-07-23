import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const changeThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { changeTheme } = changeThemeSlice.actions;
export default changeThemeSlice.reducer;
