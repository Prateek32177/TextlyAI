import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function StringToExcel({string}) {
//   const [string, setString] = useState("");

  // Handler function to convert the string to an Excel file
  const convertStringToExcel = () => {
    // Split the string into rows using the new line escape character as the separator
    const rows = string.split('\n');

    // Loop through the rows and split each row into columns using the tab character as the separator
    const data = rows.map(row => row.split(/[\t|]/));

    // Create a new workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the workbook as a file
    XLSX.writeFile(wb, 'data.xlsx');
  }

  return (
    <div>
      {/* <textarea value={string} onChange={e => setString(e.target.value)} /> */}
      <button onClick={convertStringToExcel}>Convert to Excel</button>
    </div>
  );
}

export default StringToExcel;
