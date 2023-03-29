const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
  console.log(data);
  // let metadata = data.metadata;
  // console.log(metadata);
  // let samples = data.samples;
  // console.log(samples);
  // let names = data.names;
  // console.log(names);
}).catch(function (error) {
  console.log(error);
});

function init() {

  //  Use D3 to select the dropdown menu element
  let dropdownMenu = d3.select("#selDataset");

  d3.json(url).then(function (data) {
    // console.log(data);

    let names = data.names;
    // console.log(names);

    for (let i = 0; i < names.length; i++) {
      dropdownMenu
        .append("option")
        .text(names[i])
        .property("value", names[i]);
    };
    firstName = names[0];
    buildTable(firstName);
  })
}
// init();


function optionChanged(sampleId) {
  buildTable(sampleId);
  drawBarChart(sampleId);
  // drawBubbleChart(sampleId);
};


function drawBarChart(sampleId) {
  d3.json(url).then((data) => {
    let samplesArray = data.samples;
    let samples = samplesArray.filter(sample => sample.id == sampleId);
    let firstSample = samples[0];
    let otuLabels = firstSample.otu_labels;
    let otuIds = firstSample.otu_ids;
    let sampleValues = firstSample.sample_values;
    // // Sort the data by sample_values descending
    let sortedSampleValues = sampleValues.sort((a, b) => b.sample_values - a.sample_values);
    // // Slice the first 10 objects for plotting
    slicedData = sortedSampleValues.slice(0, 10);

    // Bar chart
    let trace1 = [{
      x: otuIds,
      y: slicedData,
      text: otuLabels,
      type: "bar",
      orientation: 'h'
    }];
    let barData = [trace1];
    let barlayout = {
      title: "Bar Graph of OTU-Ids 10 Largest Sample Values"
    };
    
    d3.select("#bar");

    Plotly.newPlot("plot", barData, barlayout);
  })
};


// Build the sample Metadata Table
function buildTable(sampleId) {
  d3.json(url).then((data) => {
    let metadataArray = data.metadata;
    let metadata = metadataArray.filter(sample => sample.id == sampleId);
    let firstElement = metadata[0];
    let PANEL = d3.select("#sample-metadata")
    PANEL.html("");
    for (key in firstElement) {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${firstElement[key]}`);
    };
  })
};

init();









// function buildPlots(sampleId) {
//   d3.json(url).then((data) => {
//     console.log(data);
//     let samples = data.samples;
//     console.log(samples);
//     // let samplesArray = samples.filter(sampleObj => sampleObj.id == sampleId);
//     // let metadataArray = data.metadata.filter(sampleObj => sampleObj.id == sampleId);
//     // let result = samples[0];
//     // let metadataPlot = metadataArray[0];
//     let sample = samples[0];
//     console.log(sample);
//     let otuLabels = sample.otu_labels
//     let otuIds = sample.otu_ids
//     let sampleValues = sample.sample_values
//     // // Sort the data by sample_values descending
//     let sortedSampleValues = sampleValues.sort((a, b) => b.sample_values - a.sample_values);
//     // // Slice the first 10 objects for plotting
//     slicedData = sortedSampleValues.slice(0, 10);

//     // Bar chart
//     let trace1 = [{
//       x: otuIds,
//       y: slicedData,
//       text: otuLabels,
//       type: "bar",
//       orientation: 'h'
//     }];
//     let barData = [trace1];
//     let barlayout = {
//       title: "bar of sample values"
//     };

//     Plotly.newPlot("plot", barData, barlayout);

//     // Bubble chart
//     let desired_maximum_marker_size = 40;
//     let size = [];
//     let trace2 = [{
//       x: otuIds,
//       y: sampleValues,
//       text: otuLabels,
//       // text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
//       mode: 'markers',
//       marker: {
//         size: size,
//         //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
//         sizeref: 2.0 * Math.max(sampleValues) / (desired_maximum_marker_size**2),
//         sizemode: 'area',
//         color: otuIds
//         // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)']
//       }
//     }];

//     let bubbleData = [trace2];
//     let bubbleLayout = {
//       title: `Bubble Chart of Sample Values for OTU_id: ${otuIds}`,
//       showlegend: false,
//       height: 600,
//       width: 600
//     };
//     Plotly.newPlot('myDiv', bubbleData, bubbleLayout);
//   })
// };

// // function init() {
//   // On change to the DOM, call getData()
// d3.select("#selDataset").onchange("optionChanged(this.value)", getData);
// d3.select("#sample-metadata.panel-body").onchange("optionChanged(this.value)", getData);
// d3.select("#bar").onchange("optionChanged(this.value)", getData);
// d3.select("#bubble").onchange("optionChanged(this.value)", getData);
// // .on("click", function(){
//     // let button = d3.select(this);
//     // let subjectIdNo = parseInt(button.attr('value'));
//     // let currentIdNo = parseInt(counter.text());
//     // currentIdNo += subjectIdNo;
//     // counter.text(currentIdNo);
// // })
// // };



// let trace1 = {
//   x: samples.sample_values[0],
//   y: samples.otu_ids[0],
//   type: "bar"
// };

// let barData = [trace1];
// let layout = {
//   title: "bar of sample values"
// };

// Plotly.newPlot("plot", barData, layout);






// // Sort the data by sample_values descending
// let sortedSampleValues = data.sort((a, b) => b.sample_values - a.sample_values);

// // Slice the first 10 objects for plotting
// slicedData = sortedSampleValues.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // Display the default plot
// function init() {
//   let data = [{
//   x: sampleOtuIds,
//   y: sampleSampleValues,
//   text: sampleOtuLabels,
//   type: "bar",
//   marker: {
//     color: 'rgba(50,171,96,0.6)',
//     line: {
//       color: 'rgba(50,171,96,1.0)',
//       width: 1
//     }
//   },
//   name: "OTUs Sample Values",
//   orientation: "h"
//   }];

//   let layout = {
//     title: "Top 10 OTUs Sample Values",
//     legend: {
//       x: 0.029,
//       y: 1.238,
//       font: {
//         size: 10
//       }
//     },
//     margin: {
//       l: 100,
//       r: 20,
//       t: 200,
//       b: 70
//     },
//     width: 600,
//         height: 600,
//         paper_bgcolor: 'rgb(248,248,255)',
//         plot_bgcolor: 'rgb(248,248,255)'
//   };

//   Plotly.newPlot("bar", data, layout);
// }



// see activity 10 lesson 3 of 14-Interactive_Visualisation


// // Trace1 for the sample_values Data
// let trace1 = {
//   x: reversedData.map(object => object.sample_values),
//   y: reversedData.map(object => object.otu_ids),
//   text: reversedData.map(object => object.otu_labels),
//   type: "bar",
//   marker: {
//     color: 'rgba(50,171,96,0.6)',
//     line: {
//       color: 'rgba(50,171,96,1.0)',
//       width: 1
//     }
//   },
//   name: "OTUs Sample Values",
//   orientation: "h"
// };

// // Data array
// // `data` has already been defined, so we must choose a new name here:
// let traceData = [trace1];

// // Apply a title to the layout
// let layout = {
//   title: "Top 10 OTUs Sample Values",
//   legend: {
//     x: 0.029,
//     y: 1.238,
//     font: {
//       size: 10
//     }
//   },
//   margin: {
//     l: 100,
//     r: 20,
//     t: 200,
//     b: 70
//   },
//   width: 600,
//       height: 600,
//       paper_bgcolor: 'rgb(248,248,255)',
//       plot_bgcolor: 'rgb(248,248,255)'
// };

// // Render the plot to the div tag with id "plot"
// // Note that we use `traceData` here, not `data`
// Plotly.newPlot("plot", traceData, layout);
// Plotly.newPlot("plot", [trace1], layout);


// // Bubble chart
// let desired_maximum_marker_size = 40;
// let size = [];
// let trace2 = {
//   x: [data.map(object => object.otu_ids)],
//   y: [data.map(object => object.sample_values)],
//   text: [data.map(object => object.otu_labels)],
//   // text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
//   mode: 'markers',
//   marker: {
//     size: size,
//     //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
//     sizeref: 2.0 * Math.max(data.map(object => object.sample_values)) / (desired_maximum_marker_size**2),
//     sizemode: 'area',
//     color: [data.map(object => object.otu_ids)]
//     // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)']
//   }
// };

// let bubbleData = [trace2];

// let bubbleLayout = {
//   title: `Bubble Chart of Sample Values for OTU_id: ${data.map(object => object.otu_ids)}`,
//   showlegend: false,
//   height: 600,
//   width: 600
// };

// Plotly.newPlot('myDiv', bubbleData, bubbleLayout);

