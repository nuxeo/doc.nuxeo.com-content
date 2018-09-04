'use strict';
/* eslint no-console: 0, new-cap: 0 */

const module_name = 'update-frontmater';

// Set Debugging up
if (!process.env.DEBUG) {
  process.env.DEBUG = '*:info,*:error';
}

const debug_lib = require('debug');
const Metalsmith = require('metalsmith');
const yaml = require('js-yaml');

const debug = debug_lib(module_name);
// const info = debug_lib(`${module_name}:info`);
// const error = debug_lib(`${module_name}:error`);

const nl = '\n';

const update_frontmatter = options => (files, metalsmith, done) => {
  Object.keys(files).forEach(filename => {
    debug(`Processing: ${filename}`);
    let file = files[filename];
    file = options.manipulation(file);
    const contents = file.contents;
    const frontmatter = Object.assign({}, file);
    delete frontmatter.contents;
    delete frontmatter.mode;
    delete frontmatter.stats;

    const yaml_output = yaml.safeDump(frontmatter, { indent: 2 });

    file.contents = Buffer.from(`---${nl}${yaml_output}${nl}---${nl}${contents}`, 'utf8');
  });
  done();
};

console.time('Update Frontmatter');
Metalsmith(__dirname)
  .source('./src')
  .use(
    update_frontmatter({
      manipulation: file => {
        file.labels = file.labels || [];
        file.labels.push('content-review-lts2017');

        return file;
      }
    })
  )
  .destination('./src_updated')
  .build(err => {
    if (err) {
      throw err;
    }
    console.timeEnd('Update Frontmatter');
  });
