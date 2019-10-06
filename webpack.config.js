var path = require('path');
const src = path.join(__dirname, 'src');

module.exports = {
    devtool: 'sourcemap',

    entry: {
      "react-tiger-transition": path.join(src, 'index.js'),
    },

    output: {
      path: path.join(__dirname, 'lib'),
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      library: 'ReactTigerTransition',
      libraryTarget: 'umd',
    },

    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
      {
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
      },
      {
        "react-router-dom": {
            commonjs: "react-router-dom",
            commonjs2: "react-router-dom",
            amd: "ReactRouterDOM",
            root: "ReactRouterDOM"
        }
      },
      {
        "react-transition-group": {
            commonjs: "react-transition-group",
            commonjs2: "react-transition-group",
            amd: "ReactTransitionGroup",
            root: "ReactTransitionGroup"
        }
      }
    ],

    module : {
        rules : [
            {
              test : /\.(js)$/,
              loader:'babel-loader',
              include: src,
            },
            {
              test : /\.css$/,
              loader:['style-loader', 'css-loader'],
              include: src
            },
        ]
    },

   resolve: {
     modules: [
       src,
       'node_modules',
     ],
   },

  };
