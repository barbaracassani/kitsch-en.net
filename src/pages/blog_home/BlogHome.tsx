import React, { ComponentProps, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./services/actions";
import { Post, Posts } from "../../types/posts";
import PostComponent from "./components/Post";
import { RootState } from "../../store";

function BlogHome(props: ComponentProps<any>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const posts: Posts = useSelector<RootState, Posts>((state) => state.posts);
  console.info("p[osts ", posts);
  return (
    <>
      {posts &&
        posts.length &&
        posts.map((post: Post) => {
          return <PostComponent key={post.id} {...post} />;
        })}
    </>
  );
}
export default BlogHome;
