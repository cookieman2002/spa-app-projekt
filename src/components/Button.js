import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Button = (props) => {
  const { isSwitch, setIsSwitch } = useContext(ThemeContext);

  return (
    <button onClick={() => setIsSwitch({ darkmode: !isSwitch.darkmode })}>
      {props.button}
    </button>
  );
};

export default Button;
