import { configureStore } from "@reduxjs/toolkit";
// import SavedReducer, { SavedSlice } from "./SavedReducer";
import { SavedSlice } from "./SavedReducer";

export default configureStore({
  reducer: {
    // saving: SavedReducer
    saving: SavedSlice.reducer
  }
})