import React, { useEffect, useState } from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Announcement from "react-announcement";
import { withCookies, useCookies } from "react-cookie";
import Logo from "../images/bell.png";
import { supabase } from "../../lib/supabase";

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars

  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  const submitData = async (data, e) => {
    setLoading(true);
    console.log(data);
    await supabase
      .from("EventForm")
      .insert({ ...data })
      .then(() => {
        e.target.reset();
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 20000);
      });
  };

  return (
    <>
      <Seo title="Event Registration Form 2023" />
      <Layout>
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
          Tech-Darshan'23
        </h2>
        <RegistrationForm
          submitData={submitData}
          submitted={submitted}
          loading={loading}
        />
        {submitted && (
          <Announcement
            title="Submitted"
            subtitle="Successfully registered for the event. Click here to go home."
            link="/"
            imageSource={Logo}
            secondsBeforeBannerShows={0}
          />
        )}
      </Layout>
    </>
  );
};

export default withCookies(Registration);
