import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormYup = () => {
  return (
    <form>
      <label>Name</label>
      <input type="text" />

      <label>Email</label>

      <input type="email" />

      <label>Message</label>
      <textarea name="" id="" cols="30" rows="10" maxLength="500"></textarea>
      <span>words left </span>

      <input type="submit" />
    </form>
  );
};

export default FormYup;
