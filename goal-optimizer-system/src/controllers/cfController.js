// External Dependancies
const boom = require('boom');
const os = require('os');
const d3 = require('d3');

// Get single car by ID
exports.computeCashFlow = async (req, reply) => {
  try {
    
    console.log(req.body);
    

    return {
      data: computeData(srcData),
      keys: keys,
      _node: os.hostname()
    };
  } catch (err) {
    throw boom.boomify(err)
  }
}

const ASSET = "Assets"
const LIAB = "Liabilities"
const series = ["redDelicious", "mcintosh", "oranges", "pears"];

const srcData = [{
  type: ASSET,
  redDelicious: 10,
  mcintosh: 15,
  oranges: 9,
  pears: 6
},
{
  type: LIAB,
  redDelicious: 12,
  mcintosh: 18,
  oranges: 9,
  pears: 4
},
];

const ds = srcData.reduce((acc, item) => {
  acc[item.type] = item;
  return acc;
}, {});
const keys = Object.keys(ds).sort();

function computeData(data) {

  var i = 2;
  var colors = {}
  colors[LIAB] = {}
  colors[ASSET] = {}
  series.forEach(serie => {
      colors[LIAB][serie] = d3.schemeBlues[series.length + 3][i];
      colors[ASSET][serie] = d3.schemePurples[series.length + 3][i++];
  });

  var plotData = [];
  keys.forEach((type) => {
      var acc = 0;
      series.forEach((serie) => {
          var val = ds[type][serie] + Math.abs(Math.floor(Math.random() * 25));
          plotData.push({
              type: type,
              serie: serie,
              from: acc,
              to: acc + val,
              color: colors[type
              ][serie]
          });
          acc += val;
      })
  });

  var balance = plotData.reduce((acc, item) => {
      if (item.to > acc[item.type]) {
          acc[item.type] = item.to
      }
      return acc;
  }, { Assets: 0, Liabilities: 0 })

  if (balance[ASSET] > balance[LIAB]) {
      plotData.push({
          type: LIAB,
          serie: "balance_pos",
          from: balance[LIAB],
          to: balance[ASSET],
          color: d3.schemeGreens[5][4]
      });
  }

  if (balance[ASSET] < balance[LIAB]) {
      plotData.push({
          type: ASSET,
          serie: "balance_neg",
          from: balance[ASSET],
          to: balance[LIAB],
          color: d3.schemeReds[5][4]
      });
  }

  return plotData;
}


