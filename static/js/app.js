// import the data from data.js
const tableData = data;

// referrence the HTML table using d3
// use d3 to look for the <tbody> tags in html 
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear data - start with clean/empty table
    tbody.html("");


    //dataRow represents each object(row)
    // find <tbody> and add new row -- each object row will be wrapped in a <tr> tag
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
    
        // loop through each field in dataRow and appending to table, wrapped in <td> tags
        // holds only each vlaue from object
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); 
            cell.text(val); 
            }
        );
    });
}

// creating filters 

// handle what to do after click 
// look for #datetime id in html tags and grab the information("value") and hold it in the date variable 
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// on click execute handlebar function when #filter-btn is clicked
d3.selectAll("#filter-btn").on("click",handleClick)

// Build the table when the page loads
buildTable(tableData);