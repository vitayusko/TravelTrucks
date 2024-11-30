// src/redux/catalog/catalogSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        " https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default catalogSlice.reducer;
