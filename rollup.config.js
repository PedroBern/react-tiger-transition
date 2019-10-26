import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { prepend } from 'rollup-plugin-insert';

const input = './src/index.js';

const name = 'ReactTigerTransition';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  "react-router-dom": 'ReactRouterDOM',
  "react-transition-group": 'ReactTransitionGroup',
};

const babelOptions = {
  exclude: /node_modules/,
  runtimeHelpers: true
}

const commonjsOptions = {
  include: /node_modules/,
};

export default [
  {
    input,
    output: {
      file: './dist/react-tiger-transition.js',
      format: 'umd',
      name,
      globals
    },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
        include: /Navigation.js/,
      }),
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      postcss({
        extensions: [ '.css' ],
      }),
      sizeSnapshot()
    ]
  },

  {
    input,
    output: {
      file: './dist/react-tiger-transition.min.js',
      format: 'umd',
      name,
      globals
    },
    external: Object.keys(globals),
    plugins: [
      prepend("import './styles.css';", {
        include: /Navigation.js/,
      }),
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      postcss({
        extensions: [ '.css' ],
      }),
      terser(),
      sizeSnapshot()
    ]
  }
];
