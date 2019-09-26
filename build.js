'use strict';

const thenify = require('thenify');
const exec = thenify(require('child_process').exec);

// Set Debugging up
if (!process.env.DEBUG) {
  process.env.DEBUG = '*:info,*:error';
}

const debug_lib = require('debug');
// const debug = debug_lib('nuxeo-build');
const error = debug_lib('nuxeo-build:error');
const path = require('path');
const co = require('co');
const extend = require('lodash.defaultsdeep');
const builder_lib = require('nuxeo-docs-builder');
const pre_builder = builder_lib.pre_builder;
const builder = builder_lib.builder;

// Working copy
const target_repo_path = path.join(__dirname, 'src');
const source_repo_path = __dirname;
const target_repo_site = path.join(__dirname, 'site');

error('target_repo_src: %s', target_repo_path);
exec("git branch | grep ^\\* | grep -oE '[a-zA-Z0-9_-]+$'", { encoding: 'utf8', cwd: __dirname })
  .then(branch_data => {
    let branch;
    if (branch_data && branch_data[0] && typeof branch_data[0] === 'string') {
      branch = branch_data[0].trim();
    }

    co(function*() {
      // Pre-build
      const pre_build = [pre_builder(target_repo_path)];
      const metadata = {};
      const pre_build_result = yield pre_build;
      pre_build_result.forEach(data => {
        extend(metadata, data);
      });

      // Build
      yield builder(target_repo_path, metadata, target_repo_site, { branch, repo_id: '', repo_path: source_repo_path });
    }).catch(err => {
      error(err);
      throw err;
    });
  })
  .catch(err => {
    error('Could not get current branch: %s', err);
  });
