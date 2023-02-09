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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Seo title="Event Registration Form 2023" />
      <Layout>
        <h1 className="section-title">Event Registration Form</h1>
        <RegistrationForm
          submitData={submitData}
          submitted={submitted}
          loading={loading}
        />
        {submitted && (
          <Announcement
            title="Submitted"
            subtitle="Your application was successfully submitted. Click here to go home."
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
