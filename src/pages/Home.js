/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Usefetch from "../hooks/Usefetch";

const styles = {
  characterlist: css`
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    gap: 40px;
    
    margin-top: 20px;
    margin-bottom: 20px;
    
    & button{
      width: 40px;
    }

    & div {
      text-align: center;
    
      & a{
        color: white;
        text-decoration: none;
      }
    }
  `,
  characterlist_outer: css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `,
  button: css`
  display: flex;
  gap: 40px;

  & button{
    background-color: white;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 17px;
    cursor: pointer;
  }
  `
};

const Home = () => {

  var page = 1;
  const { error, isPending, data } = Usefetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );

  if (isPending === false) {
    console.log(data);
  }
  return (
    <div css={styles.characterlist_outer}>
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
      <button>prev</button>
          <button >Next</button>
      </div>
    </div>
  );
};

export default Home;
