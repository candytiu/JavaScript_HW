// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = data.filter(aliens => aliens.datetime === inputValue);
  console.log(filteredData);

  var tbody = d3.select("tbody");
  filteredData.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      })
});

  }
);

// // renderTable renders the tbody
function renderTable() {
  for (var i = 0; i < date.length; i++) {
    var aliens = data[i];
    var realAliens = Object.keys(aliens);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < realAliens.length; j++) {
      var varInput = areReal[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = aliens[varInput];
    }
  }
}

renderTable(); 