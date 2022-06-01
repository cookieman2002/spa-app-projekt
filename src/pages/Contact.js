/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Contact = () => {
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
    title: css`
    color:white;
    `

  }
  return (
    <div>
      <h2 css={styles.title}>Contact</h2>
  <form css={styles.form}>
    <label>
      Name
    </label>
      <input type="text"/>
      <label>
      Email
    </label>
      <input type="email"/>

      <label>
        Message
      </label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <input type="button" value="submit"css={styles.button}/>
    
    </form>;

  </div>
    )
};

export default Contact;
