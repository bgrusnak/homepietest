'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _reactRouterDom = require('react-router-dom');

var _mobxReact = require('mobx-react');

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (_dec = (0, _mobxReact.inject)("store"), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Container,
        null,
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { style: { backgroundColor: '#2080FF' } },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { style: { color: 'white' }, to: '/' },
              'Pages'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '10' },
            this.props.children
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component)) || _class) || _class);
exports.default = App;