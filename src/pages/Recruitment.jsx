import React, { useEffect, useState } from "react";
import RegistrationForm from "../components/Recruitment/RegistrationForm";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Announcement from "react-announcement";
import { withCookies, useCookies } from "react-cookie";
import Logo from "../images/bell.png";
import { supabase } from "../../lib/supabase";

const Recruitment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [cookies, removeCookie] = useCookies();

  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  const submitData = async (data, e) => {
    await supabase
      .from("Recruitment")
      .insert([data])
      .then(() => {
        e.target.reset();
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 20000);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Seo title="Recruitment For Core Members 2022" />
      <Layout>
        <h1 className="section-title">Recruitment Form</h1>
        {submitted && (
          <Announcement
            title="Submitted"
            subtitle="Your application was successfully submitted. Click here to go home />"
            link="/"
            imageSource={Logo}
            secondsBeforeBannerShows={0}
          />
        )}
        <RegistrationForm submitData={submitData} submitted={submitted} />
      </Layout>
    </>
  );
};

export default withCookies(Recruitment);
