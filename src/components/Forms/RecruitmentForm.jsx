// import Loader from "./Loader";
// import styles from "styles/Form.module.css";
// import { useState, useEffect } from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { getBannerData } from "../../utils/contentful";
// import { ErrorMessage } from "@hookform/error-message";

// const RecruitmentForm = ({ submitData, submitted, loading }) => {
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     getBannerData().then(setBanners);
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     getValues,
//   } = useForm({
//     defaultValues: {
//       technicalSkills: [],
//       designSkills: [],
//     },
//   });
//   const selectedTeam = useWatch({ control, name: "team" });

//   const onSubmit = (data) => {
//     const technicalSkills = getValues("technicalSkills") || [];
//     const designSkills = getValues("designSkills") || [];
//     const finalData = {
//       ...data,
//       technicalSkills: technicalSkills.filter(Boolean), // Filter out any falsy values
//       designSkills: designSkills.filter(Boolean),
//     };

//     submitData(finalData);
//   };

//   const yearOptions = [
//     // { value: 1, label: "Ist Year" },
//     { value: 2, label: "IInd Year" },
//     { value: 3, label: "IIIrd Year" },
//   ];
//   const technicalOptions = [
//     "Frontend Development",
//     "Backend Development",
//     "App Development",
//     "DevOps",
//     "Machine Learning",
//   ];

//   const designOptions = [
//     "UI/UX Design",
//     "Video Editing (Premiere Pro)",
//     "Graphic Design (Photoshop)",
//     "Motion Graphics (After Effects)",
//     "Illustration (Illustrator)",
//   ];

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//       <label>
//         Name
//         <input
//           placeholder="Enter Your Name"
//           {...register("name", {
//             required: "This field is required",
//             pattern: {
//               value: /^[a-zA-Z][a-zA-Z ]+$/,
//               message: "Alphabetical characters only",
//             },
//           })}
//         />
//         <ErrorMessage errors={errors} name="name" as="span" />
//       </label>
//       <label>
//         College Email
//         <input
//           placeholder="Enter Your College email"
//           {...register("email", {
//             required: "This field is required",
//             pattern: {
//               value: /^[a-zA-Z]{2}[0-9]{4}@srmist\.edu\.in$/i,
//               message: "Enter a valid email ending with '@srmist.edu.in'",
//             },
//           })}
//         />
//         <ErrorMessage errors={errors} name="email" as="span" />
//       </label>
//       <label>
//         Personal Email
//         <input
//           placeholder="Enter Your Personal email"
//           {...register("personalEmail", {
//             required: "This field is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: "Enter a valid email",
//             },
//           })}
//         />
//         <ErrorMessage errors={errors} name="personalEmail" as="span" />
//       </label>
//       <label>
//         WhatsApp Number
//         <input
//           type="tel"
//           placeholder="Enter Your Whatsapp Number"
//           {...register("phone", {
//             required: "This field is required",
//             pattern: {
//               value:
//                 /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
//               message: "Enter a valid Phone Number",
//             },
//           })}
//         />
//         <ErrorMessage errors={errors} name="phone" as="span" />
//       </label>
//       <label>
//         Registration Number
//         <input
//           placeholder="Enter Your College Registration Number"
//           {...register("regno", {
//             required: "This field is required",
//             pattern: {
//               value: /^(RA)[0-9]{13}$/,
//               message:
//                 "Enter valid Registration Number starting with capital 'RA'",
//             },
//           })}
//         />
//         <ErrorMessage errors={errors} name="regno" as="span" />
//       </label>

//       <label htmlFor="year">Year</label>
//       <div className={styles.radio}>
//         {yearOptions.map((year) => (
//           <label key={year.value}>
//             <input
//               {...register("year", { required: "This field is required" })}
//               type="radio"
//               value={year.value}
//             />
//             {year.label}
//           </label>
//         ))}
//       </div>
//       <ErrorMessage errors={errors} name="year" as="span" />
//       <div className={styles.box}>
//         <label>
//           Section
//           <input
//             placeholder="Enter Your section"
//             {...register("section", {
//               required: "This field is required",
//               pattern: {
//                 value: /^[A-Z]{1}$/,
//                 message: "Enter a capital alphabetical character only",
//               },
//             })}
//           />
//           <ErrorMessage errors={errors} name="section" as="span" />
//         </label>

//         <label>
//           Branch
//           <input
//             placeholder="Enter Your Branch"
//             {...register("branch", {
//               required: "This field is required",
//               pattern: {
//                 value: /^[A-Za-z]+$/i,
//                 message: "Enter alphabetical characters only",
//               },
//             })}
//           />
//           <ErrorMessage errors={errors} name="branch" as="span" />
//         </label>
//       </div>

//       <label htmlFor="team" className={styles.checkbox}>
//         Which Team you find yourself fit to work under?
//       </label>
//       <div className={styles.radio}>
//         {[
//           "Technical",
//           "Event Management",
//           "Design/Branding",
//           "Public Relation & Outreach",
//           "Marketing",
//           "Social Media",
//         ].map((team) => (
//           <label key={team}>
//             <input
//               {...register("team", { required: "This field is required" })}
//               type="radio"
//               value={team}
//             />
//             {team}
//           </label>
//         ))}
//       </div>
//       <ErrorMessage errors={errors} name="team" as="span" />
//       {selectedTeam === "Technical" && (
//         <div className="space-y-4 py-4">
//           <p className="font-semibold">Select Technical Skills :</p>
//           {technicalOptions.map((option) => (
//             <label key={option}>
//               <input
//                 {...register("technicalSkills", {
//                   validate: (value) => {
//                     if (
//                       selectedTeam === "Technical" &&
//                       (!value || value.length === 0)
//                     ) {
//                       return "Please select at least one technical skill";
//                     }
//                     return true;
//                   },
//                 })}
//                 type="checkbox"
//                 value={option}
//                 className="w-5 h-5 to-blue-700 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
//               />
//               {option}
//             </label>
//           ))}
//           <ErrorMessage errors={errors} name="technicalSkills" as="span" />
//         </div>
//       )}

//       {selectedTeam === "Design/Branding" && (
//         <div className="space-y-4 py-4">
//           <p className="font-semibold">Select Design Skills :</p>
//           {designOptions.map((option) => (
//             <label key={option} className="flex items-center space-x-2">
//               <input
//                 {...register("designSkills", {
//                   validate: (value) => {
//                     if (
//                       selectedTeam === "Design/Branding" &&
//                       (!value || value.length === 0)
//                     ) {
//                       return "Please select at least one design skill";
//                     }
//                     return true;
//                   },
//                 })}
//                 type="checkbox"
//                 value={option}
//               />
//               {option}
//             </label>
//           ))}
//           <ErrorMessage errors={errors} name="designSkills" as="span" />
//         </div>
//       )}

//       <label>
//         Upload your Resume {selectedTeam === "Technical" && "(Required)"}
//         <input
//           type="file"
//           accept="application/pdf"
//           {...register("resume", {
//             required:
//               selectedTeam === "Technical"
//                 ? "Resume is required for technical team"
//                 : false,
//           })}
//         />
//         <ErrorMessage errors={errors} name="resume" as="span" />
//       </label>
//       <label>
//         What makes you stand apart from the rest?
//         <textarea
//           placeholder="Type here (Min 100 Words)"
//           {...register("desc", {
//             required: "This field is required",
//           })}
//         />
//         <ErrorMessage errors={errors} name="desc" as="span" />
//       </label>

//       {/* render only when recruitment is available get from cms */}
//       {banners.length > 0 ? (
//         banners.some((banner) => banner.fields.recruitment) ? (
//           <button type="submit" disabled={submitted}>
//             {submitted ? (
//               "Submitted Successfully"
//             ) : loading ? (
//               <Loader />
//             ) : (
//               "Submit"
//             )}
//           </button>
//         ) : (
//           <button type="submit" disabled>
//             Alas! The Last Date has Passed.
//           </button>
//         )
//       ) : (
//         <button type="submit" disabled>
//           <Loader />
//         </button>
//       )}
//     </form>
//   );
// };

// export default RecruitmentForm;

import Loader from "./Loader";
import styles from "styles/Form.module.css";
import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { getBannerData } from "../../utils/contentful";
import { ErrorMessage } from "@hookform/error-message";

const RecruitmentForm = ({ submitData, submitted, loading }) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBannerData().then(setBanners);
  }, []);

  const recruitmentDeadline = new Date('2025-08-20T00:00:00+05:30');
  const currentDate = new Date();
  const isRecruitmentOpen = currentDate <= recruitmentDeadline;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      technicalSkills: [],
      designSkills: [],
    },
  });
  
  const selectedTeam = useWatch({ control, name: "team" });

  useEffect(() => {
    if (submitted) {
      reset();
    }
  }, [submitted, reset]);

  const onSubmit = (data) => {
    
    const technicalSkills = Array.isArray(data.technicalSkills) 
      ? data.technicalSkills.filter(Boolean) 
      : [];
    const designSkills = Array.isArray(data.designSkills) 
      ? data.designSkills.filter(Boolean) 
      : [];
    
    const finalData = {
      ...data,
      technicalSkills,
      designSkills,
    };

    submitData(finalData);
  };

  const yearOptions = [
    { value: 2, label: "IInd Year" },
    { value: 3, label: "IIIrd Year" },
  ];

  const technicalOptions = [
    "Frontend Development",
    "Backend Development",
    "App Development",
    "DevOps",
    "Machine Learning",
  ];

  const designOptions = [
    "UI/UX Design",
    "Video Editing (Premiere Pro)",
    "Graphic Design (Photoshop)",
    "Motion Graphics (After Effects)",
    "Illustration (Illustrator)",
  ];

  const teamOptions = [
    "Technical",
    "Event Management",
    "Design/Branding",
    "Public Relation & Outreach",
    "Marketing",
    "Social Media",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      
      <label>
        Name
        <input
          placeholder="Enter Your Name"
          {...register("name", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z][a-zA-Z\s]+$/,
              message: "Alphabetical characters only",
            },
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        <ErrorMessage errors={errors} name="name" as="span" />
      </label>

      <label>
        College Email
        <input
          type="email"
          placeholder="Enter Your College email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z]{2,}[0-9]{4}@srmist\.edu\.in$/i,
              message: "Enter a valid email ending with '@srmist.edu.in'",
            },
          })}
        />
        <ErrorMessage errors={errors} name="email" as="span" />
      </label>

      <label>
        Personal Email
        <input
          type="email"
          placeholder="Enter Your Personal email"
          {...register("personalEmail", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
          })}
        />
        <ErrorMessage errors={errors} name="personalEmail" as="span" />
      </label>

      <label>
        WhatsApp Number
        <input
          type="tel"
          placeholder="Enter Your Whatsapp Number"
          {...register("phone", {
            required: "This field is required",
            pattern: {
              value: /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
              message: "Enter a valid Phone Number",
            },
          })}
        />
        <ErrorMessage errors={errors} name="phone" as="span" />
      </label>

      <label>
        Registration Number
        <input
          placeholder="Enter Your College Registration Number"
          {...register("regno", {
            required: "This field is required",
            pattern: {
              value: /^(RA)[0-9]{12,15}$/,
              message: "Enter valid Registration Number starting with capital 'RA'",
            },
          })}
        />
        <ErrorMessage errors={errors} name="regno" as="span" />
      </label>

      <label htmlFor="year">Year</label>
      <div className={styles.radio}>
        {yearOptions.map((year) => (
          <label key={year.value}>
            <input
              {...register("year", { required: "This field is required" })}
              type="radio"
              value={year.value}
            />
            {year.label}
          </label>
        ))}
      </div>
      <ErrorMessage errors={errors} name="year" as="span" />

      <div className={styles.box}>
        <label>
          Section
          <input
            placeholder="Enter Your section"
            {...register("section", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z]$/,
                message: "Enter a single capital alphabetical character",
              },
            })}
          />
          <ErrorMessage errors={errors} name="section" as="span" />
        </label>

        <label>
          Branch
          <input
            placeholder="Enter Your Branch"
            {...register("branch", {
              required: "This field is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Enter alphabetical characters only",
              },
            })}
          />
          <ErrorMessage errors={errors} name="branch" as="span" />
        </label>
      </div>

      <label htmlFor="team" className={styles.checkbox}>
        Which Team you find yourself fit to work under?
      </label>
      <div className={styles.radio}>
        {teamOptions.map((team) => (
          <label key={team}>
            <input
              {...register("team", { required: "This field is required" })}
              type="radio"
              value={team}
            />
            {team}
          </label>
        ))}
      </div>
      <ErrorMessage errors={errors} name="team" as="span" />

      {selectedTeam === "Technical" && (
        <div className="space-y-4 py-4">
          <p className="font-semibold">Select Technical Skills:</p>
          <div className="grid grid-cols-1 gap-2">
            {technicalOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  {...register("technicalSkills", {
                    validate: (value) => {
                      if (selectedTeam === "Technical" && (!value || value.length === 0)) {
                        return "Please select at least one technical skill";
                      }
                      return true;
                    },
                  })}
                  type="checkbox"
                  value={option}
                  className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <ErrorMessage errors={errors} name="technicalSkills" as="span" />
        </div>
      )}

      {selectedTeam === "Design/Branding" && (
        <div className="space-y-4 py-4">
          <p className="font-semibold">Select Design Skills:</p>
          <div className="grid grid-cols-1 gap-2">
            {designOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  {...register("designSkills", {
                    validate: (value) => {
                      if (selectedTeam === "Design/Branding" && (!value || value.length === 0)) {
                        return "Please select at least one design skill";
                      }
                      return true;
                    },
                  })}
                  type="checkbox"
                  value={option}
                  className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <ErrorMessage errors={errors} name="designSkills" as="span" />
        </div>
      )}
{/* 
      <label>
        Upload your Resume {selectedTeam === "Technical" && "(Required)"}
        <input
          type="file"
          accept="application/pdf"
          {...register("resume", {
            required: selectedTeam === "Technical" 
              ? "Resume is required for technical team" 
              : false,
            validate: (files) => {
              if (files && files.length > 0) {
                const file = files[0];
                const maxSize = 5 * 1024 * 1024; // 5MB
                if (file.size > maxSize) {
                  return "File size must be less than 5MB";
                }
              }
              return true;
            },
          })}
        />
        <ErrorMessage errors={errors} name="resume" as="span" />
      </label> */}
      

<label>
  Resume Google Drive Link {selectedTeam === "Technical" && "(Required)"}
  <input
    type="url"
    placeholder="Paste your Google Drive resume link here"
    {...register("resume", {
      required: selectedTeam === "Technical" 
        ? "Resume Google Drive link is required for technical team" 
        : false,
      validate: (value) => {
        if (value && value.trim() !== "") {
          // Check if it's a valid Google Drive link
          const googleDrivePattern = /^https:\/\/drive\.google\.com\/(file\/d\/|open\?id=)/;
          if (!googleDrivePattern.test(value)) {
            return "Please provide a valid Google Drive link";
          }
          
          // Additional check for sharing permissions
          if (!value.includes("/file/d/") && !value.includes("open?id=")) {
            return "Please ensure the Google Drive link is properly formatted";
          }
        }
        return true;
      },
    })}
  />
  <small style={{ color: '#666', fontSize: '0.875rem', marginTop: '4px', display: 'block' }}>
    Make sure your Google Drive file is set to "Anyone with the link can view"
  </small>
  <ErrorMessage errors={errors} name="resume" as="span" />
</label>

      <label>
        What makes you stand apart from the rest?
        <textarea
          placeholder="Type here (Min 100 Words)"
          rows={5}
          {...register("desc", {
            required: "This field is required",
            minLength: {
              value: 100,
              message: "Description must be at least 100 characters",
            },
          })}
        />
        <ErrorMessage errors={errors} name="desc" as="span" />
      </label>

      {isRecruitmentOpen ? (
        <button 
          type="submit" 
          disabled={submitted || loading}
          className={`${submitted || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {submitted ? (
            "Submitted Successfully ✓"
          ) : loading ? (
            <Loader />
          ) : (
            "Submit Application"
          )}
        </button>
      ) : (
        <button type="button" disabled className="opacity-50 cursor-not-allowed">
          Recruitment Closed - Deadline: August 20, 2025 12:00 AM
        </button>
      )}
    </form>
  );
};

export default RecruitmentForm;
