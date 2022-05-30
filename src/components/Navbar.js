/** @jsxImportSource @emotion/react */
import { css, ThemeProvider, useTheme } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClicked] = useState("off");
  var changer = true;
  const handleClick = () => {
    changer = !changer;
    setClicked("on");
  };

  const style = {
    navbar: css`
      margin: 0 auto;
      align-items: center;
      padding: 20px;
      display: flex;

      border-bottom: 1px solid #f2f2f2;
      background-color: #f2f2f2;
      justify-content: space-between;
      border-radius: 15px;
      & form {
        & input {
          width: 150px;
          border-radius: 15px;
          border: none;
          padding: 10px;
          margin-right: 10px;
        }
      }

      & ul {
        display: flex;
        gap: 10px;

        & a {
          color: green;
        }
      }
    `,
    logo: css`
      color: black;
    `,
  };
  return (
    <nav css={style.navbar}>
      <div>
        <Link to="home" css={style.logo}>
          Home
        </Link>
      </div>
      <form>
        <input type="text" name="" placeholder="Search here" />
        <button type="submit">Search</button>
      </form>
      <ul>
        <Link to="News">News</Link>
        <Link to="contact">Contact</Link>
      </ul>
      <button onClick={handleClick}>{click}</button>
    </nav>
  );
};

export default Navbar;
