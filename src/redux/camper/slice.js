import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    favorites: [],
    location: "",
    filters: {
      options: [],
      camperType: "",
    },
    isLoading: false,
    error: false,
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected),
});

export const camperReducer = camperSlice.reducer;
export const { changeLocation, setFilters, addFavorite, removeFavorite } =
  camperSlice.actions;
