import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Loader from "../Loader/Loader";
import "./Registration.css";

const RegistrationForm = ({ submitData, submitted, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="registration-form"
      autoComplete="on"
    >
      {/* Team Name Box */}
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

      {/* Team Leader Details container */}
      <h2>Team Leader Details</h2>
      <div className="box">
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

      <div className="box">
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

      <div className="box">
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

      {/* Team Members Details */}
      <h2>Team Members Details</h2>

      {/* Member 1  */}
      <h3>Member 1</h3>
      <div className="box box_3">
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

      {/* Member 2  */}
      <h3>Member 2</h3>
      <div className="box box_3">
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

      {/* Member 3 */}
      <h3>Member 3</h3>
      <div className="box box_3">
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
          />
          <ErrorMessage errors={errors} name="member3_regno" as="span" />
        </label>
        <label>
          Year
          <input
            placeholder="Enter The Year"
            {...register("member3_section", {
              pattern: {
                value: /^[1-4]{1}$/,
                message: "Enter a numeric value only from (1-4)",
              },
            })}
          />
          <ErrorMessage errors={errors} name="member3_section" as="span" />
        </label>
      </div>

      <button type="submit" disabled={submitted}>
        {/* Submissions will open tomorrow */}
        {submitted ? "Submitted Successfully" : loading ? <Loader /> : "Submit"}
      </button>
    </form>
  );
};

export default RegistrationForm;
