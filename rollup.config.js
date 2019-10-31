const path = require("path");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
import { prepend } from 'rollup-plugin-insert';
import postcss from 'rollup-plugin-postcss';
const { uglify } = require("rollup-plugin-uglify");
const pkg = require("./package.json");
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const input = './src/index.js';

const globals = {
  react: 'React',
  "react-router-dom": 'ReactRouterDOM',
  "react-transition-group": 'ReactTransitionGroup',
  animejs: 'animejs'
};

const cjs = [
  {
    input,
    output: {
      file: `cjs/${pkg.name}.js`,
      sourcemap: true,
      format: "cjs",
      esModule: false
    },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
         include: /Navigation.js/,
       }),
      babel({ exclude: /node_modules/, sourceMaps: true }),
      nodeResolve(),
      postcss({
        extensions: [ '.css' ],
      }),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: { file: `cjs/${pkg.name}.min.js`, sourcemap: true, format: "cjs" },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
         include: /Navigation.js/,
       }),
      babel({ exclude: /node_modules/, sourceMaps: true }),
      nodeResolve(),
      postcss({
        extensions: [ '.css' ],
      }),
      uglify(),
      sizeSnapshot()
    ]
  }
];

const esm = [
  {
    input,
    output: { file: `esm/${pkg.name}.js`, sourcemap: true, format: "esm" },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
         include: /Navigation.js/,
       }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]],
      }),
      nodeResolve(),
      postcss({
        extensions: [ '.css' ],
      }),
      sizeSnapshot()
    ]
  }
];

const umd = [
  {
    input,
    output: {
      file: `umd/${pkg.name}.js`,
      sourcemap: true,
      format: "umd",
      name: "ReactTigerTransition",
      globals
    },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
         include: /Navigation.js/,
       }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]],
      }),
      nodeResolve(),
      commonjs({
        include: /node_modules/,
      }),
      postcss({
        extensions: [ '.css' ],
      }),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: {
      file: `umd/${pkg.name}.min.js`,
      sourcemap: true,
      format: "umd",
      name: "ReactTigerTransition",
      globals
    },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
         include: /Navigation.js/,
       }),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]],
      }),
      nodeResolve(),
      commonjs({
        include: /node_modules/,
      }),
      postcss({
        extensions: [ '.css' ],
      }),
      uglify(),
      sizeSnapshot()
    ]
  }
];

let config;
switch (process.env.BUILD_ENV) {
  case "cjs":
    config = cjs;
    break;
  case "esm":
    config = esm;
    break;
  case "umd":
    config = umd;
    break;
  default:
    config = cjs.concat(esm).concat(umd);
}

module.exports = config;
