import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";



const Notfound = () => {
  return (
    <div>
      <h1>Sorry</h1>
      <FeatherIcon icon="frown" width="90" height="" />
      <p>the page is unavalible</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Notfound;
