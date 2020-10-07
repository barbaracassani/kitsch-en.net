import React, { ComponentProps } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

import { Post as PostType } from "../../../types/posts";
import { StyledPost } from "./Post.style";
import H2 from "../../common/components/header/H2";

interface PostProps extends ComponentProps<any>, PostType {}

const formt = (date: string, formatStr: string = "EEEE, do MMMM yyyy") => {
  return format(new Date(date), formatStr, {
    locale: enGB,
  });
};

const Post = (props: PostProps) => {
  return (
    <StyledPost>
      <H2>{props.title.rendered}</H2>
      <span className="date">{formt(props.date)}</span>
      <div dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
    </StyledPost>
  );
};
export default Post;
