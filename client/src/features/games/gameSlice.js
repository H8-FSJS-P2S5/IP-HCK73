import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../helpers/instance";

const serverUrl = "http://localhost:3000";
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    list: {
      data: [],
      totalPages: 0,
      currentPage: 0,
      totalData: 0,
      dataPerPage: 0,
    },
    detail: {},
  },
  reducers: {
    setGames: (state, action) => {
      state.list.data = action.payload.data;
    },
    setGame: (state, action) => {
      state.detail = action.payload;
    },
    setTotalPage: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setGames, setGame } = gameSlice.actions;

export default gameSlice.reducer;

export const fetchGames = (searchGame, sort) => {
  return async (dispatch) => {
    const { data } = await instance({
      url: `/games`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      params: {
        page: {
          number: currentPage,
        },
        search: searchGame,
        sort: sort,
      },
    });
    dispatch(setGames(data.data));
    dispatch(setTotalPage(data.totalPage));
  };
};

export const fetchGameById = (gameId) => {
  return async (dispatch) => {
    let { data } = await instance({
      url: `/games/${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    dispatch(setGame(data));
  };
};
