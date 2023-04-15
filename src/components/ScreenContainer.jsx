import React from "react";
import "./ChatGPTStyle.css";
import { FlowLogo } from "../asset/SVG";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SortIcon from "@mui/icons-material/Sort";
import SideControls from "./SideControls";
import Instruction from "./Instructions";

// function ScreenContainer({ data }) {
//   return (
//     <div className="chat-gpt-container">
//       <div className="chat-gpt-header">
//         <div
//           className="chat-gpt-avatar"
//           style={{ width: "80px", height: "80px" }}
//         >
//           {FlowLogo}
//         </div>
//         <div className="chat-gpt-title">Flow.AI</div>
//         {/* <button onClick={copyToClipboard}>Copy to clipboard</button> */}
//       </div>
//       <div className="chat-gpt-body">{data}</div>
//       <div className="chat-gpt-footer">
//         {/* <button onClick={convertStringToJson}>Convert to JSON</button> */}
//       </div>
//     </div>
//   );
// }

const anchorLinkStyle = {
  //   writingMode: "vertical-lr",
  color: "black",
  padding: "8px",
  border: "0.5px solid grey",
  borderLeft: "none",
  borderRadius: "0 6px 6px 0",
  margin: "10px 0",
  fontWeight: "lighter",
  letterSpacing: "4px",
};

const iconStyle = {
  width: "40px",
  height: "40px",
  color: "white",
  padding: "10PX",
};
function ScreenContainer(props) {
  const [expand, setExpand] = React.useState(false);
  const toggleAccordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div>
      <Accordion
        sx={{ margin: 0, padding: 0, boxShadow: "none", background: "none" }}
        expanded={expand}
      >
        <AccordionSummary
         
          expandIcon={<SortIcon style={iconStyle}      sx={{
            pointerEvents: "auto"
          }}
        onClick={toggleAccordion}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "#B7B78A",
            boxShadow: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <div className="chat-gpt-header">
            <div
              className="chat-gpt-avatar"
              style={{ width: "80px", height: "80px" }}
            >
              {FlowLogo}
            </div>
            <div className="chat-gpt-title">Flow.AI <Instruction /></div>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ margin: 0, padding: 0,color:"white" }}>
        <SideControls
         use={props.use}
                  callback={props.callback}
                  callbackKeywords={props.callbackKeywords}
                />
          {/* <SideControls use={props.use} callback={props.callback} /> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ScreenContainer;
