import { Link } from "gatsby";
import React from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <header className="py-4">
      <Container>
        <Link to="/">
          <Logo />
        </Link>
      </Container>
    </header>
  );
};
