import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "./actions";

const post = createSlice({
  name: "post",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, () => {
      return {};
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default post.reducer;
