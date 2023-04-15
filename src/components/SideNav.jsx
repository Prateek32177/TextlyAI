import React from "react";
import "../App.css";

const anchorLinkStyle = {
//   writingMode: "vertical-lr",
  color: "white",
  padding: "8px",
  border: "0.5px solid grey",
  borderLeft: "none",
  borderRadius: "0 6px 6px 0",
  margin: "10px 0",
  fontWeight:"lighter",
  letterSpacing:"4px"
};

function Sidenav() {
  return (

    <div className="sidenav">
           
      <a style={anchorLinkStyle}>About.</a>
      <a style={anchorLinkStyle}>Product.</a>
      <a style={anchorLinkStyle}>Experience.</a>
     
    </div> 
  );
}

export default Sidenav;
