import emailjs from "@emailjs/browser";
import { supabase } from "api/Supabase";
import RecruitmentForm from "components/Forms/RecruitmentForm";
import { Banner } from "components/index";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";

const Recruitment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars

  // Remove Cookies before loading the page
  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  // Submit the data
  const submitData = async (data, e) => {
    setLoading(true);
    
    // Generate timestamp once
    const timestamp = Date.now();
    const fileName = data.resume.length === 0 ? " " : `${data.name}-${timestamp}`;
    
    try {
      // First upload the file if it exists
      if (data.resume.length > 0) {
        await supabase.storage
          .from("recruitment-resume")
          .upload(`resume2024/${fileName}.pdf`, data.resume[0]);
      }
  
      // Then insert into database
      await supabase
        .from("Recruitment-2024")
        .insert({
          ...data,
          resume: fileName,
        });
  
      if (e) {
        e.target.reset();
      }
      setLoading(false);
      setSubmitted(true);
  
      // Send email to user
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
        },
        process.env.NEXT_PUBLIC_EMAIL_KEY
      );
  
      setTimeout(() => {
        setSubmitted(false);
      }, 20000);
  
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Recruitment Form | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Recruitment Form</h1>
      <RecruitmentForm
        submitData={submitData}
        submitted={submitted}
        loading={loading}
      />
      {submitted && (
        <Banner
          title="Submitted"
          subtitle="Your application was successfully submitted. Click here to go home."
          link="/"
        />
      )}
    </>
  );
};

export default withCookies(Recruitment);
