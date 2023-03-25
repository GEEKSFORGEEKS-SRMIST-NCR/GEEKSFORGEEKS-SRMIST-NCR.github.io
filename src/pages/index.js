import { About, Banner, Faq, Home, Team } from "components/index";
import Head from "next/head";
// import ReactConfetti from "react-confetti";

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
      {/* <ReactConfetti width={1200} height={1200} tweenDuration={5} /> */}
      <Home />
      <About />
      <Team />
      <Faq />
    </>
  );
};

export default IndexPage;
