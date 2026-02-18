import { createSlice } from "@reduxjs/toolkit";

const BagSummarySlice = createSlice({
    name: "bagSummary",
    initialState: [],
    reducers : {
    addItemToBag : (state , action) =>{
        state.push(action.payload);
    }, 
    
    removeItemToBag : (state , action) =>{
        return state.filter((id) => id !==action.payload);
    }
    },
});

export default BagSummarySlice;
export const bagSummaryActions = BagSummarySlice.actions;       