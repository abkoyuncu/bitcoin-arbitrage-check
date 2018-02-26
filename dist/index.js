'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smsAttentionNotification = undefined;

var smsAttentionNotification = exports.smsAttentionNotification = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setInterval(runApp, _config2.default.smsCheckInterval);

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function smsAttentionNotification() {
    return _ref.apply(this, arguments);
  };
}();

var runApp = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _common.bitstampToKoinim)();

          case 2:
            _context2.next = 4;
            return (0, _common.koinimToBitstamp)();

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function runApp() {
    return _ref2.apply(this, arguments);
  };
}();

// bid : satis
// ask : alis

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _common = require('./common.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// logger
app.use((0, _morgan2.default)('dev'));

setInterval(runApp, _config2.default.emailCheckInterval);

exports.default = app;
//# sourceMappingURL=index.js.map