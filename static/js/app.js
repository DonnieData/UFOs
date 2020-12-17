// import the data from data.js
const tableData = data;

// referrence the HTML table using d3
// use d3 to look for the <tbody> tags in html 
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear data - start with clean/empty table
    tbody.html("");


    //dataRow represents each object(row)
    data.forEach((dataRow) => {
        // find <tbody> and add new row -- each object row will be wrapped in a <tr> tag
        let row = tbody.append("tr");
    
        // loop through each field in dataRow and appending to table, wrapped in <td> tags
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            // holds only each vlaue from object 
            cell.text(val); 
            }
        );
    });
}