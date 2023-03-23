const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// samples.json Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
  let metadata = data.metadata;
  console.log(metadata);
  let samples = data.samples;
  console.log(samples);
  let names = data.names;
  console.log(names);
}).catch(function(error) {
  console.log(error); 
});

// function buildTable(sampleId) {
//   d3.json(url).then((data) => {
//     console.log('data; ', data);
//     let metadata = data.metadata;
//     console.log('metadata: ', metadata);
//     let metadataArray = data.metadata.filter(metadataObj => metadataObj.id == sampleId);
//     let metadataTable = metadataArray[0];

//   })

// };
function buildPlots(sampleId) {
  d3.json(url).then((data) => {
    console.log(data);
    let samples = data.samples;
    console.log(samples);
    // let samplesArray = samples.filter(sampleObj => sampleObj.id == sampleId);
    // let metadataArray = data.metadata.filter(sampleObj => sampleObj.id == sampleId);
    // let result = samples[0];
    // let metadataPlot = metadataArray[0];
    let sample = samples[0];
    console.log(sample);
    let otuLabels = sample.otu_labels
    let otuIds = sample.otu_ids
    let sampleValues = sample.sample_values
    // // Sort the data by sample_values descending
    // let sortedSampleValues = sampleValues.sort((a, b) => b.sample_values - a.sample_values);
    // // Slice the first 10 objects for plotting
    // slicedData = sortedSampleValues.slice(0, 10);

    let trace1 = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      type: "bar",
      orientation: 'h'
    };

    let barData = [trace1];
    let layout = {
      title: "bar of sample values"
    };

    Plotly.newPlot("plot", barData, layout);

  })

};

function init() {
 
};

function optionChanged(sampleId){
 buildPlots(sampleId)
};

init();





// Initialised arrays
// let metadataId = Object.values(data.metadata.id);
// let metadatEthnicity = Object.values(data.metadata.ethnicity);
// let metadataGender = Object.values(data.metadata.gender);
// let metadataAge = Object.values(data.metadata.age);
// let metadataLocation = Object.values(data.metadata.location);
// let metadataBbtype = Object.values(data.metadata.bbtype);
// let metadataWfreq = Object.values(data.metadata.wfreq);

// let sampleId = Object.values(data.samples.id);
// let sampleOtuIds = Object.values(data.samples.otu_ids);
// let sampleSampleValues = Object.values(data.samples.sample_values);
// let sampleOtuLabels = Object.values(data.samples.otu_labels);

// let metadataId = [];
// let metadatEthnicity = [];
// let metadataGender = [];
// let metadataAge = [];
// let metadataLocation = [];
// let metadataBbtype = [];
// let metadataWfreq = [];
// let sampleId = [];
// let sampleOtuIds = [];
// let sampleSampleValues = [];
// let sampleOtuLabels = [];

// // For loop to populate arrays
// for (let i = 0; i < data.length; i++) {
//   row = data[i];
//   // metadataId.push(row.metadata.id);
//   // metadatEthnicity.push(row.metadata.ethnicity);
//   // metadataGender.push(row.metadata.gender);
//   // metadataAge.push(row.metadata.age);
//   // metadataLocation.push(row.metadata.location);
//   // metadataBbtype.push(row.metadata.bbtype);
//   // metadataWfreq.push(row.metadata.wfreq);
//   sampleId.push(row.samples.id);
//   sampleOtuIds.push(row.samples.otu_ids);
//   sampleSampleValues.push(row.samples.sample_values);
//   sampleOtuLabels.push(row.samples.otu_labels);
// };
// console.log(row);





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

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// see activity 10 lesson 3 of 14-Interactive_Visualisation

// // Sort the data by sample_values descending
// let sortedSampleValues = data.sort((a, b) => b.sample_values - a.sample_values);

// // Slice the first 10 objects for plotting
// slicedData = sortedSampleValues.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

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



// // create metadata table
// let table = {
//   type: 'table',
//   columnwidth: [300],
//   columnorder: [0],
//   header: {
//     values: "Demographic Info",
//     align: "center",
//     line: {width: 1, color: 'rgb(50, 50, 50)'},
//     fill: {color: ['rgb(0, 0, 255)']},
//     font: {family: "Arial", size: 11, color: "black"}
//   },
//   cells: {
//     values: (row.metadata),
//     align: ["left"],
//     line: {color: "black", width: 1},
//     fill: {color: ['white']},
//     font: {family: "Arial", size: 10, color: ["black"]}
//   },
//   xaxis: 'x',
//   yaxis: 'y',
//   domain: {x: [0,0.4], y: [0,1]}
// }