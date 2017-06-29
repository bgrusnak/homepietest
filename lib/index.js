'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _List = require('./components/List');

var _List2 = _interopRequireDefault(_List);

var _Page = require('./components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _NotFound = require('./components/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

require('./index.css');

require('bootstrap/dist/css/bootstrap.css');

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _mobxReact = require('mobx-react');

var _appStore = require('./stores/appStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _mobxReact.Provider,
  { store: _appStore.AppStore.getInstance() },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      _App2.default,
      null,
      _react2.default.createElement(
        _reactRouter.Switch,
        null,
        _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _List2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/page/:PAGEID', component: _Page2.default }),
        _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
      )
    )
  )
), document.getElementById('root'));
(0, _registerServiceWorker2.default)();