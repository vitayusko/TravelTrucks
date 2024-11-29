// src/redux/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  bodyType: "",
  hasAC: false,
  automatic: false,
  kitchen: false,
  tv: false,
  bathroom: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBodyType: (state, action) => {
      state.bodyType = action.payload;
    },
    toggleAC: (state) => {
      state.hasAC = !state.hasAC;
    },
    toggleAutomatic: (state) => {
      state.automatic = !state.automatic;
    },
    toggleKitchen: (state) => {
      state.kitchen = !state.kitchen;
    },
    toggleTV: (state) => {
      state.tv = !state.tv;
    },
    toggleBathroom: (state) => {
      state.bathroom = !state.bathroom;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setLocation,
  setBodyType,
  toggleAC,
  toggleAutomatic,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
