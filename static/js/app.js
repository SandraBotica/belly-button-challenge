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


// Bubble chart
let desired_maximum_marker_size = 40;
let size = [];
let trace2 = {
  x: [data.map(object => object.otu_ids)],
  y: [data.map(object => object.sample_values)],
  text: [data.map(object => object.otu_labels)],
  // text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
  mode: 'markers',
  marker: {
    size: size,
    //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
    sizeref: 2.0 * Math.max(data.map(object => object.sample_values)) / (desired_maximum_marker_size**2),
    sizemode: 'area',
    color: [data.map(object => object.otu_ids)]
    // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)']
  }
};

let bubbleData = [trace2];

let bubbleLayout = {
  title: `Bubble Chart of Sample Values for OTU_id: ${data.map(object => object.otu_ids)}`,
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('myDiv', bubbleData, bubbleLayout);

