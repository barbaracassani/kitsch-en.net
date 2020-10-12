import React from "react";
import spinner from "../../../assets/images/spinner.gif";

import { StyledEmptyPost } from "./EmptyPost.style";

const EmptyPost = () => {
  return (
    <StyledEmptyPost>
      <img src={spinner} alt="Loading..." />
    </StyledEmptyPost>
  );
};
export default EmptyPost;
