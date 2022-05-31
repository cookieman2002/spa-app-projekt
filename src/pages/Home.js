/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Usefetch from "../hooks/Usefetch";

const styles = {
  characterlist: css`
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    gap: 40px;
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  `,
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
    <>
      <div css={styles.characterlist}>
        {error && <div>{error}</div>}
        {isPending && <div> loading... </div>}
        {data &&
          data.results.map((character) => (
            <div key={character.id}>
              <img src={character.image} alt="" />
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.species}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
