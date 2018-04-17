'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseLineHeight = 1.6;
var baseFontSize = 1.4;

var shevy = new _shevyjs2.default({
  baseFontScale: 'minorThird',
  baseLineHeight: baseLineHeight,
  baseFontSize: baseFontSize + 'rem',
  proximity: true
});

var theme = exports.theme = {
  baseLineHeight: baseLineHeight,
  basePadding: 1.2,
  borderRadius: 3,

  baseIconSize: 4.4,
  baseIconTextSize: 1.6,

  layout: {
    headerHeight: 4.4,
    footerHeight: 4.4
  },

  transition: {
    main: 150,
    spin: 1250
  },

  type: _extends({
    fallback: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\', sans-serif;',
    main: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\', sans-serif;',
    heading: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\', sans-serif;',
    monospace: 'Source Code Pro, Consolas, monospace',

    onLightShadow: '0 1px rgba(0, 0, 0, 0.2)',

    size: {
      base: baseFontSize,
      small: 1.2,
      vsmall: 1.1
    },

    color: {
      main: _openColor2.default.gray[8],
      heading: _openColor2.default.gray[7]
    }

  }, (0, _lodash.pick)(shevy, ['body', 'content', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])),

  color: {
    primary: _openColor2.default.blue[5],
    primaryDark: _openColor2.default.blue[7],
    primaryLight: _openColor2.default.blue[4],
    header: _openColor2.default.gray[8],
    error: _openColor2.default.red[8],

    button: {
      primary: _openColor2.default.blue[5],
      primaryHover: _openColor2.default.blue[7],
      primarySelect: _openColor2.default.blue[8],
      transparent: 'transparent',
      transparentHover: 'rgba(0, 0, 0, 0.1)',
      transparentSelect: 'rgba(0, 0, 0, 0.4)',
      error: _openColor2.default.red[7],
      errorHover: _openColor2.default.red[8],
      errorSelect: _openColor2.default.red[9]
    }
  },

  gradient: {
    background: 'radial-gradient(\n      circle at 50% 90%,\n      rgba(0, 0, 0, 0.05) 0,\n      rgba(0, 0, 0, 0.3) 60%,\n      rgba(0, 0, 0, 0.4) 100%\n    )',
    backgroundSubtle: 'radial-gradient(\n      circle at 50% 90%,\n      rgba(0, 0, 0, 0.01) 0,\n      rgba(0, 0, 0, 0.1) 60%,\n      rgba(0, 0, 0, 0.15) 100%\n    )',
    primaryRadial: 'radial-gradient(\n      circle at 50% 90%,\n      ' + _openColor2.default.blue[5] + ' 0,\n      ' + _openColor2.default.blue[7] + ' 60%,\n      ' + _openColor2.default.blue[8] + ' 100%\n    )',
    primary: 'linear-gradient(30deg, ' + _openColor2.default.blue[8] + ', ' + _openColor2.default.blue[4] + ')',
    primaryShift: 'linear-gradient(30deg, ' + _openColor2.default.cyan[5] + ', ' + _openColor2.default.blue[4] + ')',
    primaryLight: 'linear-gradient(30deg, ' + _openColor2.default.indigo[3] + ', ' + _openColor2.default.blue[7] + ')',
    primaryDark: 'linear-gradient(30deg, ' + _openColor2.default.violet[7] + ', ' + _openColor2.default.blue[8] + ')',
    blue: 'linear-gradient(30deg, ' + _openColor2.default.violet[5] + ', ' + _openColor2.default.blue[6] + ')',
    sunset: 'linear-gradient(30deg, ' + _openColor2.default.orange[3] + ', ' + _openColor2.default.red[7] + ' 75%)'
  }
};