import React from "react";
import "./style.css"

function Header(props) {
  return (
    <div className="jumbotron instructions">
      <h1 className="text-center"> Clicky Game! </h1>
      <h3 className="text-center"> Click on an image to earn points, but don't click on any more than once!</h3>
      <h6 className="text-right"> Play it on Mobile <span role="img" aria-label="string" >😄</span>  </h6>
    </div>
  );
}

export default Header;