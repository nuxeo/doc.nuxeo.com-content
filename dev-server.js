'use strict';
/* eslint-env es6 */

// Set Debugging up
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (!process.env.DEBUG) {
  process.env.DEBUG = 'docs-server*,*:info,*:error';
}

// check for no-clean switch
const no_clean = !!process.argv.find(val => val === '--no-clean');

// Spawns a dev server with Metalsmith & Webpack live reloading via Browsersync
const debug_lib = require('debug');
const debug = debug_lib('docs-server');
const error = debug_lib('docs-server:error');
const info = debug_lib('docs-server:info');

info('no-clean', no_clean);

const browser_sync = require('browser-sync');
const strip_ansi = require('strip-ansi');

const thenify = require('thenify');
const exec = thenify(require('child_process').exec);

const fs = require('fs');
const path = require('path');
const yaml_config = require('node-yaml-config');
const co = require('co');
const extend = require('lodash.defaultsdeep');
const { pre_builder, builder } = require('nuxeo-docs-builder');

// Working copy
const target_repo_path = path.join(__dirname, 'src');
const source_repo_path = __dirname;
const target_repo_site = path.join(__dirname, 'site');

info('target_repo_src: %s', target_repo_path);

const instance_config = yaml_config.load(path.join(__dirname, 'config.yml'));
const branch = instance_config && instance_config.site && instance_config.site.branch;
const dev_browser_path = (instance_config && instance_config.site && instance_config.site.dev_browser_path) || '';
info(`dev_browser_path: ${dev_browser_path}`);

if (!branch) {
  throw new Error('Could not get current branch from `config.yml` site.branch');
}

// Get 404 info page
const content_404 = fs.readFileSync(path.join(__dirname, '404.html'));

// Initialize Browsersync and webpack
const sync = browser_sync.create();

const get_filter = file => {
  const file_relative = path.relative(__dirname, file);
  debug(`File relative: ${file_relative}`);
  const first_dir = file_relative.split('/').shift();
  if (first_dir === 'src') {
    return file_relative
      .split('/')
      .slice(1)
      .join('/');
  } else {
    return '';
  }
};

// Run metalsmith and reload browsers
// or send a fullscreen error message to the browser instead
const build_docs = () => {
  info('Building Docs');

  co(function*() {
    // Pre-build
    const pre_build = [pre_builder({ branch, repo_id: '', source_path: target_repo_path })];
    const metadata = {};
    const pre_build_result = yield pre_build;
    pre_build_result.forEach(data => extend(metadata, data));

    // Build
    yield builder(target_repo_path, metadata, target_repo_site, { branch, repo_id: '', repo_path: source_repo_path });

    yield exec('npm run copy_assets', { encoding: 'utf8', cwd: __dirname });

    info('Docs build successfully finished! Reloading browsers.');
    sync.reload();
  }).catch(err => {
    error('Docs build error');
    error(err);
    return sync.sockets.emit('fullscreen:message', {
      title: 'Docs Build Error:',
      body: strip_ansi(`${err.message}\n\n${err.stack}`),
      timeout: 100000
    });
  });
};

// Run full build to start
if (!no_clean) {
  build_docs();
}

// Run Browsersync for server and watching
// Use webpack dev middleware for Hot Module Replacement
// Apply custom chokidar function to rebuild metalsmith when files changed
sync.init(
  {
    server: path.join(__dirname, 'site'),
    startPath: dev_browser_path,
    open: true,
    logFileChanges: true,
    plugins: ['bs-fullscreen-message'],
    files: [
      {
        match: [
          path.join(__dirname, 'src', '**', '*'),
          path.join(__dirname, 'assets', '**', '*'),
          path.join(__dirname, 'config.yml')
        ],
        fn: (event, file) => {
          if (!file.startsWith('assets/nx_assets')) {
            debug(`File changed: ${file}`);
            process.env.FILTER = get_filter(file);

            build_docs();
          }
        }
      }
    ]
  },
  (err, bs) => {
    if (err) {
      error(err);
    }
    bs.addMiddleware('*', (req, res) => {
      // res.writeHead(302, {
      //     "location": "404.html"
      // });
      // res.end("Redirecting!");
      res.write(content_404);
      res.end();
    });
  }
);
