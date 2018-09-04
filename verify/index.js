'use strict';
/* eslint-env es6 */

const { test } = require('tap');
const fs = require('fs');
const path = require('path');

const site_path = path.join(__dirname, '../site');

test('lib assets directory should be generated', assert => {
    assert.doesNotThrow(() => fs.accessSync(site_path, fs.F_OK), void 0, `${site_path} directory is present`);
    assert.doesNotThrow(() => fs.accessSync(path.join(site_path, 'assets'), fs.F_OK), void 0, 'assets directory is present');
    assert.doesNotThrow(() => fs.accessSync(path.join(site_path, 'idedoc'), fs.F_OK), void 0, 'nxdoc space directory is present');

    assert.end();
});

// test('site should have key files', function (assert) {
//     const site_paths = [
//     ];
//
//     site_paths.forEach(function (filepath) {
//         assert.doesNotThrow(function () { fs.accessSync(filepath, fs.F_OK); }, void 0, filepath + ' is present');
//     });
//
//     assert.end();
// });
