import {createAsyncThunk} from '@reduxjs/toolkit';
import { get } from '../../../api/axios';
import {Posts} from '../../../types/posts';

export const GET_POSTS = "get/posts";

export const getPosts = createAsyncThunk(GET_POSTS, async () => {
    const response = await get('posts');
    return response.data as Posts;
});

