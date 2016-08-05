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
Any files in this directory will be copied to `site/assets` and can be referenced in html and templates. e.g. An image called `your_img.png` could be referenced by the following:
```md
Basic example:
![Alt text - Required]({{file name='AdapterService.png'}})


All options with file from another space and page:
![Alt text - Required]({{file space='nxdoc' page='client-sdks' name='AdapterService.png'}} ?w=180,h=360,border=true,thumbnail=true,align=right "Title text - Optional")
```

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
