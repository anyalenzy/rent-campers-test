import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.camper.items;
export const selectIsLoading = (state) => state.camper.isLoading;
export const selectIsError = (state) => state.camper.error;
export const selectLocation = (state) => state.camper.location;
export const selectFilters = (state) => state.camper.filters;
export const selectFavorites = (state) => state.camper.favorites;
