/** @jsxImportSource @emotion/react */
import Form from "../hooks/Form";
import { css } from "@emotion/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Contact = () => {
  const { isSwitch }  = useContext(ThemeContext)

  const styles = {
    title: css`
    color:${isSwitch.darkmode ? "#ffff" : "#292929"};
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
