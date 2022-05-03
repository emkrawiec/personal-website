import React from "react";

import Layout from "../components/Layout";
import { Anchor } from "../components/Anchor";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-6xl">404</h1>
        <p className="text-md mt-1">Page not found</p>
        <p className="text-md mt-4">
          Go back to <Anchor href="/">home</Anchor>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
