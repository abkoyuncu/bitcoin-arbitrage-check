'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTryToEuro = undefined;

var checkEuroRateAgainstTry = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var lastEuroTryRate;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get(constants.currencyRates.eurToTry);

          case 2:
            lastEuroTryRate = _context.sent;
            return _context.abrupt('return', lastEuroTryRate.data.rates.TRY);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function checkEuroRateAgainstTry() {
    return _ref.apply(this, arguments);
  };
}();

var checkTryRateAgainstEuro = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var lastTryEuroRate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.get(constants.currencyRates.tryToEur);

          case 2:
            lastTryEuroRate = _context2.sent;
            return _context2.abrupt('return', lastTryEuroRate.data.rates.EUR);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function checkTryRateAgainstEuro() {
    return _ref2.apply(this, arguments);
  };
}();

var convertTryToEuro = exports.convertTryToEuro = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(turkishLira) {
    var currentRate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return checkEuroRateAgainstTry();

          case 2:
            currentRate = _context3.sent;
            return _context3.abrupt('return', turkishLira / currentRate);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function convertTryToEuro(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=currencyConversions.js.map