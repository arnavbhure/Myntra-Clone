import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSummarySlice from "./BagSummarySlice";

const myntraStore = configureStore({
    reducer : {
        items : itemsSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer,
        bagSummary : BagSummarySlice.reducer,
    }
})

export default myntraStore;