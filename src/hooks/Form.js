/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";

const Form = () => {
    const styles = {
        button: css`
        width: 50%;
        cursor: pointer;
        `,
        form: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        & label{
          color:white;
        }
        & input{
          border-radius:15px;
          border: none;
          height: 30px;
          width: 400px;
        }
        & textarea{
          border-radius:15px;
          resize: none;
          font-size: 20px;
        }
        `,
       }


       const { register, handleSubmit, formState: {errors} } = useForm()
       const onSubmit = data => console.log(data)
   
    return ( 
        <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <label>
      Name
    </label>
      <input type="text" {...register("firstName", {required: true, maxLength: 10})}/>
      {errors.firstName?.type === 'required' && <div>First name is required</div>}
      {errors.firstName?.type === 'maxLength' && <div>Your name is too long</div>}
      <label>
      Email
    </label>

      <input type="email" {...register("email", {required: true,  pattern: 
         /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
       })}/>
  {errors.email?.type === 'pattern' && <div> "Your email is invalid"</div>}
      <label>
        Message
      </label>
      <textarea name="" id="" cols="30" rows="10" {...register("Message")}></textarea>

      <input type="submit" css={styles.button}/>
    
    </form>
     );
}
 
export default Form;