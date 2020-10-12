import React, { ComponentProps, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StyledBlogPost } from "./BlogPost.style";
import H1 from "../common/components/header/H1";
import { getPost } from "../blog_home/services/actions";
import SinglePost from "../blog_home/components/SinglePost";
import { Post, isPost } from "../../types/posts";
import { RootState } from "../../store";
import EmptyPost from "../blog_home/components/EmptyPost";
import { StyledPost } from "../blog_home/components/Post.style";

function BlogPost(props: ComponentProps<any>) {
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(getPost(slug));
  }, []);
  const post: Post | {} = useSelector<RootState, Post | {}>(
    (state) => state.post
  );

  return (
    <>
      {isPost(post) ? (
        <StyledBlogPost>
          <H1>{isPost(post) && post.title.rendered}</H1>
          {isPost(post) && <SinglePost {...post} />}
        </StyledBlogPost>
      ) : (
        <EmptyPost />
      )}
    </>
  );
}
export default BlogPost;
