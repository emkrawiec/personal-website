interface FeedPost {
  slug: string;
  timeToRead: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  };
}

interface FeedPostCollection {
  allMdx: {
    nodes: FeedPost[];
  };
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}
