import { About, Banner, Faq, Home, Team } from "components/index";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to GeeksForGeeks Chapter.</title>
      </Head>

      {/* Announcement Banner */}
      <Banner
        title="Tech-Darshan'23"
        subtitle="Click here to Register for the event!!!"
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
