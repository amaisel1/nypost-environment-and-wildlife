d3.csv("Environment_Wildlife_Stories_Cleaned.csv")
  .then(function(data) {
      console.log("CSV loaded:", data.length + " rows");

      // Clean BOM + whitespace issues
data.forEach(d => {
  d.original_headline = d.headline ? d.headline.trim() : "";
  d.original_excerpt = d.excerpt ? d.excerpt.trim() : "";

  d.search_headline = d.original_headline.toLowerCase();
  d.search_excerpt = d.original_excerpt.toLowerCase();
});


      var button = d3.select("#button");
      var form = d3.select("#form");

button.on("click", function() {
    d3.event.preventDefault();
    runEnter();
});

form.on("submit", function() {
    d3.event.preventDefault();
    runEnter();
});


function runEnter() {
  d3.select("tbody").html("");

  var inputValue = d3.select("#user-input").property("value").toLowerCase().trim();

  var filtered = inputValue
      ? data.filter(d => d.search_headline.includes(inputValue))
      : data;

  for (var i = 0; i < filtered.length; i++) {
      d3.select("tbody").append("tr").html(
          "<td>" + (i + 1) + "</td>" +
          "<td>" + filtered[i].original_headline + "</td>" +
          "<td>" + filtered[i].original_excerpt + "</td>" +
          "<td>" + filtered[i]['display_date'] + "</td>"
      );
  }
}

      runEnter();
  })
  .catch(function(error) {
      console.log("Error loading CSV:", error);
  });