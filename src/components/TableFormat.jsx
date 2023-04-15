
  // Handler function to convert the string to a table
const convertStringToTable = ({string}) => {
    // Split the string into rows using the new line escape character as the separator
    const rows = string.split('\n');

    // Create a new table element
    const tableRows = rows.map(row => {
      const columns = row.split('|');

      // Create a new row element
      const tableCells = columns.map(column => {
        return <td  style={{border:"1px solid #00a67d",padding:"15px"}}>{column}</td>
      });

      return <tr style={{border:"1px solid #00a67d",color:"#df3079"}}>{tableCells}</tr>
    });

    const table = (
      <table style={{border:'1px solid #00a67d',margin:'auto'}}>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );

    // Render the table
    return table;
  }

  export default convertStringToTable