import React,{useState} from "react";
import Logo from "./Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";
const anchorLinkStyle = {
  //   writingMode: "vertical-lr",
    color: "white",
    padding: "8px",
    border: "0.5px solid grey",
    margin: "10px 0",
    fontWeight:"lighter",
    letterSpacing:"4px",
    textDecoration:'none'
  };
const anchorStyle = { padding: "20px", color: "white", letterSpacing: "2px" };
const iconStyle={width:"40px",height:'40px',color:"white",padding:"10PX"}
function Navbar() {
  return (
    <div   >
    <Accordion sx={{margin:0,padding:0,boxShadow:"none",background:"none"}} >
      <AccordionSummary
        expandIcon={<KeyboardDoubleArrowDownOutlinedIcon style={iconStyle}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{backgroundColor:"rgb(41,68,61)",boxShadow:"none",margin:0,padding:0}}
      >
       
       <Logo />
      </AccordionSummary>
      <AccordionDetails sx={{margin:0,padding:0}}>
      <div className="sidenav">
    <Link to="/" style={anchorLinkStyle}>Home.</Link>
    <Link to="/classify"  style={anchorLinkStyle}>Product.</Link>
    <Link to="/"  style={anchorLinkStyle}>Experience.</Link>
  </div>
      </AccordionDetails>
    </Accordion>
   
  </div>
  );
}

export default Navbar;

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "./styles.css"

// const anchorLinkStyle = {
//   //   writingMode: "vertical-lr",
//     color: "black",
//     padding: "8px",
//     border: "0.5px solid grey",
//     borderLeft: "none",
//     borderRadius: "0 6px 6px 0",
//     margin: "10px 0",
//     fontWeight:"lighter",
//     letterSpacing:"4px"
//   };
// export default function SimpleAccordion() {
//   return (
//     <div   >
//       <Accordion sx={{margin:0,padding:0}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           style={{backgroundColor:"rgb(41,68,61)"}}
//         >
         
//          <Logo/>
//         </AccordionSummary>
//         <AccordionDetails sx={{margin:0,padding:0}}>
//         <div className="sidenav">
//       <a style={anchorLinkStyle}>About.</a>
//       <a style={anchorLinkStyle}>Product.</a>
//       <a style={anchorLinkStyle}>Experience.</a>
//     </div>
//         </AccordionDetails>
//       </Accordion>
     
//     </div>
//   );
// }
