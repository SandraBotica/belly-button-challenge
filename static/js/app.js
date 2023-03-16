
let samples = {
    id=,
    otu_ids=,
    sample_values=,
    otu_labels=
};

console.log(samples.id);
console.log(samples.otu_ids);
console.log(samples.sample_values);
console.log(samples.otu_labels);

let xsamplevaluesData = [sample_values];
let yotuidsData = [otu_ids];
let idData = [id];
let otulabelsData = [otu_labels];

let trace1 = {
    x: xsamplevaluesData,
    y: yotuidsData,
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'bar',
    marker: {
        color: 'rgba(50,171,96,0.6)',
        line: {
          color: 'rgba(50,171,96,1.0)',
          width: 1
        }
      },
    name: idData,
    orientation: 'h'
  };
  
  let data = [trace1];
  
  let layout = {
    title: "Top 10 OTUs found in the individual",
    xaxis1: {
        range: [0, 278],
        domain: [0, 0.5],
        zeroline: false,
        showline: false,
        showticklabels: true,
        showgrid: true
      },
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
      plot_bgcolor: 'rgb(248,248,255)',
      annotations: [
        {
          xref: 'paper',
          yref: 'paper',
          x: -0.2,
          y: -0.109,
          text: 'OECD ' + '(2015), Household savings (indicator), ' + 'Household net worth (indicator). doi: ' + '10.1787/cfc6f499-en (Accessed on 05 June 2015)',
          showarrow: false,
          font:{
            family: 'Arial',
            size: 10,
            color: 'rgb(150,150,150)'
          }
        }
      ]
  };
  
  Plotly.newPlot("plot", data, layout);