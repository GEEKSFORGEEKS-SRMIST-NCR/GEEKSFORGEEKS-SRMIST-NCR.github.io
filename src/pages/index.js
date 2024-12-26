import Head from "next/head";
import { memo, useEffect, useState } from "react";
import { getBannerData } from "../utils/contentful";
import { About, Banner, Faq, Home, Team,Potw } from "components/index";

const IndexPage = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBannerData().then(setBanners);
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to GeeksForGeeks SRMIST Chapter.</title>
      </Head>
      {banners.map((banner) => (
        banner.fields.recruitment || banner.fields.eventRegistration ? (
          <Banner
            key={banner.sys.id}
            title={banner.fields.eventName}
            subtitle={banner.fields.eventRegistration ? "Registrations Open!" : "Recruitment Open!"}
            link={banner.fields.recruitment ? "/Recruitment" : "/Registration"}
          />
        ) : null
      ))}
      <Home />
      <About />
      <Potw />
      <Team />
      <Faq />
    </>
  );
};

export default memo(IndexPage);