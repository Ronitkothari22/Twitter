import { createSlice } from '@reduxjs/toolkit';

const activeSlice = createSlice({
  name: 'active',
  initialState: {
    activeSection: null, // Track the active section (e.g., 'createPost')
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = activeSlice.actions;
export default activeSlice.reducer;
