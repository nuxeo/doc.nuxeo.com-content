# doc.nuxeo.com

# Development
See [main project readme](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md) for requirements.

## Installation
Clone the repository to your local machine (and remember where it's saved :)), using your favorite git client or the command line:
```bash
git lfs clone https://github.com/nuxeo/doc.nuxeo.com-platform-spaces
cd doc.nuxeo.com-platform-spaces
git lfs install
git reset --hard
npm install
```

## Run Locally
```bash
npm run dev
```

### Change browser
The broswer defaults to `chromium-browser` but can be changed with the following command and then locally as usual.
```bash
npm config set Nuxeo-website:browser firefox
```

## Project Structure
### `assets`
Any files in this directory will be copied to `site/assets` and can be referenced in html and templates.

### `build.js`
The main build script for generating the output for `site`.

### `config.yml`
Site configurations, ability to have production or development specific values.

### `site`
Generated output of the site. This is what will be served in production.

### `src`
Source Markdown and HTML files for content.

#### Mandatory frontmatter
All `.md` (Markdown) content files should have a YAML frontmatter defined at the top of the file. e.g.

```md
---
layout: default.hbs
title: Title of the page
description: A description for search engines and social media to consume.

---

Content of page goes here.
```

#### Markdown and Handlebars
##### Excerpts Definition
Excerpts are to reuse content within the same page. In contrast Multi-excerpts can be reused in any page.

```handlebars
{{! excerpt name="foo"}}
Reuse the text **foo** in this page only.
{{! /excerpt}}
```
or
``handlebars
{{! multiexcerpt name="bar"}}
Reuse the text **bar** in any page.
{{! /multiexcerpt}}
```

##### Excerpts Use
```handlebars
{{excerpt 'foo'}}
```
or
```handlebars
{{multiexcerpt 'bar'}}
```

##### Images
An image called `your_img.png` could be referenced by the following:
```md
Basic example:
![Alt text - Required]({{file name='AdapterService.png'}})

All options with file from another space and page:
![Alt text - Required]({{file space='nxdoc' page='client-sdks' name='AdapterService.png'}} ?w=180,h=360,border=true,thumbnail=true,align=right "Title text - Optional")
```

#### Global optional frontmatter
##### `style`
Define a page specific style sheet. Defined in `doc.nuxeo.com/client/scss/`. e.g. To use `doc.nuxeo.com/client/scss/home.scss`, the front-matter would be:
```md
---
...
style: home
...
---
Page content here.
```
##### `script`
Define a page specific JavaScript. Defined in `doc.nuxeo.com/client/js/`. e.g. To use `doc.nuxeo.com/client/scss/home.js`, the front-matter would be:
```md
---
...
script: home
...
---
Page content here.
```

For new JS, add an entry to `doc.nuxeo.com/webpack.config.js`. See `main.js` as an example.

### `verify`
Verification tests for post building.


# Trouble shooting
## Invalid front-matter
Error: `Error: Invalid frontmatter in file: {filepath}`

### Solution
Run YAML linter to locate the issue with:

`npm run yaml_lint {filepath}`
