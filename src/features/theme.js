import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialStateValue
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  }
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;