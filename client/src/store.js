// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/games/gameSlice"
import favoriteReducer from "./features/favorites/favoriteSlice"
// import gamereduce from "../src/features/games/gameSlice2"

export const store = configureStore({
  reducer: {
    games: gameReducer,
    favorites: favoriteReducer
  },
});
