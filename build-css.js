var fs = require('fs'),
    sass = require('node-sass'),
    pkg = require('./package.json');

const dest = `build/${pkg.name}.css`;

const banner = fs.readFileSync('banner.js', 'utf-8')
  .replace('${name}', pkg.name)
  .replace('${version}', pkg.version)
  .replace('${description}', pkg.description)
  .replace('${homepage}', pkg.homepage)
  .replace('${time}', new Date());


sass.render({
  file: 'src/sass/main.scss',
  outputStyle: 'compressed'
}, (err, result) => {
  if (err) throw err.message;

  fs.writeFileSync(dest, banner + result.css);

  console.log('Built: ', new Date());
});
