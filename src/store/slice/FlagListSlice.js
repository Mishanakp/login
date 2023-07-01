import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchFlagList = createAsyncThunk(
  "flag-list",
  async (payload,{ rejectWithValue }) => {
    try {
      const response = await api.ActionHandle({
        url: api.FlagListURL,
        method: "GET",
      });

      let data = await response;
      if (response.status === 200) {
        let sam = response.data;
        return sam;
      } else {
        return rejectWithValue(data);
      }
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();

      return rejectWithValue(message);
    }
  }
);
const FlagListSlice = createSlice({
  name: "flag-list",
  initialState: {
    FlagList: [],
    FlagListFetching: false,
    FlagListSuccess: false,
    FlagListError: false,
    FlagListErrorMessage: "",
  },
  reducers: {
    fslClearState: (state) => {
      state.FlagListError = false;
      state.FlagListSuccess = false;
      state.FlagListFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlagList.fulfilled, (state, action) => {
        state.FlagList = action.payload 
        state.FlagListFetching = false;
        state.FlagListSuccess = true;
        return state;
      })
      .addCase(fetchFlagList.rejected, (state, action) => {
        state.FlagListFetching = false;
        state.FlagListError = true;
        state.FlagListErrorMessage = action?.payload;
      })
      .addCase(fetchFlagList.pending, (state) => {
        state.FlagListFetching = true;
      });
  },
});

export const { FlagListClearState } = FlagListSlice.actions;

export default FlagListSlice.reducer;
