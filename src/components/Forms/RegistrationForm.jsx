import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import styles from "styles/Form.module.css";
import Loader from "./Loader";
import { getBannerData } from "../../utils/contentful";

const RegistrationForm = ({ submitData, submitted, loading }) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBannerData().then(setBanners);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className={styles.form}
      autoComplete="on"
    >
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
                value: /^[a-zA-Z][a-zA-Z ]+$/,
                message: "Enter alphabetical characters only",
              },
            })}
          />
          <ErrorMessage errors={errors} name="branch" as="span" />
        </label>
      </div>
      {/* <label>
        HackerRank ID 
        <input
          placeholder="Enter Your HackerRank ID"
          {...register("hackerrank", {
            required: "This field is required",
            pattern: {
              message: "Enter a valid HackerRank id",
            },
          })}
        />
        <ErrorMessage errors={errors} name="hackerrank" as="span" />
      </label>
      <label>
        LeetCode ID
        <input
          placeholder="Enter Your LeetCode ID"
          {...register("leetcode", {
            required: "This field is required",
            pattern: {
              message: "Enter a valid leetcode id",
            },
          })}
        />
        <ErrorMessage errors={errors} name="leetcode" as="span" />
      </label> */}
      {/* <label>
        What makes us stand apart from the rest?
        <textarea
          placeholder="Type here (Min 100 Words)"
          {...register("desc", {
            required: "This field is required",
          })}
        />
        <ErrorMessage errors={errors} name="desc" as="span" />
      </label> */}

      {banners.length > 0 ? (
        banners.some((banner) => banner.fields.eventRegistration) ? (
          <button type="submit" disabled={submitted}>
            {submitted ? (
              "Registered Successfully!"
            ) : loading ? (
              <Loader />
            ) : (
              "Register Now!"
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

{
  /* 
<label>
    Team Name
    <input
      placeholder="Enter Your Team's Name"
      {...register("team_name", {
        required: "This field is required",
        pattern: {
          value: /^[\w\-\s]+$/i,
          message: "Enter alpha-numeric characters only",
        },
      })}
    />
    <ErrorMessage errors={errors} name="team_name" as="span" />
</label>

Team Leader Details container
<h2>Team Leader Details</h2>
<h2>Name</h2>
<div className={styles.box}>
    <label>
        Name
        <input
            placeholder="Enter The Name"
            {...register("leader_name", {
                required: "This field is required",
                pattern: {
                    value: /^[a-zA-Z][a-zA-Z ]+$/,
                    message: "Alphabetical characters only",
                },
            })}
        />
        <ErrorMessage errors={errors} name="leader_name" as="span" />
    </label>

    <label>
        Registration Number
        <input
            placeholder="Enter The Registration Number"
            {...register("leader_regno", {
                required: "This field is required",
                pattern: {
                    value: /^(RA)[0-9]{13}$/,
                    message:
                        "Enter valid Registration Number starting with capital 'RA'",
                },
            })}
        />
        <ErrorMessage errors={errors} name="leader_regno" as="span" />
    </label>
</div>

<div className={styles.box}>
    <label>
        Email
        <input
            placeholder="Enter The College email"
            {...register("leader_email", {
                required: "This field is required",
                pattern: {
                    value: /^[a-zA-Z]{2}[0-9]{4}@srmist\.edu\.in$/i,
                    message: "Enter a valid email ending with '@srmist.edu.in'",
                },
            })}
        />
        <ErrorMessage errors={errors} name="leader_email" as="span" />
    </label>

    <label>
        WhatsApp Number
        <input
            type="tel"
            placeholder="Enter Your Whatsapp Number"
            {...register("leader_phone", {
                required: "This field is required",
                pattern: {
                    value:
                        /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
                    message: "Enter a valid Phone Number",
                },
            })}
        />
        <ErrorMessage errors={errors} name="leader_phone" as="span" />
    </label>
</div>

<div className={styles.box}>
    <label>
        Year
        <input
            placeholder="Enter The Year"
            {...register("leader_year", {
                required: "This field is required",
                pattern: {
                    value: /^[1-4]{1}$/,
                    message: "Enter a numeric value only from (1-4)",
                },
            })}
        />
        <ErrorMessage errors={errors} name="leader_year" as="span" />
    </label>
    <label>
        Section
        <input
            placeholder="Enter The section"
            {...register("leader_section", {
                required: "This field is required",
                pattern: {
                    value: /^[A-Z]{1}$/,
                    message: "Enter a capital alphabetical character only",
                },
            })}
        />
        <ErrorMessage errors={errors} name="leader_section" as="span" />
    </label>
</div>

Team Members Details
<h2>Team Members Details

Member 1
<h3>Member 1</h3>
<div className={styles.box_3}>
    <label>
        Name
        <input
            placeholder="Enter The Name"
            {...register("member1_name", {
                pattern: {
                    value: /^[a-zA-Z][a-zA-Z ]+$/,
                    message: "Alphabetical characters only",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member1_name" as="span" />
    </label>

    <label>
        Registration Number
        <input
            placeholder="Enter The Registration Number"
            {...register("member1_regno", {
                pattern: {
                    value: /^(RA)[0-9]{13}$/,
                    message:
                        "Enter valid Registration Number starting with capital 'RA'",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member1_regno" as="span" />
    </label>
    <label>
        Year
        <input
            placeholder="Enter The Year"
            {...register("member1_year", {
                pattern: {
                    value: /^[1-4]{1}$/,
                    message: "Enter a numeric value only from (1-4)",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member1_year" as="span" />
    </label>
</div>

Member 2
<h3>Member 2</h3>
<div className={styles.box_3}>
    <label>
        Name
        <input
            placeholder="Enter The Name"
            {...register("member2_name", {
                pattern: {
                    value: /^[a-zA-Z][a-zA-Z ]+$/,
                    message: "Alphabetical characters only",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member2_name" as="span" />
    </label>

    <label>
        Registration Number
        <input
            placeholder="Enter The Registration Number"
            {...register("member2_regno", {
                pattern: {
                    value: /^(RA)[0-9]{13}$/,
                    message:
                        "Enter valid Registration Number starting with capital 'RA'",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member2_regno" as="span" />
    </label>
    <label>
        Year
        <input
            placeholder="Enter The Year"
            {...register("member2_year", {
                pattern: {
                    value: /^[1-4]{1}$/,
                    message: "Enter a numeric value only from (1-4)",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member2_year" as="span" />
    </label>
</div>

Member 3
<h3>Member 3</h3>
<div className={styles.box_3}>
    <label>
        Name
        <input
            placeholder="Enter The Name"
            {...register("member3_name", {
                pattern: {
                    value: /^[a-zA-Z][a-zA-Z ]+$/,
                    message: "Alphabetical characters only",
                },
            })}
        />
        <ErrorMessage errors={errors} name="member3_name" as="span" />
    </label>

    <label>
        Registration Number
        <input
            placeholder="Enter The Registration Number"
            {...register("member3_regno", {
                pattern: {
                    value: /^(RA)[0-9]{13}$/,
                    message:
                        "Enter valid Registration Number starting with capital 'RA'",
                },
            })}
      */
}

export default RegistrationForm;
