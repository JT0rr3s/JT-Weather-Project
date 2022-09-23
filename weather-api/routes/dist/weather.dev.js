"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _weatherController = require("../controllers/weatherController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.get("/", _weatherController.getWeatherHistory);
router.post("/", _weatherController.addWeatherHistory);
var _default = router;
exports["default"] = _default;