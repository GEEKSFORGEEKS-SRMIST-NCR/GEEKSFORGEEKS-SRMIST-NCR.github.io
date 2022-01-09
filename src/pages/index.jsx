import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import "./style.css";

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Home />
        <About />
        <Team />
      </Layout>
    </>
  );
};

export default IndexPage;
