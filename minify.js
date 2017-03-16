var fs = require('fs'),
    minify = require('uglify-js').minify,
    pkg = require('./package.json');

const code = fs.readFileSync(`dist/${pkg.name}.debug.js`, 'utf8');
const dest = `dist/${pkg.name}.js`;

const minified = minify(code, {
  fromString: true,
  warnings: false,
  mangle: true,
  output: { comments: /^!/ },
  compress: { screw_ie8: true, drop_console: false }
}).code;

fs.writeFileSync(dest, minified);

console.log('Minified - now: ', new Date());
