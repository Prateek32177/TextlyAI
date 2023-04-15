import React,{useState,useEffect} from "react";
import Flip from "react-reveal/Flip";
import { FlowLogo1 } from "../asset/SVG";
import "../App.css"


export default function Overlay() {

    const [rend, setRend] = useState("block");
    useEffect(()=>{
      setTimeout(() => setRend("none"), 4000);
    },[])

  return (
    <>
      <div id="overlay" style={{ display: `${rend}` }}>
        <div id="text">
        <div style={{width:"170px",height:"120px"}}>{FlowLogo1}</div>
          <Flip duration={2000} top cascade>
            <h5
              style={{
                color: "white",
                letterSpacing: "3px",
              }}
            >
          TextlyAI.
            </h5>
          </Flip>
        </div>
      </div>
    </>
  );
}
