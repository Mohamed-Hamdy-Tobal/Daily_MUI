'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModeState {
  darkState: boolean;
}

const getInitialDarkState = () => {
  if (typeof window !== 'undefined') {
    // Check if localStorage is available in the browser
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? storedDarkMode === 'true' : false;
  }
  return false;
};

const initialState: ModeState = {
  darkState: getInitialDarkState(),
}

const statesSlice = createSlice({
  name: 'statesSlice',
  initialState,
  reducers: {
    darkMood: (state) => {
      state.darkState = !state.darkState;
      // Save the updated darkState to local storage if localStorage is available
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', state.darkState.toString());
      }
    },
  },
});

export const { darkMood } = statesSlice.actions;

export default statesSlice.reducer;
