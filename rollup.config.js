import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: './src/index.tsx',
  output: [{
    file: './dist/index.js',
    format: 'cjs'
  }, {
    file: './dist/index.esm.js',
    format: 'esm'
  }, {
    file: './dist/index.umd.js',
    format: 'umd',
    name: 'react-pretty-check'
  }],
  plugins: [
    scss({
      includePaths: [ 'node_modules/' ],
    importer(path) {
      return { file: path[0] !== '~' ? path : path.slice(1) };
    }
  }),
    typescript()
  ],
  external: ['react', 'react-dom']
}

export default config;
