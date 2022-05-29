// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 for sophisticated dynamic graphics, part of javascript library
// declaring variable and look for the <tbody> tags in html
var tbody = d3.select("tbody");

// Create self contained code to reuse to fill the table with data only
function buildTable(data) {
  tbody.html("");

  // wrtie a forEach loop to interate through array for each row; use let for this block of code to add a table row to html
  data.forEach(dataRow)=> {
    let row = tbody.append("tr");
    // loop through data rows for table data; reference one object in array and values of one object per row
    // append a row and add value to each cell
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  }):
}

// Function to detect click for filter
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);