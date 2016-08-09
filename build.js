'use strict';

// var debug_lib   = require('debug');
// var debug       = debug_lib('nuxeo-build');
// var error       = debug_lib('nuxeo-build:error');
var path        = require('path');
var yaml_config = require('node-yaml-config');
var builder     = require('nuxeo-docs-builder');


var config = yaml_config.load(path.join(__dirname, '/config.yml'));

builder(config, path.join(__dirname, '/src'), path.join(__dirname, '/site'));
