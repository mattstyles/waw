'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modTheme = exports.getGradient = exports.getColor = exports.getTheme = undefined;

var _fp = require('lodash/fp');

var toFixed = function toFixed(v) {
  return Number(v).toFixed(2);
};

var getTheme = exports.getTheme = function getTheme(key) {
  return (0, _fp.prop)('theme.' + key);
};
var getColor = exports.getColor = function getColor(key) {
  return getTheme('color.' + key);
};
var getGradient = exports.getGradient = function getGradient(key) {
  return getTheme('gradient.' + key);
};

// Assumes theme prop is a number and ensures it is fixed to 2dp
var modTheme = exports.modTheme = function modTheme(key, mod) {
  return function (props) {
    var v = (0, _fp.prop)('theme.' + key, props);
    return v ? toFixed(v * mod) : mod;
  };
};