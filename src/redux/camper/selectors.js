import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.camper.items;
export const selectIsLoading = (state) => state.camper.isLoading;
export const selectIsError = (state) => state.camper.error;
export const selectLocation = (state) => state.camper.location;
export const selectFilters = (state) => state.camper.filters;
export const selectFavorites = (state) => state.camper.favorites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation],
  (campers, filter) => {
    if (filter.length > 0) {
      return campers.filter(({ location }) =>
        location.toLowerCase().includes(filter.trim().toLowerCase())
      );
    } else {
      return campers;
    }
  }
);

export const selectFoundCampers = createSelector(
  [selectFilteredCampers, selectFilters],
  (campers, filters) => {
    const { options, camperType } = filters;

    return campers.filter((camper) => {
      const matchesType = camperType ? camper.form === camperType : true;
      const matchesOptions = options.length
        ? options.every((option) => camper.details[option])
        : true;

      return matchesType && matchesOptions;
    });
  }
);
