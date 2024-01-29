import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountriesState {
  darkState: boolean;
}

const initialState: CountriesState = {
  darkState: false,
}

const countriesSlice = createSlice({
  name: 'countriesSlice',
  initialState,
  reducers: {
    darkMood: (state) => {
      state.darkState = !state.darkState;
    },
  },
});

export const { darkMood } = countriesSlice.actions;

export default countriesSlice.reducer;
