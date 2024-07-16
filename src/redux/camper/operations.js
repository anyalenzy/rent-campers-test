import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6605bef0d92166b2e3c2b633.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/adverts");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
