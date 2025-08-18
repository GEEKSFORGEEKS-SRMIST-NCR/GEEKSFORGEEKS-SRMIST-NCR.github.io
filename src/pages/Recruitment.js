
// import emailjs from "@emailjs/browser";
// import { supabase } from "api/Supabase";
// import RecruitmentForm from "components/Forms/RecruitmentForm";
// import { Banner } from "components/index";
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import { useCookies, withCookies } from "react-cookie";

// const Recruitment = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [_, removeCookie] = useCookies(); // eslint-disable-line no-unused-vars

//   // Remove Cookies before loading the page
//   useEffect(() => {
//     removeCookie("banner");
//   }, [removeCookie]);

//   // Submit the data
//   const submitData = async (data, e) => {
//     setLoading(true);
    
//     // Generate timestamp once
//     const timestamp = Date.now();
//     const fileName = data.resume.length === 0 ? " " : `${data.name}-${timestamp}`;
    
//     try {
//       // First upload the file if it exists
//       if (data.resume.length > 0) {
//         await supabase.storage
//           .from("recruitment-resume")
//           .upload(`resume2024/${fileName}.pdf`, data.resume[0]);
//       }
  
//       // Then insert into database
//       await supabase
//         .from("Recruitment-2024")
//         .insert({
//           ...data,
//           resume: fileName,
//         });
  
//       if (e) {
//         e.target.reset();
//       }
//       setLoading(false);
//       setSubmitted(true);
  
//       // Send email to user
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAIL_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         {
//           name: data.name,
//           email: data.email,
//         },
//         process.env.NEXT_PUBLIC_EMAIL_KEY
//       );
  
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 20000);
  
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Recruitment Form | GFG SRMIST</title>
//       </Head>
//       <h1 className="section-title">Recruitment Form</h1>
//       <RecruitmentForm
//         submitData={submitData}
//         submitted={submitted}
//         loading={loading}
//       />
//       {submitted && (
//         <Banner
//           title="Submitted"
//           subtitle="Your application was successfully submitted. Click here to go home."
//           link="/"
//         />
//       )}
//     </>
//   );
// };

// export default withCookies(Recruitment);

import { supabase } from "api/Supabase";
import RecruitmentForm from "components/Forms/RecruitmentForm";
import { Banner } from "components/index";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";

const Recruitment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [_, removeCookie] = useCookies();

  useEffect(() => {
    removeCookie("banner");
  }, [removeCookie]);

  const submitData = async (data) => {
    setLoading(true);
    setError(null);
    
    try {
      const dbData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        regno: data.regno,
        year: data.year.toString(), 
        section: data.section,
        branch: data.branch,
        team: data.team,
        designskills: data.designSkills || [],
        techskills: data.technicalSkills || [], 
        desc: data.desc,
        resume: data.resume || "", 
        personalemail: data.personalEmail,
      };

      console.log('Submitting data:', dbData); 

      const { data: insertedData, error: dbError } = await supabase
        .from("Recruitment-2025")
        .insert(dbData)
        .select(); 
      if (dbError) {
        console.error('Database error details:', dbError);
        throw new Error(`Database error: ${dbError.message}`);
      }

      console.log('Successfully inserted:', insertedData); 
      setLoading(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 20000);

    } catch (error) {
      console.error('Submission error:', error);
      setError(error.message || 'An error occurred during submission');
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Recruitment Form | GFG SRMIST</title>
      </Head>
      
      {error && (
        <div style={{ 
          backgroundColor: '#fee', 
          border: '1px solid #f88', 
          color: '#c00', 
          padding: '10px', 
          margin: '10px 0',
          borderRadius: '4px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
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
