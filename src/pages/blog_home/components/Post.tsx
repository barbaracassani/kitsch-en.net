import React, { ComponentProps } from "react";
import { Post as PostType } from "../../../types/posts";

interface PostProps extends ComponentProps<any>, PostType {}

const Post = (props: PostProps) => {
  console.info("bbaaaa", props);
  return (
    <article>
      <h2>{props.title.rendered}</h2>
      <span>{props.date}</span>
      <div dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
    </article>
  );
};
export default Post;
