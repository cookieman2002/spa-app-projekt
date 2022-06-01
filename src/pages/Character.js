/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import Usefetch from "../hooks/Usefetch";


const Character = () => {
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
    "c c c c"
    ;  
    & div{
      
      background-color: #D1D1D1;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 15px;

      
    }
    
    `,
    image: css`
    grid-area: a;
    & img{
      margin-top:10px;
      border-radius: 50%;
    }
    `,
    details: css`
    grid-area: c;
    height:500px;
    & h2 {
      margin-top: 10px;
    }
    & div{ 
      display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin-top: 10px;
    gap:90px;
    font-size: 20px;
    }
    `,
    info: css`
    grid-area: b;
    
    & h2 {
      margin-top: 10px;
    }
    & div{ 
      display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 10px;

    
    }
    `
    

  }
  const {id} = useParams()
  const {error, isPending, data} = Usefetch("https://rickandmortyapi.com/api/character/" + id)
  return <div>
    {isPending && <div>loading...</div>}
    {error && <div>{error}</div>}
    {data && ( <article css={styles.character}>
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

    </article>)}
  </div>;
};

export default Character;
