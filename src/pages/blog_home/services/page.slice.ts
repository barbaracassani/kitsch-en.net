import { createSlice } from "@reduxjs/toolkit";
import { getPage } from "./actions";

const page = createSlice({
  name: "page",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPage.pending, () => {
      return {};
    });
    builder.addCase(getPage.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default page.reducer;
