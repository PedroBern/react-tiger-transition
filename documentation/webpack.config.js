var path = require('path');

const docs = path.join(__dirname);
const src = path.join(__dirname, '../src');
const node_modules = path.join(__dirname, '../node_modules');

module.exports = (env, argv) => ({
    entry : path.join(docs, 'generateTigersMarkdown.js'),
    output : {
        path : path.resolve(__dirname),
        filename: 'tigersAPI.bundle.js',
    },
    target: 'node',
    module : {
        rules : [
            {
              test : /\.js?$/,
              loader: 'babel-loader',
              include: [
                docs,
              ],
            },
            {
              test : /\.js?$/,
              use: 'raw-loader',
              include: [
                src,
              ]
            },
        ]
    },
    resolve: {
       modules: [
         src,
         node_modules,
       ],
       extensions: ['*', '.js', '.jsx'],
       alias: {
        "tigers": path.resolve(__dirname, '../src/tigers'),
       }
     },

     resolveLoader: {
       modules: [
         node_modules,
       ],
     },

    mode:'development',

})
