import React from "react";
import gibImage from "./img/gib2.png";

const HeaderStyle = {
  marginTop: "20px",
  marginLeft: "50px",

  marginBottom: "20px",

  paddingTop: "20px",
  paddingBottom: "0px",
};

const Header = () => {
  return (
    <div style={HeaderStyle}>
      <img src={gibImage} alt="Gib" width="150px" />
    </div>
  );
};

export default Header;
