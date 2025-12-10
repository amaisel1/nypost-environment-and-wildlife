d3.csv("Environment_Wildlife_Stories_Cleaned.csv")
  .then(function(data) {
      console.log("CSV loaded:", data.length + " rows");

      // Clean BOM + whitespace issues
      data.forEach(d => {
        d.headline = d.headline ? d.headline.trim().toLowerCase() : "";
        d.excerpt = d.excerpt ? d.excerpt.trim().toLowerCase() : "";
      });

      var button = d3.select("#button");
      var form = d3.select("#form");

      button.on("click", event => {
          event.preventDefault();
          runEnter();
      });

      form.on("submit", event => {
          event.preventDefault();
          runEnter();
      });

      function runEnter() {
          d3.select("tbody").html(""); 

          var inputValue = d3.select("#user-input").property("value").toLowerCase().trim();

          var filtered = inputValue ?
              data.filter(d => d.headline.includes(inputValue)) :
              data;

          for (var i = 0; i < filtered.length; i++) {
              d3.select("tbody").append("tr").html(
                  "<td>" + (i+1) + "</td>" +
                  "<td>" + filtered[i]['headline'] + "</td>" +
                  "<td>" + filtered[i]['excerpt'] + "</td>" +
                  "<td>" + filtered[i]['display_date'] + "</td>"
              );
          }
      }

      runEnter();
  })
  .catch(function(error) {
      console.log("Error loading CSV:", error);
  });