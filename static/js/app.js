// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // samples.json Pending
// const dataSamples = d3.json(url);
// console.log("Data Samples: ", dataSamples);

// // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });

// Sort the data by sample_values descending
let sortedSampleValues = data.sort((a, b) => b.sample_values - a.sample_values);

// Slice the first 10 objects for plotting
slicedData = sortedSampleValues.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the sample_values Data
let trace1 = {
  x: reversedData.map(object => object.sample_values),
  y: reversedData.map(object => object.otu_ids),
  text: reversedData.map(object => object.otu_labels),
  type: "bar",
  marker: {
    color: 'rgba(50,171,96,0.6)',
    line: {
      color: 'rgba(50,171,96,1.0)',
      width: 1
    }
  },
  name: "OTUs Sample Values",
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Top 10 OTUs Sample Values",
  legend: {
    x: 0.029,
    y: 1.238,
    font: {
      size: 10
    }
  },
  margin: {
    l: 100,
    r: 20,
    t: 200,
    b: 70
  },
  width: 600,
      height: 600,
      paper_bgcolor: 'rgb(248,248,255)',
      plot_bgcolor: 'rgb(248,248,255)'
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
Plotly.newPlot("plot", [trace1], layout);

