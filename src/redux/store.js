import { configureStore } from "@reduxjs/toolkit";
// import favoritesReducer from "./favorites/favoritesSlice";
import filtersReducer from "./filters/filtersSlice";
import catalogReducer from "./catalog/catalogSlice";

export const store = configureStore({
  reducer: {
    // favorites: favoritesReducer,
    filters: filtersReducer,
    catalog: catalogReducer,
  },
});
