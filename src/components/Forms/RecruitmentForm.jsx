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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();
  const selectedTeam = useWatch({ control, name: "team" });

  const onSubmit = (data) => {
    const technicalSkills = getValues("technicalSkills") || [];
    const designSkills = getValues("designSkills") || [];
    const finalData = {
      ...data,
      technicalSkills: technicalSkills.filter(Boolean), // Filter out any falsy values
      designSkills: designSkills.filter(Boolean),
    };

    submitData(finalData);
  };

  const yearOptions = [
    { value: 1, label: "Ist Year" },
    { value: 2, label: "IInd Year" },
    // { value: 3, label: "IIIrd Year" },
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>
        Name
        <input
          placeholder="Enter Your Name"
          {...register("name", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z][a-zA-Z ]+$/,
              message: "Alphabetical characters only",
            },
          })}
        />
        <ErrorMessage errors={errors} name="name" as="span" />
      </label>
      <label>
        College Email
        <input
          placeholder="Enter Your College email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z]{2}[0-9]{4}@srmist\.edu\.in$/i,
              message: "Enter a valid email ending with '@srmist.edu.in'",
            },
          })}
        />
        <ErrorMessage errors={errors} name="email" as="span" />
      </label>
      <label>
        Personal Email
        <input
          placeholder="Enter Your Personal email"
          {...register("personalEmail", {
            required: "This field is required",
          })}
        />
        <ErrorMessage errors={errors} name="email" as="span" />
      </label>
      <label>
        WhatsApp Number
        <input
          type="tel"
          placeholder="Enter Your Whatsapp Number"
          {...register("phone", {
            required: "This field is required",
            pattern: {
              value:
                /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
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
              value: /^(RA)[0-9]{13}$/,
              message:
                "Enter valid Registration Number starting with capital 'RA'",
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
                value: /^[A-Z]{1}$/,
                message: "Enter a capital alphabetical character only",
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
                value: /^[A-Za-z]+$/i,
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
        {[
          "Technical",
          "Event Management",
          "Design/Branding",
          "Public Relation & Outreach",
          "Marketing",
          "Social Media",
        ].map((team) => (
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
        <div className=" space-y-4 py-4 ">
          <p className="font-semibold">Select Technical Skills :</p>
          {technicalOptions.map((option) => (
            <label key={option}>
              <input
                {...register("technicalSkills")}
                type="checkbox"
                value={option}
                className="w-5 h-5 to-blue-700 bg-gray-100 border-gray-300 rounded focus:ring-green-500"

              />
              {option}
            </label>
          ))}
        </div>
      )}

      {selectedTeam === "Design/Branding" && (
        <div className="space-y-4 py-4">
          <p className="font-semibold">Select Design Skills :</p>
          {designOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                {...register("designSkills")}
                type="checkbox"
                value={option}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      <label>
        Upload your Resume (Required for 1st and 3rd year)
        <input type="file" accept="application/pdf" {...register("resume")} />
        <ErrorMessage errors={errors} name="resume" as="span" />
      </label>
      <label>
        What makes you stand apart from the rest?
        <textarea
          placeholder="Type here (Min 100 Words)"
          {...register("desc", {
            required: "This field is required",
          })}
        />
        <ErrorMessage errors={errors} name="desc" as="span" />
      </label>

      {/* render only when recruitment is available get from cms */}
      {banners.length > 0 ? (
        banners.some((banner) => banner.fields.recruitment) ? (
          <button type="submit" disabled={submitted}>
            {submitted ? (
              "Submitted Successfully"
            ) : loading ? (
              <Loader />
            ) : (
              "Submit"
            )}
          </button>
        ) : (
          <button type="submit" disabled>
            Alas! The Last Date has Passed.
          </button>
        )
      ) : (
        <button type="submit" disabled>
          <Loader />
        </button>
      )}
    </form>
  );
};

export default RecruitmentForm;
