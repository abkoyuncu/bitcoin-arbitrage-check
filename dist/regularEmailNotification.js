'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var runApp = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('basla');
                        _context.next = 3;
                        return (0, _common.bitstampToKoinim)();

                    case 3:
                        _context.next = 5;
                        return (0, _common.koinimToBitstamp)();

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function runApp() {
        return _ref.apply(this, arguments);
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

process.env.hourlyEmail = true;
setInterval(runApp, 10);

exports.default = regularEmailNotification;
//# sourceMappingURL=regularEmailNotification.js.map