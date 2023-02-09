import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Loader from "../Loader/Loader";
import "./Recruitment.css";

const RegistrationForm = ({ submitData, submitted, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(submitData)} className="registeration-form">
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
        Registeration Number
        <input
          placeholder="Enter Your College Registeration Number"
          {...register("regno", {
            required: "This field is required",
            pattern: {
              value: /^(RA)[0-9]{13}$/,
              message:
                "Enter valid Registeration Number starting with capital 'RA'",
            },
          })}
        />
        <ErrorMessage errors={errors} name="regno" as="span" />
      </label>

      <label htmlFor="year">Year</label>
      <div className="radio">
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
      <div className="box">
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

      <label>
        Team Name
        <input
          placeholder="Enter Your Team Name"
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

      <label>
        Team Leader
        <input
          placeholder="Enter Your Team Leader's Name"
          {...register("team_leader", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z][a-zA-Z ]+$/,
              message: "Alphabetical characters only",
            },
          })}
        />
        <ErrorMessage errors={errors} name="team_leader" as="span" />
      </label>

      <label>
        Team Members
        <input
          placeholder="Enter Your Team Members Names"
          {...register("team_members", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z][a-zA-Z ]+$/,
              message: "Alphabetical characters only",
            },
          })}
        />
        <ErrorMessage errors={errors} name="team_members" as="span" />
      </label>
      <button type="submit" disabled>
         Submissions will open tomorrow 
        {/* {submitted ? "Submitted Successfully" : loading ? <Loader /> : "Submit"} */}
      </button>
    </form>
  );
};

export default RegistrationForm;
