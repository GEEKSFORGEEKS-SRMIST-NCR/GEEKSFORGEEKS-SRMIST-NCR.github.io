import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Banner from "../components/Banner/Banner";
import Faq from "../components/Faq/faq";
import Confetti from "../components/Confettii/ConfettiCanvas";
import "./style.css";

const IndexPage = () => {

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Banner />
        <ConfettiCanvas />
        <Home />
        <About />
        <Team />
        <Faq />
      </Layout>
    </>
  );
};

export default IndexPage;
