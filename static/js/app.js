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

  var date = filteredData.datetime;
  var city = filteredData.city;
  var state = filteredData.state;
  var country = filteredData.country;
  var shape = filteredData.shape;
  var durationMinutes = filteredData.durationMinutes;
  var comments = filteredData.comments;

  for (var i = 0; i < filteredData.length; i++) {
    var tbody = d3.select("tbody")
    var row = tbody.append("tr")
      row.append("td").text(`${date}`)
      row.append("td").text(`${city}`)
      row.append("td").text(`${state}`)       
      row.append("td").text(`${country}`)
      row.append("td").text(`${shape}`)
      row.append("td").text(`${durationMinutes}`)
      row.append("td").text(`${comments}`);
  }
  });

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