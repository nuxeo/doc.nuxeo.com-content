# doc.nuxeo.com

# Development
See [main project readme](https://github.com/nuxeo/doc.nuxeo.com/blob/master/README.md)

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
