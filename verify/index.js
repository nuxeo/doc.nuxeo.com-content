'use strict';

var test = require('tape');
var fs = require('fs');
// var path = require('path');

var site_path = './site/';

test('lib assets directory should be generated', function (assert) {

    assert.doesNotThrow(function () { fs.accessSync(site_path, fs.F_OK); }, void 0, site_path + ' directory is present');
    assert.doesNotThrow(function () { fs.accessSync(site_path + 'assets', fs.F_OK); }, void 0, 'assets directory is present');
    assert.doesNotThrow(function () { fs.accessSync(site_path + 'idedoc', fs.F_OK); }, void 0, 'idedoc space directory is present');

    assert.end();
});

// test('site should have key files', function (assert) {
//     var site_paths = [
//     ];
//
//     site_paths.forEach(function (filepath) {
//         assert.doesNotThrow(function () { fs.accessSync(filepath, fs.F_OK); }, void 0, filepath + ' is present');
//     });
//
//     assert.end();
// });
