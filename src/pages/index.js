import { About, Banner, Faq, Home, Team } from "components/index";
import Head from "next/head";

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
      <Banner
        title="ML Workshop Registration Open!"
        // subtitle="All Slots Booked!"
        link="/Registration"
      />
      <Home />
      <About />
      <Team />
      <Faq />
    </>
  );
};

export default IndexPage;
