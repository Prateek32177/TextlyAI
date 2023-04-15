// Sample string containing new line escape characters
// const string = "\n\nCategory | Item\n--- | ---\nBat | Bat\nCheese | Cheese Ball\nCar | Car\nBrush | Brush";


export default function converToTable(string){
// Split the string into rows using the new line escape character as the separator
const rows = string.split('\n');

// Create a new table element
const table = document.createElement('table');

// Loop through the rows and split each row into columns using the tab character as the separator
rows.forEach(row => {
  const columns = row.split('\t');

  // Create a new row element
  const tableRow = table.insertRow();

  // Loop through the columns and add them to the row
  columns.forEach(column => {
    const tableCell = tableRow.insertCell();
    tableCell.textContent = column;
  });
});

// Add the table to the DOM
document.body.appendChild(table);

}

