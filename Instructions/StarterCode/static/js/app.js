//from data.js
var tableData = data;

// YOUR CODE HERE!
//Using the UFO dataset provided in the form of an array of JavaScript objects, 

//////////////////////////////////////////////////
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for `datetime`, `city`, `state`, `country`, `shape`, and `comment`


var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the tableData object
    var cell = tbody.append("td");
    cell.text(value);
   });
}); 

 //Use a date form in your HTML document and write JavaScript code
  //that will listen for events and search through the `date/time` 
  //column to find rows that match user input.

//select filterTable button
var filterTable = d3.select("#filter-btn");
filterTable.on("click", function() {

  //prevent page from refreshing
   d3.event.preventDefault();

    //select inputElement
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    //
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

});



//dateBtn.addEventListener("click", Date);
//cityBtn.addEventListener("click", City);
//stateBtn.addEventListener("click", State);
//countryBtn.addEventListener("click", Country);
//shapeBtn.addEventListener("click", Shape);
//durationBtn.addEventListener("click", Duration);
//commentsBtn.addEventListener("click", Comments);


