import { configureStore } from "@reduxjs/toolkit";
import FlagListSlice from "./slice/FlagListSlice"
 
export const store = configureStore({
  reducer: {
    FlagListSlice,
  },
});
