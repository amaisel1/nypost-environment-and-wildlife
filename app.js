d3.csv("Environment_Wildlife_Stories_Cleaned.csv").then(function(data) {

  var button = d3.select("#button");
  var form = d3.select("#form");

  button.on("click", (event) => {
    event.preventDefault();
    runEnter();
  });

  form.on("submit", (event) => {
    event.preventDefault();
    runEnter();
  });

  function runEnter() {

    d3.select("tbody").html(""); 

    var inputValue = d3.select("#user-input").property("value");

    var filtered = data.filter(d => d.headline.includes(inputValue));

    for (var i = 0; i < output.length; i++) {
      d3.select("tbody").insert("tr").html(
        "<td>" + (i+1) + "</td>" +
        "<td>" + output[i]['headline'] + "</td>" + 
        "<td>" + output[i]['excerpt'] + "</td>" +
        "<td>" + output[i]['display date'] + "</td>"
      );
    }
  }

});