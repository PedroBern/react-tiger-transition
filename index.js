"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-tiger-transition.min.js");
} else {
  module.exports = require("./cjs/react-tiger-transition.js");
}
