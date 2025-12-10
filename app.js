d3.csv("Environment_Wildlife_Stories_Cleaned.csv").then(function(data) {

  var button = d3.select("#button");
  var form = d3.select("#form");

  // CLICK HANDLER
  button.on("click", (event) => {
    event.preventDefault();
    runEnter();
  });

  // FORM SUBMIT HANDLER
  form.on("submit", (event) => {
    event.preventDefault();
    runEnter();
  });

  function runEnter() {

    // Clear old results
    d3.select("tbody").html(""); 

    // Get user input
    var inputValue = d3.select("#user-input").property("value").toLowerCase();

    // Filter articles
    var filtered = data.filter(d => 
      d.headline && d.headline.toLowerCase().includes(inputValue)
    );

    // Loop through filtered results
    for (var i = 0; i < filtered.length; i++) {
      d3.select("tbody")
        .append("tr")
        .html(
          "<td>" + (i+1) + "</td>" +
          "<td>" + filtered[i]['headline'] + "</td>" + 
          "<td>" + filtered[i]['excerpt'] + "</td>" +
          "<td>" + filtered[i]['display date'] + "</td>"
        );
    }
  }

});