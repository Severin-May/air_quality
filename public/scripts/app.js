"use strict";

var _utils = require("./utils");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_validator2.default.isEmail("as"));
console.log((0, _utils.square)(4));

var template = React.createElement(
  "p",
  null,
  "Lalallala"
);
_reactDom2.default.render(template, document.getElementById("appRoot"));
