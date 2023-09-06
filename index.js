



// Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);
 google.charts.setOnLoadCallback(drawChart1);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   var data = google.visualization.arrayToDataTable([
    ['Color', 'Number of answers'],
    ['Green', 2],     
    ['Blue', 3],     
    ['Red', 1],
    ['Purple', 2],
    ['Orange', 3],
    ['Yellow', 4],
    ['Gray', 1],
    ['Violet', 1],
    ['Black', 2],
   
 ]);

   // Set chart options
   var options = {title:'What is you favorite color?',
                  pieHole: 0.4,
                width: 500,
                height: 500,
                slices: {
                    0: { color: 'green' },
                    1: { color: 'blue'},
                    2: { color: 'red' },
                    3: { color: 'purple' },
                    4: { color: 'orange' },
                    5: { color: 'yellow' },
                    6: { color: 'gray' },
                    7: { color: 'violet' },
                    8: { color: 'black' },

                  },
                };

                

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }

 function drawChart1() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
     ['Number of siblings', 'Number of answers'],
     ['One', 2],     
     ['Two', 3],     
     ['Three', 1],
     ['Four', 2],
     ['Five', 3],
     ['Zero', 4],
    
  ]);
 
    // Set chart options
    var options = {title:'How many pets do you have?',
                   pieHole: 0.4,
                 width: 500,
                 height: 500,
                 slices: {
                     0: { color: '#B0BEC5' },
                     1: { color: '#90A4AE'},
                     2: { color: '#607D8B' },
                     3: { color: '#546E7A' },
                     4: { color: '#455A64' },
                     5: { color: '#37474F' },
 
                   },
                 };
 
                 
 
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
  }

  Handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});