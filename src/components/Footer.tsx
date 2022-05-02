import React from "react";
import { Anchor } from "./Anchor";
import { Container } from "./Container";

interface FooterProps {}

const Separator = () => <span className="mx-2">|</span>;

export const Footer = (props: FooterProps) => {
  return (
    <footer>
      <Container className="border-t border-slate-800 py-4 text-center">
        <div>
          <Anchor
            href="https://twitter.com/micha_krawiec/"
            target="_blank"
            rel="noopenner"
            className="ml-auto"
          >
            Twitter
          </Anchor>
          <Separator />
          <Anchor
            href="https://www.linkedin.com/in/micha%C5%82-krawiec-055397238/"
            target="_blank"
            rel="noopenner"
            className="ml-auto"
          >
            LinkedIn
          </Anchor>
        </div>
        <div>
          <small className="text-xs">by Michał Krawiec</small>
        </div>
      </Container>
    </footer>
  );
};
