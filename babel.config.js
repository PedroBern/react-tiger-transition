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
