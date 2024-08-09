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
        console.log(state, "<<<< state", action, "<<<<<< action");
        
      state.data = action.payload;
    },
  },
});

export const setFavorites = favoriteSlice.actions;

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
    console.log(data, "<<<<<<< data");
    
    dispatch(setFavorites(data));
  };
};

// const ReadAllFavorites = async (e) => {
//   try {
//     let { data } = await instance({
//       url: `/favorites`,
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       },
//     });

//     setFavorites(data);
//   } catch (error) {
//     console.log(error);
//   }
// };