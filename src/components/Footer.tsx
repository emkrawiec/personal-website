import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Anchor } from "./Anchor";
import { Container } from "./Container";

const Separator = () => <span className="mx-2">|</span>;

export const Footer = () => {
  const {
    site: {
      siteMetadata: {
        author: { email },
        social: { github, linkedin, twitter },
      },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            email
          }
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `);

  return (
    <footer className="text-center pb-4">
      <Container>
        <div className="border-t border-slate-800 pt-4">
          <Anchor
            href={twitter}
            target="_blank"
            rel="noopenner"
            className="ml-auto"
          >
            Twitter
          </Anchor>
          <Separator />
          <Anchor
            href={linkedin}
            target="_blank"
            rel="noopenner"
            className="ml-auto"
          >
            LinkedIn
          </Anchor>
          <Separator />
          <Anchor
            href={`mailto:${email}`}
            target="_blank"
            rel="noopenner"
            className="ml-auto"
          >
            Email
          </Anchor>
          <Separator />
          <Anchor
            href={github}
            target="_blank"
            rel="noopenner"
            className="ml-auto"
          >
            Github
          </Anchor>
        </div>
        <div>
          <small className="text-xs">by Michał Krawiec</small>
        </div>
      </Container>
    </footer>
  );
};
