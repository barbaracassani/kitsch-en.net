import React, { ComponentProps } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

import { Post as PostType } from "../../../types/posts";
import { StyledPost } from "./Post.style";
import H2 from "../../common/components/header/H2";
import { Link } from "react-router-dom";

interface PostProps extends ComponentProps<any>, PostType {
  ref?: string;
}

const formt = (date: string, formatStr: string = "EEEE, do MMMM yyyy") => {
  return format(new Date(date), formatStr, {
    locale: enGB,
  });
};

const Post = (props: PostProps) => {
  return (
    <StyledPost>
      <Link to={`/blog/${props.slug}`}>
        <H2>{props.title.rendered}</H2>
        <span className="date">{formt(props.date)}</span>
        <div dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
      </Link>
    </StyledPost>
  );
};
export default Post;
