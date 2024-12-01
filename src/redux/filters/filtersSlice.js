// src/redux/filters/filtersSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilter = createAsyncThunk(
  "catalog/fetchFilter",
  async (filters, thunkAPI) => {
    const params = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/catalog?${params}`);
    if (!response.ok) {
      throw new Error("Failed to fetch filtered catalog");
    }
    return await response.json();
  }
);

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
