import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// styles
const pageStyles = {
  color: "var(--text-main)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 313px)",
  textAlign: "center",
};

const paragraphStyles = {
  fontSize: "1.25rem",
  marginBottom: 10,
};

const homelink = {
  color: "var(--text-main)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: "#2c3e50",
    borderBottom: "1px solid #2c3e50",
  },
};

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Page Not found" />
      <main style={pageStyles}>
        <h1 className="section-title">Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔 we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/" style={homelink}>
            Go home
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
