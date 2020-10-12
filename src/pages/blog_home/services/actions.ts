import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../../api/axios";
import { Post, Posts } from "../../../types/posts";

export const GET_POSTS = "get/posts";
export const GET_POST = "get/post";

export const getPosts = createAsyncThunk(GET_POSTS, async () => {
  const response = await get("posts");
  return response.data as Posts;
});
export const getPost = createAsyncThunk(
  GET_POST,
  async (slug: string): Promise<Post> => {
    const response = await get("post", slug);
    return response.data[0] as Post;
  }
);
