const path = require("path");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
const { uglify } = require("rollup-plugin-uglify");
const pkg = require("./package.json");
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const input = './src/index.js';

const globals = {
  react: 'React',
  "react-router-dom": 'ReactRouterDOM',
  "react-transition-group": 'ReactTransitionGroup',
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
      babel({ exclude: /node_modules/, sourceMaps: true }),
      nodeResolve(),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: { file: `cjs/${pkg.name}.min.js`, sourcemap: true, format: "cjs" },
    external: Object.keys(globals),
    plugins: [
      babel({ exclude: /node_modules/, sourceMaps: true }),
      nodeResolve(),
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
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]],
      }),
      nodeResolve(),
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
      uglify(),
      sizeSnapshot()
    ]
  }
];

const css = [
  {
    input: "./src/styles.js",
    output: {
      format: 'system',
      file: 'styles/main.js'
    },
    plugins: [
      postcss({
        extract: true,
        inject: false,
        plugins: [autoprefixer]
      })
    ]
  },
  {
    input: "./src/styles.js",
    output: {
      format: 'system',
      file: 'styles/main.min.js'
    },
    plugins: [
      postcss({
        extract: true,
        inject: false,
        plugins: [autoprefixer, cssnano]
      })
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
  case "css":
    config = css;
    break;
  default:
    config = cjs.concat(esm).concat(umd).concat(css);
}

module.exports = config;
