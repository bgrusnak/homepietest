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

var _reactRouterDom = require('react-router-dom');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = (_dec = (0, _mobxReact.inject)("store"), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h3',
              null,
              ' \u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0430\u043D\u0440\u043E\u0432 '
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'ul',
              { className: 'list' },
              _react2.default.createElement(
                'li',
                { className: 'list__item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/genre/house/' },
                  'House'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'list__item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/genre/dnb/' },
                  'Drum and bass'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'list__item' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/genre/hip-hop/' },
                  'Hip-hop'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return List;
}(_react.Component)) || _class) || _class);
exports.default = List;