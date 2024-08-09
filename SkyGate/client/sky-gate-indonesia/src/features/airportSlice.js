import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = "http://localhost:3000";
export const airportSlice = createSlice({
    name: "airport",
    initialState: {
        data: {
            page: 0,
            data: [],
            totalData: 0,
            totalPage: 0,
            dataPerPage: 0
        },
        detail: {}
    },
    reducers: {
        setAirports: (state, action) => {
            state.list.data = action.payload.data;
        },
        setAirport: (state, action) => {
            state.detail = action.payload;
        },
    },
});

export const { setAirports, setAirport } = airportSlice.actions;

export default airportSlice.reducer;