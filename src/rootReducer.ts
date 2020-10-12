import { combineReducers } from "redux";
import posts from "./pages/blog_home/services/posts.slice";
import post from "./pages/blog_home/services/post.slice";

export default combineReducers({
  posts,
  post,
});
