import React from "react";
// import { logo, logoOrange } from "../SVG's/svg";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { FlowLogo } from "../asset/SVG";

function Logo() {
//   const toggled = useSelector((state) => state.Counter.themeToggle);
//   const Navigate = useNavigate();
  return (
    <>
      <div
        // onClick={() => Navigate("/")}
        className="topNavLogo"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{width:"80px",height:"80px",   }}>{FlowLogo}</div>

        <div>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "4px",
              marginLeft: "5px",
              marginBottom: "0px",
            }}
          >
      Textly<span style={{color:"rgb(41,68,61)",backgroundColor:"white",padding:"7px",borderRadius:'3px'}}>AI</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Logo;
