import { supabase } from "api/supabase";
import { Banner } from "components/index";
import RegistrationForm from "components/RegistrationForm";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";

const Registration = () => {
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
      .then((e) => console.log(e));
  };

  return (
    <>
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
        Tech-Darshan&apos;23
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
