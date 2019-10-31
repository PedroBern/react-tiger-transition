if (process.env.NODE_ENV === "test") {
  module.exports = {
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
      ],
      "presets": [
        "@babel/preset-react",
        ["@babel/preset-env", {"useBuiltIns": false}]
      ]
  };
} else {
  module.exports = {
     "plugins": [
       "@babel/plugin-proposal-class-properties",
       ["babel-plugin-transform-react-remove-prop-types", {
        "removeImport": true,
        "ignoreFilenames": ["node_modules"]
      }]
     ],
     "presets": [
       "@babel/preset-react",
       ["@babel/preset-env", {loose: true}]
     ]
  };
}
