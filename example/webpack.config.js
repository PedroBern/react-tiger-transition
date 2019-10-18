var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');


const node_modules = path.join(__dirname, './node_modules');
const src = path.join(__dirname, './src');
const parentSrc = path.join(__dirname, '../src')

// need to import styles of code mirror
const codeMirrorLib = path.join(__dirname, './node_modules/codemirror/lib')
const codeMirrorTheme = path.join(__dirname, './node_modules/codemirror/theme')


module.exports = {
    entry : path.join(src, 'index.js'),
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
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
              options: {
                rootMode: "upward",
              }
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
       alias: {
        "react-tiger-transition": path.resolve(__dirname, '../src'),
       }
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
            template : path.join(src, 'index.html'),
        }),
    ]

}
