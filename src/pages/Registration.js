import { supabase } from "api/Supabase";
import RegistrationForm from "components/Forms/RegistrationForm";
import { Banner } from "components/index";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";
import { getBannerData } from "../utils/contentful";

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars
  // Remove Cookies before loading the page
  useEffect(() => {
    removeCookie("banner");
    getBannerData().then(setBanners);
  }, [removeCookie]);

  // Submit the data
  const submitData = async (data, e) => {
    setLoading(true);

    // Sending data to Supabase
    await supabase
      .from("EventForm3")
      .insert({ ...data })
      .then(() => {
        e.target.reset();
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 20000);
      })
      .then((e) => console.log(e));
  };

  return (
    <>
      <Head>
        <title>Event Registration Form </title>
      </Head>
      <h1 className="section-title">Event Registration Form</h1>
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "50px",
          marginTop: "-50px",
          fontSize: "1.5rem",
          color: "var(--text-main)",
        }}
      >
        {/* get name from cms */}
        {(banners.find((banner) => banner.fields.eventRegistration)?.fields
          .eventName || "New Events Coming Soon !!! ").toUpperCase()}
      </h2>
      <RegistrationForm
        submitData={submitData}
        submitted={submitted}
        loading={loading}
      />
      {submitted && (
        <Banner
          title="Submitted"
          subtitle="Successfully registered for the event. Click here to go home."
          link="/"
        />
      )}
    </>
  );
};

export default withCookies(Registration);
