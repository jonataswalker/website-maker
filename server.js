// const isProd = process.env.NODE_ENV === 'production';
const isProd = true;

const { readFileSync } = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const serialize = require('serialize-javascript');
const favicon = require('serve-favicon');
const lru = require('lru-cache');
const renderer = require('vue-server-renderer').createRenderer();

const resolve = file => path.resolve(__dirname, file);
const server = express();

// Define global Vue for server-side app.js
global.Vue = require('vue');

// const createRenderer =  bundle => {
//   // https://github.com/isaacs/node-lru-cache#options
//   return vueRenderer.createBundleRenderer(bundle, {
//     cache: lru({
//       max: 1000,
//       maxAge: 1000 * 60 * 15
//     })
//   });
// };

const serve = (path_, cache) => express.static(resolve(path_), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
});

const layout = readFileSync('./src/index.html', 'utf8');
const layoutSections = layout.split('<div id="app"></div>');
const preAppHTML = layoutSections[0];
const postAppHTML = layoutSections[1];

server.use(compression({ threshold: 0 }));
// server.use(favicon('./public/favicon.ico'))
server.use('/', serve('./public'));
server.use('/dist', serve('./dist'));

server.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text-html');

  const renderStream = renderer.renderToStream(require('.'));
  res.write(preAppHTML);

  renderStream.on('data', chunk => {
    res.write(chunk);
  });

  renderStream.on('end', () => {
    res.end(postAppHTML);
  });

  renderStream.on('error', err => {
    if (err && err.code === '404') {
      res.status(404).end('404, Page Not Found');
      return;
    }
    res.status(500).end('500 Internal Error');
    console.log(err);
  });
});

// Listen on port 5000
server.listen(5000, error => {
  if (error) throw error;
  console.log('Server is running at localhost:5000');
});
