import React, { ComponentProps, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./services/actions";
import { Post, Posts } from "../../types/posts";
import PostComponent from "./components/Post";
import { RootState } from "../../store";
import { StyledBlogHome } from "./BlogHomeStyle";

function BlogHome(props: ComponentProps<any>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const posts: Posts = useSelector<RootState, Posts>((state) => state.posts);
  return (
    <>
      <StyledBlogHome>
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
