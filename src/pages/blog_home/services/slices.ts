import { createSlice } from "@reduxjs/toolkit";
import {Posts} from '../../../types/posts';
import {getPosts} from './actions';


const posts = createSlice({
    name: "posts",
    initialState: [] as Posts,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default posts.reducer;
