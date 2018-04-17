'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalStyling = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    html {\n      font-size: 10px;\n    }\n    body {\n      margin: 0;\n      background: ', ';\n      color: ', ';\n      font-family: ', ';\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      display: flex;\n    }\n  '], ['\n    html {\n      font-size: 10px;\n    }\n    body {\n      margin: 0;\n      background: ', ';\n      color: ', ';\n      font-family: ', ';\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      display: flex;\n    }\n  ']);

var _icons = require('./icons');

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});

var _theme = require('./theme');

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});

var _styledComponents = require('styled-components');

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _index = require('./theme/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setGlobalStyling = exports.setGlobalStyling = function setGlobalStyling() {
  (0, _styledComponents.injectGlobal)(_templateObject, _openColor2.default.gray[0], _openColor2.default.gray[8], _index.theme.type.fallback);
};