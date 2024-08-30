import { About, Banner, Faq, Home, Team } from "components/index";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to GeeksForGeeks SRMIST Chapter.</title>
      </Head>

      {/* Announcement Banner */} 
      <Banner
        title="Recruitment Has Started!"
        subtitle="Click here to get a chance to be a Geek!!"
        link="/Recruitment"
      />
      {/* <Banner
        title="Kodation 4.0"
        subtitle="Registrations Closed!"
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
