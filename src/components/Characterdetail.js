/** @jsxImportSource @emotion/react */
import Usefetch from "../hooks/Usefetch";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Characterdetail = () => {
  const { isSwitch } = useContext(ThemeContext);
  const { id } = useParams();
  const { error, isPending, data } = Usefetch(
    "https://rickandmortyapi.com/api/character/" + id
  );
  const styles = {
    character: css`
      display: grid;
      gap: 10px;
      margin-top: 10px;
      margin-left: 10px;
      grid-template-areas:
        "a a b b"
        "a a b b"
        "c c c c"
        "c c c c";
      & div {
        background-color: ${isSwitch.darkmode ? "#2f3136" : "#d1d1d1"};
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 15px;
      }
    `,
    image: css`
      grid-area: a;
      & img {
        margin-top: 10px;
        border-radius: 50%;
      }
    `,
    details: css`
      grid-area: c;
      height: 500px;
      & h2 {
        margin-top: 10px;
      }
      & div {
        margin-top: 10px;
        gap: 40px;
        font-size: 20px;
      }
    `,
    info: css`
      grid-area: b;

      & h2 {
        margin-top: 10px;
      }
      & div {
        gap: 10px;
      }
    `,
  };
  return (
    <>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article css={styles.character}>
          <div css={styles.image}>
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <p>{data.status}</p>
          </div>
          <div css={styles.info}>
            <h2>Info</h2>
            <div>
              <p>Gender: {data.gender}</p>
              <p>Species: {data.species}</p>
            </div>
          </div>
          <div css={styles.details}>
            <h2>Details</h2>
            <div>
              <p>Dimension: {data.origin.name}</p>
              <p>Location: {data.location.name}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Characterdetail;
