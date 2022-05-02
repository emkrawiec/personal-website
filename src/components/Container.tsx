import React from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = props => {
  const { children, className } = props;
  const cssClasses = clsx("max-w-xl mx-auto px-6", className);

  return <div className={cssClasses}>{children}</div>;
};
