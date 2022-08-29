/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const Searchbar = () => {
  const styles = {
    form: css`
      & input {
        width: 150px;
        border-radius: 15px;
        border: none;
        padding: 10px;
        margin-right: 10px;
      }
    `,
  };
  const [ setInputText] = useState("");
  let inputHandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  };

  return (
    <>
      <form css={styles.form}>
        <input
          type="text"
          name=""
          placeholder="Search here"
          onChange={inputHandler}
        />
        <button type="submit">Search</button>
      </form>
      
    </>
  );
};

export default Searchbar;
