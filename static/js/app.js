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
    drawBarChart(firstName);
  })
}

function optionChanged(sampleId) {
  buildTable(sampleId);
  drawBarChart(sampleId);
  // drawBubbleChart(sampleId);
};

let bar = d3.select("#bar");

function drawBarChart(sampleId) {
  d3.json(url).then((data) => {
    let samplesArray = data.samples;
    let samples = samplesArray.filter(sample => sample.id == sampleId);
    // console.log(samples)
    let firstSample = samples[0];
    console.log(firstSample);
    let otuLabels = firstSample.otu_labels;
    // console.log(otuLabels)
    let otu_ids = firstSample.otu_ids;
    // console.log(otuIds)
    let sampleValues = firstSample.sample_values;
    // console.log(sampleValues)
    // Sort the sample_values descending and slice the first 0 objects for plotting
    // let sampleValues = firstSample.sample_values.sort((a, b) => b.sample_values - a.sample_values).slice(0,10).reverse();
    // console.log(sampleValues)
    let sortedSampleValues = otu_ids.slice(0,10).map(otuIds =>`otu_id ${otuIds}`).reverse();
    // console.log(sortedSampleValues)
    // let sortedSampleValues = sampleValues.sort((a, b) => b.sample_values - a.sample_values);
    // console.log(sortedSampleValues)
    // // Slice the first 10 objects for plotting
    // slicedData = sortedSampleValues.slice(0, 10);
    // console.log(slicedData)

    // Bar chart
    let barData = [{
      x: sampleValues.slice(0,10).reverse(),
      y: sortedSampleValues,
      // text: sortedSampleValues,
      text: otuLabels.slice(0,10).reverse(),
      type: "bar",
      orientation: 'h',
      margin: {
        l: 100,
        r: 20,
        t: 200,
        b: 70
      },
      paper_bgcolor: 'rgb(248,248,255)',
      plot_bgcolor: 'rgb(248,248,255)',
      marker: {
        color: 'rgba(50,171,96,0.6)',
        line: {
          color: 'rgba(50,171,96,1.0)',
          width: 1
        }}
      }];
    let barlayout = {
      title: "Bar Graph of OTU-Ids 10 Largest Sample Values"
    };

    // let bar = d3.select("#bar");

    Plotly.newPlot("bar", barData, barlayout);


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




// see activity 10 lesson 3 of 14-Interactive_Visualisation




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

