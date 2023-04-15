import React, { useState, useRef, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import "../App.css";
import Flip from "react-reveal/Flip";
import { preloader } from "../asset/Loader";
import svg from "../asset/AI.svg";
import Footer from "./Footer";
import converToTable from "../utility/Tableformat";
import StringToExcel from "./ExcelFormat";
import SideControls from "./SideControls";
import { FlowLogo } from "../asset/SVG";
import StringToJson from "./JSonFormat";
import ScreenContainer from "./ScreenContainer";
import Tableformat from "./TableFormat";
import Button from "@mui/material/Button";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
function AskMe() {
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [format, setFormat] = useState("Table");
  const [ask, setAsk] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);
  const [loader, setLoader] = useState(false);
  const configuration = new Configuration({
    apiKey: "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",
  });

  let catStr = "";
  let headerStr = "";
  for (let i = 0; i < dataCategory.length; i++) {
    catStr += dataCategory[i].label + ",";
  }

  for (let i = 0; i < columnHeaders.length; i++) {
    headerStr += columnHeaders[i].label + ",";
  }

  console.log("stringss,", catStr, headerStr);
  let prompt = `classify ${ask} data of ${catStr} type  into  ${headerStr} categories  into ${format} format   `;
  const openai = new OpenAIApi(configuration);
  const res = async () => {
    setLoader(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 260,
        temperature: 0,
        top_p: 1.0,
        n: 1,
      });
      response.data.choices[0].text !== "" && setLoader(false);
      let resp = JSON.stringify(response.data.choices[0].text);
      setImage(response.data.choices[0].text);
      console.log("ai response", resp);
    } catch (e) {
      setLoader(false);
      setImage("Please Refresh and Try Again...");
    }
  };

  const handleAsk = (e) => {
    setAsk(e.target.value);
  };

  const sendRequest = () => {
    res();
    setShow(true);
  };

  useEffect(() => {
    res();
  }, [format, catStr, headerStr]);

  const handleCallback = (form) => {
    // console.log("format", form);
    setFormat(form);
  };

  const handleKeywords = (label, input) => {
    if (label === "Input Data Category (Optional)") setDataCategory(input);
    else setColumnHeaders(input);
    // console.log("input keywords for", label,input);
  };

  const handleFilter = () => {
    res();
  };

  const inputEl = useRef(null);

  return (
    <>
      <div
        className="dImage"
        style={{ padding: "20px", flexWrap: "wrap", margin: " auto" }}
      >
        {/* <img src={svg} style={{ width: "50%", }} /> */}

        <div style={{ margin: "5 0px" }}>
          {/* <Flip left cascade duration={2000}> */}
          <h1 style={{ fontWeight: "bold" }}>Boost Your Productivity.</h1>
          <h4>Paste or Type Your Scrambbled Text in below Input !</h4>
          {/* </Flip> */}
          <div
            style={{
              // display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "90px auto",

              width: "fit-content",
            }}
          >
            {/* <div
              style={{
                border: "1px dashed white",
                padding: "10px",
                margin: "20px 0",
                borderRadius: "7px",
              }}
            >
              <input
                accept="image/*"
                ref={inputEl}
                // className={classes.input}
                style={{ display: "none", width: "100%" }}
                id="raised-button-file"
                type="file"
              />
              <label
                htmlFor="raised-button-file"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "auto 30%",
                }}
              >
                <AddPhotoAlternateOutlinedIcon
                  style={{ width: "50px", height: "50px" }}
                />
            
                <span style={{ padding: "0 5px" }}>Upload Image Here</span>
    
              </label>
              <p>{inputEl.current !== null && inputEl.current.files[0]}</p>
            </div>
     */}
            <textarea
              placeholder={"Paste or Type here...."}
              type="search"
              onChange={handleAsk}
              style={{
                background: "transparent",
                color: "white",
                // height: "100%",
                padding: "10px",
                width: "100%",
                margin: "20px 0",
                // resize: "none",
              }}
              rows="22"
              cols="50"
            />
            <button
              onClick={sendRequest}
              disabled={ask ? false : true}
              style={{ margin: "20px", background: "white" }}
              type="submit"
            >
              Classify
            </button>
          </div>
          {show && (
            <div className="chat-gpt-container">
              <ScreenContainer
                use="accordian"
                callback={handleCallback}
                callbackKeywords={handleKeywords}
              />
              <div
                className="sidecontrols"
                style={{
                  border: "1px solid grey",
                  margin: "auto",
                  color: "white",
                  // padding: "20px",
                  display: "flex",
                  overflowX: "hidden",
                  flexWrap: "wrap",
                }}
              >
                {/* <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  // overflowY: "scroll",
                  margin: "20px auto",
                  // width: "70%",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
             
                </div>  */}
                {/* <div className="sidecontrol-large"> */}
                <SideControls
                  callback={handleCallback}
                  callbackKeywords={handleKeywords}
                  callbackFilter={handleFilter}
                />
                {/* </div> */}

                <div
                  style={{
                    margin: "10px auto",
                    boxShadow: "none",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    overflow: "auto",
                    padding: "10px",
                  }}
                >
                  <p>Your Clean Data Here</p>
                  {loader ? (
                    preloader
                  ) : (
                    <div
                      id="div1"
                      style={{
                        whiteSpace: "pre-line",
                        color: "white",
                      }}
                    >
                      {format === "Table" && <Tableformat string={image} />}
                      {format === "Excel" && <StringToExcel string={image} />}
                      {format === "JSON" && <StringToJson string={image} />}
                      <div></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AskMe;
