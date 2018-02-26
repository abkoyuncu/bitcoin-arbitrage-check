'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = exports.sendNexmoSms = exports.sendSms = undefined;

var sendSms = exports.sendSms = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(smsText) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _request2.default.post("https://textbelt.com/text", {
              form: {
                phone: process.env.phone,
                message: smsText,
                key: "textbelt"
              }
            }, function (err, httpResponse, body) {
              if (err) {
                console.error("Error:", err);
                return;
              }
              console.log(JSON.parse(body));
            });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sendSms(_x) {
    return _ref.apply(this, arguments);
  };
}();

var sendNexmoSms = exports.sendNexmoSms = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(smsBody) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nexmo.message.sendSms('ABK', process.env.phone, smsBody);

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function sendNexmoSms(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var sendEmail = exports.sendEmail = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(mailBody) {
    var mail, emailData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mail = _nodeMailjet2.default.connect(_constants2.default.mailJet.apiKey, _constants2.default.mailJet.apiSecret);
            emailData = {
              'FromEmail': 'koyuncu.alibaki@gmail.com',
              'FromName': 'ABK-ARBITRAGE',
              'Subject': 'ARBITRAGE NOTIFICATION',
              'Text-part': mailBody,
              'Recipients': _constants2.default.emailRecipientList
            };

            mail.post('send').request(emailData);

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function sendEmail(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _nexmo = require('nexmo');

var _nexmo2 = _interopRequireDefault(_nexmo);

var _nodeMailjet = require('node-mailjet');

var _nodeMailjet2 = _interopRequireDefault(_nodeMailjet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var nexmo = new _nexmo2.default({
  apiKey: _constants2.default.nexmo.apiKey,
  apiSecret: _constants2.default.nexmo.apiSecret
});
//# sourceMappingURL=utils.js.map