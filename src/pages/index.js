import { About, Banner, Faq, Home, Team, Potw } from "components/index";
import Head from "next/head";
import { memo } from "react";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to GeeksForGeeks SRMIST Chapter.</title>
      </Head>

      {/* Announcement Banner */}
      {/* <Banner
        title="Recruitment Has Started!"
        subtitle="Click here to get a chance to be a Geek!!"
        link="/Recruitment"
      /> */}
      {/* <Banner
        title="Kodation 4.0"
        subtitle="Registrations Closed!"
        link="/Registration"
      /> */}

      {/* Sections */}
      <Home />
      <About />
      <Potw />
      <Team />
      <Faq />
    </>
  );
};

export default memo(IndexPage);
