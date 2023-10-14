import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import styles from "styles/Form.module.css";
import Loader from "./Loader";

const RecruitmentForm = ({ submitData, submitted, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(submitData)} className={styles.form}>
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
        Email
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
        <label>
          <input
            {...register("year", {
              required: "This field is required",
            })}
            type="radio"
            value="1"
          />
          Ist Year
        </label>
        <label>
          <input
            {...register("year", {
              required: "This field is required",
            })}
            type="radio"
            value="2"
          />
          IInd Year
        </label>
        <label>
          <input
            {...register("year", {
              required: "This field is required",
            })}
            type="radio"
            value="3"
          />
          IIIrd Year
        </label>
        <label>
          <input
            {...register("year", {
              required: "This field is required",
            })}
            type="radio"
            value="4"
          />
          IVth Year
        </label>
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
            placeholder="Enter Your section"
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
        <label>
          <input
            {...register("team", {
              required: "This field is required",
            })}
            type="radio"
            value="Technical"
          />
          Technical
        </label>
        <label>
          <input
            {...register("team", {
              required: "This field is required",
            })}
            type="radio"
            value="Event Management"
          />
          Event Management
        </label>
        <label>
          <input
            {...register("team", { required: "This field is required" })}
            type="radio"
            value="Design/Branding"
          />
          Design/Branding
        </label>
        <label>
          <input
            {...register("team", { required: "This field is required" })}
            type="radio"
            value="Public Relation & Outreach"
          />
          Public Relation & Outreach
        </label>
        <label>
          <input
            {...register("team", { required: "This field is required" })}
            type="radio"
            value=" Marketing"
          />
          Marketing
        </label>
        <label>
          <input
            {...register("team", { required: "This field is required" })}
            type="radio"
            value=" Social Media"
          />
          Social Media
        </label>
      </div>
      <ErrorMessage errors={errors} name="team" as="span" />
      <label>
        Upload your Resume (Required for 2nd and 3rd year)
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
      <button type="submit" disabled={submitted}>
        {/* Submissions Closed */}
        {submitted ? "Submitted Successfully" : loading ? <Loader /> : "Submit"}
      </button>
    </form>
  );
};

export default RecruitmentForm;
