"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.koinimToBitstamp = exports.bitstampToKoinim = exports.getBidAskDataWallet = undefined;

var getBidAskDataWallet = exports.getBidAskDataWallet = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, returnBid) {
    var response, returnData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get(url);

          case 2:
            response = _context.sent;
            returnData = response.data;

            returnBid ? returnData = response.data.bid : returnData = response.data.ask;
            return _context.abrupt("return", returnData);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getBidAskDataWallet(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var bitstampToKoinim = exports.bitstampToKoinim = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var bitstampEuro, koinimTry, convertedTry, profitRate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _index.getBidEuroBitStamp)();

          case 2:
            bitstampEuro = _context2.sent;
            _context2.next = 5;
            return (0, _index2.getAskTryKoinim)();

          case 5:
            koinimTry = _context2.sent;
            _context2.next = 8;
            return (0, _currencyConversions.convertTryToEuro)(koinimTry);

          case 8:
            convertedTry = _context2.sent;


            conseole.log(bitstampEuro, ' ', koinimTry, ' ', convertedTry);
            _context2.next = 12;
            return checkArbitrageRate(bitstampEuro, convertedTry);

          case 12:
            profitRate = _context2.sent;
            _context2.next = 15;
            return notificationServices(profitRate, 'Bitstamp', 'Koinim');

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function bitstampToKoinim() {
    return _ref2.apply(this, arguments);
  };
}();

var koinimToBitstamp = exports.koinimToBitstamp = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var bitstampEuro, koinimTry, convertedTry, profitRate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _index.getAskEuroBitStamp)();

          case 2:
            bitstampEuro = _context3.sent;
            _context3.next = 5;
            return (0, _index2.getBidTryKoinim)();

          case 5:
            koinimTry = _context3.sent;
            _context3.next = 8;
            return (0, _currencyConversions.convertTryToEuro)(koinimTry);

          case 8:
            convertedTry = _context3.sent;


            conseole.log(bitstampEuro, ' ', koinimTry, ' ', convertedTry);
            _context3.next = 12;
            return checkArbitrageRate(bitstampEuro, convertedTry);

          case 12:
            profitRate = _context3.sent;
            _context3.next = 15;
            return notificationServices(profitRate, 'Koinim', 'Bitstamp');

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function koinimToBitstamp() {
    return _ref3.apply(this, arguments);
  };
}();

var checkArbitrageRate = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(buyingWallet, sellingWallet) {
    var percentage, diff;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            percentage = 0;

            if (buyingWallet > sellingWallet) {
              diff = buyingWallet - sellingWallet;

              percentage = Math.floor(diff / buyingWallet * 100);
            }
            return _context4.abrupt("return", percentage);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function checkArbitrageRate(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var notificationServices = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(rate, from, to) {
    var messageBody;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            messageBody = "Current profit rate from " + from + " to " + to + " is % " + rate;

            if (!process.env.hourlyEmail) {
              _context5.next = 4;
              break;
            }

            _context5.next = 4;
            return (0, _utils.sendEmail)(messageBody);

          case 4:
            if (!(rate > _config2.default.thresholdPercentage)) {
              _context5.next = 11;
              break;
            }

            messageBody = "ATTENTION!! " + messageBody;
            _context5.next = 8;
            return (0, _utils.sendEmail)(messageBody, subject);

          case 8:
            if (!process.env.sms) {
              _context5.next = 11;
              break;
            }

            _context5.next = 11;
            return (0, _utils.sendNexmoSms)(messageBody);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function notificationServices(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

var _utils = require("./utils");

var _index = require("./bitstamp/index.js");

var _index2 = require("./koinim/index.js");

var _currencyConversions = require("./currencyConversions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=common.js.map