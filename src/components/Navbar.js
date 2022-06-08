/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Searchbar from "./Searchbar";
import Language from "./Language";
import {ThemeContext} from "./contexts/Context"

const Navbar = () => {
  const [isClick, setClick] = useState(true);
  const {isSwitch, setIsSwitch} = useContext(ThemeContext)
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
    linkcolor: css`
    color: ${darkmode}
    `
  };
  return (
    <nav css={style.navbar}>
      <div>
        <Link to="home" css={style.logo}>
          Home
        </Link>
      </div>
      <Searchbar />
      <ul>
        <Link to="contact">
          {" "}
          <FeatherIcon icon="phone" width="20px" />{" "}
        </Link>
      </ul>
      <Language />
      <button     onClick={() => setClick(!isClick)}>
    {isClick ? "ON" : "OFF"}
  </button>
    </nav>
  );
};

export default Navbar;
