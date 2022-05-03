import { Link } from "gatsby";
import React from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

export const Header = () => {
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
