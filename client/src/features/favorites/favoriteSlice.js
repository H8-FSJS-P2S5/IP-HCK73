import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../helpers/instance";

const serverUrl = "http://localhost:3000";
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    data: [],
  },
  reducers: {
    setFavorites: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;

export const fetchFavorites = () => {
  return async (dispatch) => {
    const { data } = await instance({
      url: `/favorites`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    dispatch(setFavorites(data));
  };
};
