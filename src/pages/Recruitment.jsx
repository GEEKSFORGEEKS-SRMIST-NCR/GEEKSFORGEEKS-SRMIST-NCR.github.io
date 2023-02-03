import React, { useEffect, useState } from "react";
import RegistrationForm from "../components/Recruitment/RegistrationForm";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Announcement from "react-announcement";
import { withCookies, useCookies } from "react-cookie";
import Logo from "../images/bell.png";
import { supabase } from "../../lib/supabase";
import emailjs from "@emailjs/browser";

const Recruitment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars

  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  const submitData = async (data, e) => {
    setLoading(true);
    await supabase
      .from("Recruitment2023")
      .insert({ ...data, resume: data.name + "-" + Date.now() })
      .then(
        await supabase.storage
          .from("recruitment")
          .upload(`resume2023/${data.name}-${Date.now()}.pdf`, data.resume[0])
      )
      .then(() => {
        e.target.reset();
        setLoading(false);
        setSubmitted(true);
        emailjs.send(
          process.env.GATSBY_EMAIL_ID,
          process.env.GATSBY_TEMPLATE_ID,
          {
            name: data.name,
            email: data.email,
          },
          process.env.GATSBY_EMAIL_KEY
        );
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
        <RegistrationForm
          submitData={submitData}
          submitted={submitted}
          loading={loading}
        />
        {submitted && (
          <Announcement
            title="Submitted"
            subtitle="Your application was successfully submitted. Click here to go home />"
            link="/"
            imageSource={Logo}
            secondsBeforeBannerShows={0}
          />
        )}
      </Layout>
    </>
  );
};

export default withCookies(Recruitment);
