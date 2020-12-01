import React, { ComponentProps, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StyledBlogPost } from "../blog_post/BlogPost.style";
import H1 from "../common/components/header/H1";
import { getPage } from "../blog_home/services/actions";
import SinglePost from "../blog_home/components/SinglePost";
import { Post, isPost } from "../../types/posts";
import { RootState } from "../../store";
import EmptyPost from "../blog_home/components/EmptyPost";

function StaticPost(props: ComponentProps<any>) {
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(getPage(slug));
  }, []);
  const page: Post | {} = useSelector<RootState, Post | {}>(
    (state) => state.page
  );
  console.info("page is ", page);
  return (
    <>
      {isPost(page) ? (
        <StyledBlogPost>
          <H1>{isPost(page) && page.title.rendered}</H1>
          {isPost(page) && <SinglePost {...page} />}
        </StyledBlogPost>
      ) : (
        <EmptyPost />
      )}
    </>
  );
}
export default StaticPost;
