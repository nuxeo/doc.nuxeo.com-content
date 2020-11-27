# Documentation Content

# Development
## Requirements
See [the main project requirements](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md#requirements) as well as [the authoring requirements](https://github.com/nuxeo/doc.nuxeo.com/blob/master/docs/writing-documentation.md#requirements).

## Installation
Clone the repository to your local machine (and remember where it's saved :)), using your favorite git client or the command line:
```bash
git lfs clone https://github.com/nuxeo/doc.nuxeo.com-content.git
cd doc.nuxeo.com-content
git lfs install
git reset --hard
```

## Run Locally
```bash
npm run dev
```

Refer to [the authoring instrutions](https://github.com/nuxeo/doc.nuxeo.com/blob/master/docs/writing-documentation.md#installation) for further details. Hint: append `/nxdoc` or `/userdoc` to the URL.

### Change browser
Refer to [change the default browser](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md#change-browser).

## Project Structure
### `./assets/...`
Any files in this directory will be copied to `./site/assets` and can be referenced in html and templates.

### `./build.js`
The main build script for generating the output for `site`.

### `./config.yml`
Site configurations, ability to have production or development specific values.

### `./site/...`
Generated output of the site. This is what will be served in production.

### `./src/...`
Source Markdown and HTML files for content.
[Read the page about writing documentation, markdown and handlebars](https://github.com/nuxeo/doc.nuxeo.com/blob/master/docs/writing-documentation.md)

### `./verify/...`
Verification tests specific to this repository post build.


# Trouble shooting
See [main project trouble shooting](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md#trouble-shooting).
