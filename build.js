'use strict';
/* eslint-env es6 */


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
const target_repo_site = path.join(__dirname, 'site');

error('target_repo_src: %s', target_repo_path);
co(function *() {
    // Pre-build
    const pre_build = [
        pre_builder(target_repo_path)
    ];
    const metadata = {};
    const pre_build_result = yield pre_build;
    pre_build_result.forEach(function (data) {
        extend(metadata, data);
    });

    // Build
    yield builder(target_repo_path, metadata, target_repo_site);
})
.catch(err => {
    error(err);
    throw err;
});
