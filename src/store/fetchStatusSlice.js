import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name : "fetchStatus",
    initialState : {
        fetchDone : false,
        currentlyfetching : false,
    },
    reducers : {
        markFetchDone : (state) =>{
            return state.fetchDone = true;
        },
        markFetchingStarted : (state) =>{
            return state.currentlyfetching = true;
        },
        markFetchingFinished : (state) =>{
            return state.currentlyfetching = false;
        },
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;