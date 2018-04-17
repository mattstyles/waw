'use strict';

var _react = require('@storybook/react');

var _ = require('./');

var React = require('react');

(0, _react.storiesOf)('icons', module).add('icons', function () {
  return React.createElement(
    'div',
    null,
    React.createElement(_.Icon, { icon: 'HOME' })
  );
});