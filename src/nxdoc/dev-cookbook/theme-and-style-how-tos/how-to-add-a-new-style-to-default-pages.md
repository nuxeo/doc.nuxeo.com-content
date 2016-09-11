---
title: How to Add a New Style to Default Pages
review:
    comment: ''
    date: ''
    status: ok
labels:
    - style
confluence:
    ajs-parent-page-id: '17334301'
    ajs-parent-page-title: Theme and Style How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Add+a+New+Style+to+Default+Pages
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Add+a+New+Style+to+Default+Pages
    page_id: '18449699'
    shortlink: I4UZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/I4UZAQ'
    source_link: /display/NXDOC58/How+to+Add+a+New+Style+to+Default+Pages
history:
    - 
        author: Solen Guitter
        date: '2014-01-22 17:38'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

Work still in progress

{{/callout}}

You basically have two options:

*   Add these classes to "static" CSS files: they won't be able to reference flavors, but can use CSS3 properties (as of Nuxeo 5.5 and 5.6, CSS3 properties management is not working well for dynamic CSS files).

*   Add theses classes to "dynamic" CSS files (see above how to declare new dynamic CSS styles and bind them to the theme page).