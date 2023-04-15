import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ChipsArray from "./Keywords.jsx";
import Button from '@mui/material/Button';
import "../App.css";
function SideControls({ use,callback,callbackKeywords}) {
  const [view, setView] = React.useState("Table");

  const handleChange = (event) => {
    setView(event.target.value);
    callback(event.target.value);
  };

  const handleKeywords = (label,input)=>{
    callbackKeywords(label,input)
  }
  return (
    <div
      className={use==="accordian"?"sidecontrols":"sidecontrol-large sidecontrols"}
      style={{
        padding: "20px",
        border: "1px solid grey",
        textAlign: "left",
        overflowX:"scroll",
      }}
    >
      <label htmlFor="toggle">Select Output Format</label>
      <ToggleButtonGroup
        //  orientation="vertical"
        id="toggle"
        value={view}
        exclusive
        onChange={handleChange}
        sx={{ border: "1px solid white", color: "grey" }}
        color="info"
      >
        <ToggleButton
          sx={{ border: "1px solid white", color: "grey" }}
          value="Table"
          aria-label="Table"
        >
          Table
        </ToggleButton>
        <ToggleButton
          sx={{ border: "1px solid white", color: "grey" }}
          value="Excel"
          aria-label="Excel"
        >
          Excel
        </ToggleButton>
        <ToggleButton
          sx={{ border: "1px solid white", color: "grey" }}
          value="JSON"
          aria-label="JSON"
        >
          JSON
        </ToggleButton>
      </ToggleButtonGroup>
      <ChipsArray
        callback={handleKeywords}
        inputLabel="Input Data Category (Optional)"
        placeholder="Type probable Keywords here like food menu, sports, education.. "
      />
      <ChipsArray
        callback={handleKeywords}
        inputLabel="Column Headers (Optional)"
        placeholder="Enter Column headers in which you want to classify your text "
      />
       {/* <Button variant="contained" >Classify with filters</Button> */}
    </div>
  );
}

export default SideControls;
