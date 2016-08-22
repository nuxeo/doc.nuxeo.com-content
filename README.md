# Platform Spaces

# Development
## Requirements
See [the main project requirements](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md#requirements).

## Installation
Clone the repository to your local machine (and remember where it's saved :)), using your favorite git client or the command line:
```bash
git lfs clone https://github.com/nuxeo/doc.nuxeo.com-platform-spaces
cd doc.nuxeo.com-platform-spaces
git lfs install
git reset --hard
```

## Run Locally
```bash
npm run dev
```

### Change browser
To [change the from the default browser](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md#change-browser).

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
Verification tests specific to this repository ost building.


# Trouble shooting
See [main project trouble shooting](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md#trouble-shooting).
