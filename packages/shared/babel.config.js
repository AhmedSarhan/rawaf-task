/* eslint-disable @typescript-eslint/no-var-requires */

const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

const presets = [
  [
    '@babel/env',
    {
      loose: true,
      modules: isCommonJS ? 'commonjs' : false,
      targets: {
        esmodules: isESM ? true : undefined,
      },
    },
  ],
  '@babel/typescript',
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-runtime',
];

module.exports = {
  presets,
  plugins,
};
