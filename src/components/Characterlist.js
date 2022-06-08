/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ThemeContext } from "../contexts/ThemeContext";
import Usefetch from "../hooks/Usefetch";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

const Characterlist = () => {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const number = (e) => {
    setCounter(() => e.target.value);
  };

  const { error, isPending, data } = Usefetch(
    `https://rickandmortyapi.com/api/character/?page=${counter}`
  );

  if (isPending === false) {
    
  }
  const { isSwitch }  = useContext(ThemeContext)

  const styles = {
    characterlist: css`
      display: grid;
      grid-template-columns: repeat(4, 0fr);
      gap: 40px;

      margin-top: 20px;
      margin-bottom: 20px;

      & button {
        width: 40px;
      }

      & div {
        text-align: center;
        

        & a {
          color: ${isSwitch.darkmode ? "#ffff" : "#292929"};
          text-decoration: none;
        }
      }
    `,
    button: css`
      display: flex;
      gap: 40px;

      & button {
        background-color: ${isSwitch.darkmode ? "#2f3136" : "#ced4da"};
        color: ${isSwitch.darkmode ? "#ffff" : "#292929"};
        border: none;
        border-radius: 20px;
        padding: 10px;
        font-size: 17px;
        cursor: pointer;
      }
    `,
  };

  return (
    <>
      <div css={styles.characterlist}>
        {error && <div>{error}</div>}
        {isPending && <div> loading... </div>}
        {data &&
          data.results.map((character) => (
            <div key={character.id}>
              <Link to={`/character/${character.id}`}>
                <img src={character.image} alt="" />
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
              </Link>
            </div>
          ))}
      </div>
      <div css={styles.button}>
        <button onClick={decrease}>Prev</button>
        <input
          type="number"
          name=""
          id=""
          onChange={number}
          max="42"
          
        />
        <button onClick={increase}>Next</button>
      </div>
    </>
  );
};

export default Characterlist;
