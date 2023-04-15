import React, { useState } from "react";
import "../components/Styles/Header.css";
import image from "../asset/images/Hero2.png";
import Sidenav from "./SideNav";
import Flip from "react-reveal/Flip";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Header() {
  const navigate = useNavigate();
  // Initialize deferredPrompt for use later to show browser install prompt.
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA

    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });

  const handleInstall = async () => {
    // Hide the app provided install promotion

    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
  };

  return (
    <div className={"slide"}>
      {/* <Sidenav/> */}
      <div className="App-header" id="header" style={{}}>
        <div
          style={{
            display: "flex",
            width: "80vw",
            alignItems: "center",
            flexWrap: "wrap",
            // margin: "100px 0px",
          }}
        >
          <div
            className="HerHeadingText"
            style={{ textAlign: "left", padding: "20px" }}
          >
            <h1 style={{ fontSize: "9.5vmin" }}>Get Smarter with TextlyAI.</h1>
            <h4>
     Transform your scrambled text into perfectly categorized, aligned, and sorted content.
            </h4>
            <p> Say goodbye to chaos and hello to clarity! !</p>

            <button
              onClick={() => navigate("/classify")}
              style={{ background: "white", marginRight: 10 }}
            >
              Get Started for Free
            </button>
            <button
              onClick={handleInstall}
              style={{ color: "white", marginRight: 10 }}
            >
              Install Web App
            </button>
          </div>

          <img src={image} alt="HeroImage" className="HomeImage"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
