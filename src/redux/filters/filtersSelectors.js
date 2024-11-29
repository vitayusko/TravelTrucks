// // src/redux/filters/filtersSelectors.js

import { createSelector } from "reselect";

const selectFilters = (state) => state.filters;

export const selectFiltersMemoized = createSelector(
  [selectFilters],
  (filters) => {
    return { ...filters };
  }
);
