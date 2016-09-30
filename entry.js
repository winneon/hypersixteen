'use strict'

// ES6 Setup
// import SourceMap from 'source-map-install'
// import HyperSixteen from './src/HyperSixteen'
// SourceMap.install()

// ES5 Setup
const SourceMap = require('source-map-support')
const HyperSixteen = require('./lib/HyperSixteen').default
SourceMap.install()

// Entry Point
let hyper = new HyperSixteen()
exports.decorateConfig = (config) => hyper.decorateConfig(config)
