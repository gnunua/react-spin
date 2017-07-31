'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = require('spin.js');

var _spin2 = _interopRequireDefault(_spin);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReactSpinner = (0, _createReactClass2.default)({
  displayName: 'ReactSpinner',

  propTypes: {
    config: _propTypes2.default.object,
    stopped: _propTypes2.default.bool
  },

  componentDidMount: function componentDidMount() {
    this.spinner = new _spin2.default(this.props.config);
    if (!this.props.stopped) {
      this.spinner.spin(this.refs.container);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.stopped === true && !this.props.stopped) {
      this.spinner.stop();
    } else if (!newProps.stopped && this.props.stopped === true) {
      this.spinner.spin(this.refs.container);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.spinner.stop();
  },

  render: function render() {
    return _react2.default.createElement('span', { ref: 'container' });
  }
});

exports.default = ReactSpinner;