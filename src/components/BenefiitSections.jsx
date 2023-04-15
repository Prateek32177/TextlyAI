import React from "react";

import Fade from "react-reveal/Fade";
export default function BenefitSection(props) {

    const {icon, tagLine, description} = props
  return (
    <>
      <Fade left cascade duration={2000}>
        <div
          style={{
            padding: "30px",
            width: "200px",
          }}
        >
          {icon}
         
          <br />
          <strong style={{ display: "block" }}>{tagLine}</strong>
          <p style={{ fontWeight: "lighter", color: "grey",paddingTop:"10px" }}>
            {description}
          </p>
       
        </div>
      </Fade>
    </>
  );
}
