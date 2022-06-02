import { useState } from "react";

const Button = () => {
    const [isClick, setClick] = useState(true);
    
    return ( <button onClick={() => setClick(!isClick)}>
    {isClick ? "ON" : "OFF"}
  </button> );
}
 
export default Button;