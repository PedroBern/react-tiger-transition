var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const node_modules = path.join(__dirname, './node_modules');
const src = path.join(__dirname, './src');
const parentSrc = path.join(__dirname, '../src')

// need to import styles of code mirror
const codeMirrorLib = path.join(__dirname, './node_modules/codemirror/lib')
const codeMirrorTheme = path.join(__dirname, './node_modules/codemirror/theme')
const reactTigerTransitionStyles = path.join(__dirname, './node_modules/react-tiger-transition/lib')

module.exports = (env, argv) => ({
    entry : path.join(src, 'index.js'),
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js',
        publicPath: argv.mode === 'production' ? '' : 'http://localhost:8080/'
    },
    module : {
        rules : [
            {
              test : /\.jsx?$/,
              loader: 'babel-loader',
              include: [
                src,
                parentSrc,
              ],
            },
            {
              test : /\.css$/,
              loader:[
                'style-loader',
                'css-loader'
              ],
              include: [
                src,
                parentSrc,
                codeMirrorLib,
                codeMirrorTheme,
                reactTigerTransitionStyles
              ],
            },
            {
              test: /\.md$/i,
              use: 'raw-loader'
            },
            {
              test: /\.(gif)$/i,
              use: [
                'url-loader',
              ],
            }
        ]
    },
    resolve: {
       modules: [
         src,
         node_modules,
       ],
       extensions: ['*', '.js', '.jsx'],
       // alias: {
       //  "react-tiger-transition": path.resolve(__dirname, '../src'),
       // }
     },

     resolveLoader: {
       modules: [
         node_modules,
       ],
     },

    mode:'development',

    devServer: {
      historyApiFallback: true,
    },

    plugins : [
        new HtmlWebpackPlugin ({
            template : path.resolve(__dirname , 'public/index.html'),
        }),
        new CopyPlugin([{
          from: path.resolve(__dirname , 'public/manifest.json'),
          to: path.resolve(__dirname , 'dist/') 
        }]),
    ]

})
