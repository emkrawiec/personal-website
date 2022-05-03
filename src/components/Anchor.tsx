import clsx from "clsx";
import React, { HTMLProps } from "react";

type AnchorProps = HTMLProps<HTMLAnchorElement>;

export const Anchor: React.FC<AnchorProps> = props => {
  const { children, className, ...restProps } = props;
  const cssClasses = clsx(
    "font-medium underline hover:no-underline",
    className
  );

  return (
    <a className={cssClasses} {...restProps}>
      {children}
    </a>
  );
};
