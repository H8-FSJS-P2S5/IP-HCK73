// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/games"

export const store = configureStore({
  reducer: {
    games: gameReducer,
  },
});
