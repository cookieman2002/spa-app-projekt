/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useForm } from "react-hook-form";

const Form = () => {
  const { isSwitch }  = useContext(ThemeContext)
  const styles = {
    button: css`
      width: 50%;
      cursor: pointer;
      color: ${isSwitch.darkmode ? "#ffff" : "#292929"};
    `,
    form: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      & div {
        color: ${isSwitch.darkmode ? "#ffff" : "#292929"};
      }
      & span {
        gap: 1px;
        color: ${isSwitch.darkmode ? "#ffff" : "#292929"};
        margin-left: 250px;
      }
      & label {
        color: ${isSwitch.darkmode ? "#ffff" : "#292929"};
      }
      & input {
        border-radius: 15px;
        border: none;
        height: 30px;
        width: 400px;
        background-color: ${isSwitch.darkmode ? "#2f3136" : "#f2f2f2"}
      }
      & textarea {
        border-radius: 15px;
        resize: none;
        font-size: 20px;
      }
    `,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const textareaRef = useRef();
  const [wordCount, setWordCount] = useState(500);
  const countWords = (e) => {
    const text = textareaRef.current.value;
    setWordCount(wordCount - text.split("").length);
  };
  return (
    <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        {...register("firstName", {
          required: true,
          maxLength: 747,
          minLength: 1,
        })}
      />
      {errors.firstName?.type === "required" && (
        <div>First name is required</div>
      )}
      {errors.firstName?.type === "maxLength" && (
        <div>Your name is too long</div>
      )}

      <label>Email</label>

      <input
        type="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          minLength: 3,
        })}
      />
      {errors.email?.type === "pattern" && <div> Your email is invalid</div>}
      {errors.email?.type === "required" && <div>email is required</div>}
      {errors.email?.type === "minLength" && <div>Your email is too short</div>}
      <label>Message</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        maxLength="500"
        ref={textareaRef}
        onChange={countWords}
        {...register("message", {
          required: true,
          minLength: 10,
          maxLength: 500,
        })}
      ></textarea>
      <span>words left {wordCount}</span>
      {errors.message?.type === "required" && <div>a message is required</div>}
      {errors.message?.type === "minLength" && (
        <div>Your message is too short</div>
      )}
      <input type="submit" css={styles.button} />
    </form>
  );
};

export default Form;
