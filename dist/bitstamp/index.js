'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAskEuroBitStamp = exports.getBidEuroBitStamp = undefined;

var getBidEuroBitStamp = exports.getBidEuroBitStamp = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var euroBid;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _common.getBidAskDataWallet)(_constants2.default.bitstamp.btceur, true);

          case 2:
            euroBid = _context.sent;
            return _context.abrupt('return', euroBid);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getBidEuroBitStamp() {
    return _ref.apply(this, arguments);
  };
}();

var getAskEuroBitStamp = exports.getAskEuroBitStamp = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var euroAsk;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _common.getBidAskDataWallet)(_constants2.default.bitstamp.btceur, false);

          case 2:
            euroAsk = _context2.sent;
            return _context2.abrupt('return', euroAsk);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getAskEuroBitStamp() {
    return _ref2.apply(this, arguments);
  };
}();

var _constants = require('../constants.js');

var _constants2 = _interopRequireDefault(_constants);

var _common = require('../common.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;

;
//# sourceMappingURL=index.js.map