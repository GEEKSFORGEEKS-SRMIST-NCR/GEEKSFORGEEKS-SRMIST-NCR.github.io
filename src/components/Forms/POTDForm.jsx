import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import styles from "styles/Form.module.css";
import Loader from "./Loader";

const POTDForm = ({ submitData, submitted, loading }) => {
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
        Title
        <input
          placeholder="Problem Title"
          {...register("title", {
            required: "This field is required",
          })}
        />
        <ErrorMessage errors={errors} name="title" as="span" />
      </label>
      <label>
        Link
        <input
          placeholder="Problem Link"
          {...register("url", {
            required: "This field is required",
          })}
        />
        <ErrorMessage errors={errors} name="url" as="span" />
      </label>
      <label>
        Date
        <input
          type="text"
          placeholder="Date"
          {...register("date", {
            required: "This field is required",
            
          })}
        />
        <ErrorMessage errors={errors} name="date" as="span" />
      </label>
      <label>
        Topic
        <input
          placeholder="Problem Topic"
          {...register("topic", {
            required: "This field is required",
          })}
        />
        <ErrorMessage errors={errors} name="topic" as="span" />
      </label>

            <button type="submit">
        {/* Slots Full  */}
        {submitted ? "Problem Added Successfully" : loading ? <Loader /> : "Add Problem"}
      </button>
    </form >
  );
};

export default POTDForm;
