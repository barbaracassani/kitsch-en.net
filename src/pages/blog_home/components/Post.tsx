import React, { ComponentProps } from "react";
import { Post as PostType } from "../../../types/posts";
import { StyledPost } from "./Post.style";

interface PostProps extends ComponentProps<any>, PostType {}

const Post = (props: PostProps) => {
  return (
    <StyledPost>
      <h2>{props.title.rendered}</h2>
      <span>{props.date}</span>
      <div dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
    </StyledPost>
  );
};
export default Post;
