import * as React from "react";
// import Navbar from "../components/Navbar/Navbar"
// import Contact from "../components/Contacts/Contact"
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import "./style.css";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Team />
      </Layout>
    </>
  );
};

export default IndexPage;
