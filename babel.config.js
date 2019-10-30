module.exports = {
  "env": {
    "commonjs": {
       "plugins": [
         "@babel/plugin-transform-runtime",
         "@babel/plugin-proposal-class-properties",
         ["babel-plugin-transform-react-remove-prop-types", {
          "removeImport": true,
          "ignoreFilenames": ["node_modules"]
        }]
       ],
       "presets": [
         "@babel/preset-react",
         ["@babel/preset-env", {"useBuiltIns": false}]
       ]
   },
   "es": {
      "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        ["babel-plugin-transform-react-remove-prop-types", {
         "removeImport": true,
         "ignoreFilenames": ["node_modules"]
       }]
      ],
      "presets": [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react",
      ]
    },
    "docs": {
      "presets": ["@babel/preset-react", "@babel/preset-env"],
      "plugins": ["@babel/plugin-proposal-class-properties"],
    }
   }
};
