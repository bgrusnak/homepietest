'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppStore = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobx = require('mobx');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppStore = exports.AppStore = function () {
  (0, _createClass3.default)(AppStore, null, [{
    key: 'getInstance',
    value: function getInstance() {
      this.instance = this.instance || new AppStore();
      return this.instance;
    }
  }]);

  function AppStore() {
    (0, _classCallCheck3.default)(this, AppStore);

    var ap = {
      baseURL: "http://localhost:3001/api",
      timeout: 1000,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    };
    this.axios = _axios2.default.create(ap);
  }

  (0, _createClass3.default)(AppStore, [{
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(uri, params) {
        var _ref2, data, headers, status;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.axios.get(uri, {
                  params: params
                });

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                headers = _ref2.headers;
                status = _ref2.status;
                return _context.abrupt('return', data);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'postData',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(uri, body) {
        var _ref4, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.axios.post(uri, body);

              case 2:
                _ref4 = _context2.sent;
                data = _ref4.data;
                return _context2.abrupt('return', data);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function postData(_x3, _x4) {
        return _ref3.apply(this, arguments);
      }

      return postData;
    }()
  }, {
    key: 'putData',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(uri, body) {
        var _ref6, data;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.axios.put(uri, body);

              case 2:
                _ref6 = _context3.sent;
                data = _ref6.data;
                return _context3.abrupt('return', data);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function putData(_x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return putData;
    }()
  }, {
    key: 'deleteData',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(uri, params) {
        var _ref8, data;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.axios.delete(uri, {
                  params: params
                });

              case 2:
                _ref8 = _context4.sent;
                data = _ref8.data;
                return _context4.abrupt('return', data);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteData(_x7, _x8) {
        return _ref7.apply(this, arguments);
      }

      return deleteData;
    }()
  }]);
  return AppStore;
}();