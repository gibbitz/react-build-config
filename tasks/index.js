#!/usr/bin/env node
const create = require('./create.js');

const utils = {
    create,
    default: (utilName) => {
        console.log(`${utilName} is not an available option. Please pass an appropriate argument...`)
    }
};

module.exports = ((utilName) => {
    if (utils[utilName]) {
        utils[utilName]()
    } else {
        utils.default(utilName)
    }
})(process.argv[2])
