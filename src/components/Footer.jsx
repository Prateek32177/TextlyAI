import React from "react";
import "../App.css";


export default function Footer() {
  return (
    <div
      className="Footer"
      style={{
        color: "white",
        marginTop: "15rem",
        padding: "10px",
        fontSize: "smaller",
background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(24,46,43,1) 100%)'
      }}
    >
      <div style={{ display: "flex",alignItems:"center"}}>
        {" "}
        <hr style={{ color: "grey", width: "40%" }} />
        <p style={{letterSpacing:"7px",margin:"0 10px"}}>TextlyAI.</p>
        <hr style={{ color: "grey", width: "40%" }} />
      </div>
     {/* <hr style={{ color: "rgba(0,0,0,0.1)", width: "70vw" }} /> */}
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <a
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          name="About"
          style={{
            margin: "1rem",
            fontFamily: "sans-serif",
            textDecoration: "none",
            letterSpacing:"3px",
            color:"white"
          }}
        >
          {" "}
          About{" "}
        </a>{" "}
        &#x2022;
        <a
        href = "mailto: prateek56489@gmail.com"
          //      onClick={() =>
          //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          // }
          name="Contact"
          style={{
            margin: "1rem",
            fontFamily: "sans-serif",
            textDecoration: "none",
            letterSpacing:"3px",
            color:"white"
          }}
        >
          {" "}
          Contact Us{" "}
        </a>{" "}
        &#x2022;
        <a
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          name="Privacy"
          style={{
            margin: "1rem",
            fontFamily: "sans-serif",
            textDecoration: "none",
            letterSpacing:"3px",
            color:"white"

          }}
        >
          {" "}
          Privacy Policy
        </a>
      </div>
      <br></br>
      <div style={{ display: "inline-flex", alignItems: "end" }}>
        {/* <p>Copyright &#169; 2023 Prateek Jain </p> */}
        <a href="https://www.linkedin.com/in/prateek-jain-031106131/">
        </a>
      </div>
      <p style={{letterSpacing:"3px",fontWeight:"lighter"}}>Copyright &#169; 2023 | All Rights Reserved @ TextlyAI.</p>
    </div>
  );
}
