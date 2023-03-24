import * as React from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Faq from "../components/Faq/faq";
import Home from "../components/Home/Home";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Team from "../components/Team/Team";
//import Confetti from "../components/Confetti/Confetti";
import "./style.css";

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Banner />
        {/*<Confetti />*/}
        <Home />
        <About />
        <Team />
        <Faq />
      </Layout>
    </>
  );
};

export default IndexPage;
