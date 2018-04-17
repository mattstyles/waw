'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('./icons');

var _utils = require('../theme/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var StyledIcon = _styledComponents2.default.i.withConfig({
  displayName: 'icon__StyledIcon'
})(['position:relative;display:block;width:', 'rem;height:', 'rem;svg{fill:', ';transition:fill ease-out ', 'ms;}:hover{svg{fill:', ';}}'], function (props) {
  return props.size || props.theme.baseIconSize;
}, function (props) {
  return props.size || props.theme.baseIconSize;
}, function (props) {
  return props.color || props.theme.type.color.main;
}, (0, _utils.getTheme)('transition.main'), function (props) {
  return props.hoverColor || (0, _utils.getColor)('primaryDark');
});

var Icon = exports.Icon = function Icon(_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      color = _ref.color,
      hoverColor = _ref.hoverColor;

  var svg = {
    __html: (0, _icons.getIcon)(icon)
  };

  return React.createElement(StyledIcon, _extends({ size: size, color: color, hoverColor: hoverColor }, {
    dangerouslySetInnerHTML: svg
  }));
};
Icon.defaultProps = {
  icon: '',
  size: null,
  color: '',
  hoverColor: ''
};
Icon.propTypes = {
  icon: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  color: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string
};