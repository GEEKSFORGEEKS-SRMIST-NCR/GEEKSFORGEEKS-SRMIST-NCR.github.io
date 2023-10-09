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
        title="DSA Workshop and Resume Building Session"
        subtitle="Click here to Register for the event!!!"
        link="/Registration"
      /> */}
      <Home />
      <About />
      <Team />
      <Faq />
    </>
  );
};

export default IndexPage;
