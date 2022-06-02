/** @jsxImportSource @emotion/react */
import Form from "../hooks/Form";
import { css } from "@emotion/react";

const Contact = () => {
  const styles = {
    title: css`
    color:white;
    `
  }

  
  return (
    <div>
      <h2 css={styles.title}>Contact</h2>
    <Form/>

  </div>
    )
};

export default Contact;
