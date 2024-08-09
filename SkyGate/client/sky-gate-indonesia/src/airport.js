import { configureStore } from "@reduxjs/toolkit";
import airportSlice from "./features/airportSlice";

export const store = configureStore({
  reducer: {
    airports: airportSlice,
  },
});