// External Dependancies
const boom = require('boom');
const os = require('os');
const d3 = require('d3');
const fileDao = require('../model/File');
const fetch = require('node-fetch');
const config = require('../../config/config')

// Get single car by ID
exports.computeBalanceForFile = async (req, rep) => {
  try {
    
    // get data
    const id = req.params.id;
    const payload = await fileDao(id);

    // compute
    const reply = await fetch(config.systemApi.url + "/computeCashFlow", {
        method: 'post',
        body:    JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
    });

    // return
    const json = await reply.json();
    return json;

  } catch (err) {

    console.log(err);
    throw boom.boomify(err)
  }
}

