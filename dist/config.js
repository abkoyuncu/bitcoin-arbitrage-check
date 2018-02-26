"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    smsCheckInterval: process.env.smsTime || 4000,
    thresholdPercentage: process.env.threshold || 7,
    emailCheckInterval: process.env.emailTime || 5000
};
//# sourceMappingURL=config.js.map