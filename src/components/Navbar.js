/** @jsxImportSource @emotion/react */
import { css, ThemeProvider, useTheme } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
const Navbar = () => {
  const [isClick, setClick] = useState(true);
  var changer = true;
  const handleClick = () => {};

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
          color: black;
          font-weight: bold;
          text-decoration: none;
          font-size: 20px;
        }
      }
    `,
    logo: css`
      color: black;
      text-decoration: none;
      font-size: 25px;
      font-weight: bold;
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
        
        <Link to="contact"> <FeatherIcon icon="phone" width="20px"/> </Link>
      </ul>
      <button onClick={() => setClick(!isClick)}>
        {isClick ? "ON" : "OFF"}
      </button>
    </nav>
  );
};

export default Navbar;
