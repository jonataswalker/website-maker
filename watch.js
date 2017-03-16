const { spawnSync } = require('child_process');
const { watch } = require('chokidar');

// run('build:css');
run('build:js');

let watcher1 = watch('src/**/*.scss')
  .on('change', () => run('build:css'));

let watcher2 = watch(['src/**/*.js', 'src/**/*.vue', 'src/**/*.html'])
  .on('change', () => run('build:js'));

process.on('SIGINT', function () {
  watcher1.close();
  watcher2.close();
});

// chokidar.watch('dist/*.js')
//   .on('change', path => run('uglify'));

function run(script) {
  const proc = spawnSync('yarn', ['run', script], { stdio: [0, 1, 2] });
  proc.error && console.log(proc.error);
}
