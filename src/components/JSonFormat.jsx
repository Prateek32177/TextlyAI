import React, { useState,useRef } from 'react';
import './ChatGPTStyle.css';
import { FlowLogo } from "../asset/SVG";
function StringToJson({string}) {;
  const [data, setData] = useState([]);

  // Handler function to convert the string to a JSON object
  const convertStringToJson = () => {
    // Split the string into rows using the new line escape character as the separator
    const rows = string.split('\n');

    // Loop through the rows and split each row into columns using the tab character as the separator
    const dataArray = rows.map(row => {
      const columns = row.split('\t');
      return { label: columns[0], value: columns[1] }
    });

    // Set the data state to the resulting array
    setData(dataArray);
  }




  return (
    <>
    {/* <div className="chat-gpt-container">
      <div className="chat-gpt-header">
      <div className="chat-gpt-avatar" style={{width:"80px",height:"80px"}}>{FlowLogo}</div>
        <div className="chat-gpt-title">Flow.AI</div>
        <button onClick={copyToClipboard}>Copy to clipboard</button>
      </div> */}
      <div className="chat-gpt-body" style={{    width: 'max-content'}}>
        {data.map((item, index) => (
          <div className="chat-gpt-message" key={index}>
            <div className="chat-gpt-label">{item.label}</div>
            <div className="chat-gpt-value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="chat-gpt-footer">
        <button onClick={convertStringToJson}>Convert to JSON</button>
       {/* {copySuccess} */}
      </div>
    {/* </div> */}
    </>
  );
}

export default StringToJson;
