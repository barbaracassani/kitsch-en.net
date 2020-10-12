import React, { ComponentProps, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./services/actions";
import { Post, Posts } from "../../types/posts";
import PostComponent from "./components/Post";
import EmptyPost from "./components/EmptyPost";
import { RootState } from "../../store";
import { StyledBlogHome } from "./BlogHome.style";
import H1 from "../common/components/header/H1";

function BlogHome(props: ComponentProps<any>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const posts: Posts = useSelector<RootState, Posts>((state) => state.posts);
  return (
    <>
      <StyledBlogHome>
        <H1>Blog</H1>
        {(!posts || !posts.length) &&
          new Array(3).fill("a").map((_, index) => {
            return <EmptyPost key={index} />;
          })}
        {posts &&
          posts.length &&
          posts.map((post: Post) => {
            return <PostComponent key={post.id} {...post} />;
          })}
      </StyledBlogHome>
    </>
  );
}
export default BlogHome;
