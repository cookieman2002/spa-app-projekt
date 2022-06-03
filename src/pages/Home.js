/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Searchbar from "../components/Searchbar";
import Characterlist from "../components/Characterlist";

const styles = {
  characterlist_outer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
};

const Home = () => {
  const { inputText, setInputText } = Searchbar();

  return (
    <div css={styles.characterlist_outer}>
      <Characterlist input={inputText} />
    </div>
  );
};

export default Home;
