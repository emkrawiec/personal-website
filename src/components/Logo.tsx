import React from "react";

interface LogoProps {}

export const Logo = (props: LogoProps) => {
  return (
    <div className="text-xl font-semibold flex">
      <p className="text-indigo-400	font-mono">Michał Krawiec's</p>
      &nbsp;website
    </div>
  );
};
