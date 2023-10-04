import { supabase } from "api/Supabase";
import POTDForm from "components/Forms/POTDForm";
import { Banner } from "components/index";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";

const Panel = () => {
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

    // Sending data to Supabase
    await supabase
      .from("POTDForm")
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
        <title>POTD Admin Portal</title>
      </Head>
      <h1 className="section-title">POTD Admin Portal</h1>
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "50px",
          marginTop: "-50px",
          fontSize: "1.5rem",
          color: "var(--text-main)",
        }}
      >
        Problem of the Day
      </h2>
      <RegistrationForm
        submitData={submitData}
        submitted={submitted}
        loading={loading}
      />
      {submitted && (
        <Banner
          title="Problem Added"
          subtitle="Successfully added the problem for the day."
          link="/"
        />
      )}
    </>
  );
};

export default withCookies(Panel);
