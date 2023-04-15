import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "../App.css";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray(props) {


const {inputLabel, placeholder,callback} = props
  const [inputKey, setInputKey] = React.useState("");
  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleKeywords = (e) => {
    setInputKey(e.target.value);
  };

  const handleAdd = () => {
    if (inputKey !== "")
      {
     chipData.push({ key: chipData.length, label: inputKey })
        setChipData(chipData);
     callback(inputLabel,chipData)}
     setInputKey("")
  };
  return (
    <div style={{  marginTop:"20px" }}>
    <label htmlFor="keyword">{inputLabel}</label>
      <div
        id="keyword"
        style={{
          display: "flex",
          // alignItems: "baseline",
          // justifyContent: "space-around",
        }}
      >
        <input
          className="keywordsInput"
          style={{
            background: "none",
            marginRight: '1rem',
            color: "white",
            width: "70%",
          }}
          onChange={handleKeywords}
          value={inputKey}
          type="text"
          placeholder={placeholder}
        />
        <Button  variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <Paper
        sx={{
          display: "flex",
          //   justifyContent: 'center',
          flexWrap: "wrap",
          listStyle: "none",
          width:"300px",
          m: 0,
          background: "none",
        }}
        component="ul"
      >
        {chipData.map((data) => {
          let icon;

          return (
            <ListItem key={data.key}>
              <Chip
                color="primary"
                icon={icon}
                label={data.label}
                variant="outlined"
                sx={{ fontSize: "1.5rem" }}
                onDelete={
                 handleDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Paper>
    </div>
  );
}
