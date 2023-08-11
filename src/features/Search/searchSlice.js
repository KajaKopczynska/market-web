import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: "loading",
        query: "",
        totalResults: 0,
    },
    reducers: {
        fetchSearchLoading: (state) => {
            state.status = "loading";
        },
        fetchSearchError: (state) => {
            state.status = "error";
        },
        fetchSearchSuccess: (state, { payload: search }) => {
            state.status = "success";
            state.movies = search.results;
            state.totalResults = search.total_results;
        },
    },
});

export const {
    fetchSearchLoading,
    fetchSearchError,
    fetchSearchSuccess,
} = searchSlice.actions;

const selectSearchState = (state) => state.search;

export const selectSearchQuery = (state) => selectSearchState(state).query;

export default searchSlice.reducer;