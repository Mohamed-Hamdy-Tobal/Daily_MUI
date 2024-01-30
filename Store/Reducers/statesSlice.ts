'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModeState {
  darkState: boolean;
}

const initialState: ModeState = {
  darkState: false,
}

const statesSlice = createSlice({
  name: 'statesSlice',
  initialState,
  reducers: {
    darkMood: (state) => {
      state.darkState = !state.darkState;
    },
  },
});

export const { darkMood } = statesSlice.actions;

export default statesSlice.reducer;
