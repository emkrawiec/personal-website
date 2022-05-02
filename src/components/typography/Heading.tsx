import * as React from "react";

export const Heading = ({ children, level = 1 }) => {
  const Cmp: keyof JSX.IntrinsicElements = ("h" + level) as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  return <Cmp>{children}</Cmp>;
};
