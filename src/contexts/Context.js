import { createContext } from "react";

const ThemeContext = createContext({
    darkmode: false,
    light: "#ffff",
    dark: "#292929"

})

export default ThemeContext