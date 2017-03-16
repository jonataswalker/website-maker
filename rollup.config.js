import { readFileSync } from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
const external = Object.keys(pkg.dependencies);
const dest = `dist/${pkg.name}.debug.js`;

const plugins = [
  resolve(),
  vue({ compileTemplate: true }),
  buble({ target: { ie: 9 }})
];

const banner = readFileSync('banner.js', 'utf-8')
    .replace('${name}', pkg.name)
    .replace('${version}', pkg.version)
    .replace('${description}', pkg.description)
    .replace('${homepage}', pkg.homepage)
    .replace('${time}', new Date());

export default {
  external,
  banner,
  dest,
  entry: 'src/entry.js',
  globals: { vue: 'Vue' },
  format: 'umd',
  moduleName: 'app',
  plugins
};
