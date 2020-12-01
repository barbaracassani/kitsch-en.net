import React, { ComponentProps } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

import { isPost, Post as PostType } from "../../../types/posts";
import { StyledPost } from "./Post.style";
import EmptyPost from "./EmptyPost";

interface PostProps extends ComponentProps<any>, PostType {}

const formt = (date: string, formatStr: string = "EEEE, do MMMM yyyy") => {
  return format(new Date(date), formatStr, {
    locale: enGB,
  });
};

const SinglePost = (props: PostProps) => {
  return (
    <StyledPost>
      {isPost(props) && (
        <>
          <span className="date">{formt(props.date)}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: props.content ? props.content.rendered : "",
            }}
          ></div>
        </>
      )}
    </StyledPost>
  );
};
export default SinglePost;
