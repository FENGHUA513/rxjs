var babel = require('rollup-plugin-babel')
var resolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var replace = require('rollup-plugin-replace')

var path = require('path')


module.exports = {
  input: path.resolve(__dirname, './index.js'),
  output: [
    {
      file: path.resolve(__dirname, './dist/index.js'),
      format: 'iife'
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
}