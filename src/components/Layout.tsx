import * as React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
