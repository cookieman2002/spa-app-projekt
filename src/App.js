import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ThemeContext from "./contexts/Context";



function App() {

  

  const [isSwitch, setIsSwitch] = useState({
    darkmode: false,
    light: "#ffff",
    dark: "#292929"
  })

  return (
    <ThemeContext.Provider value= {{isSwitch, setIsSwitch}}>

    <div className={isSwitch.darkmode ? "darkmode": ""}>
      <Navbar />
      <Outlet />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
