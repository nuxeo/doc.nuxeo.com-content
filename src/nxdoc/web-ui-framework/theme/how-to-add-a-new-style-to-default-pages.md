---
title: How to Add a New Style to Default Pages
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to add a new style to your default pages.
        level: Advanced
        tool: Code editor
        topics: 'Theme, Style'
labels:
    - howto
    - style
    - theme
    - todo
confluence:
    ajs-parent-page-id: '22380895'
    ajs-parent-page-title: Theme
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Add+a+New+Style+to+Default+Pages
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Add+a+New+Style+to+Default+Pages
    page_id: '22380801'
    shortlink: AYFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AYFVAQ'
    source_link: /display/NXDOC60/How+to+Add+a+New+Style+to+Default+Pages
history:
    - 
        author: Manon Lumeau
        date: '2016-02-09 15:28'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-10-03 15:26'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-09-17 12:19'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2014-09-17 12:18'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2014-09-16 17:28'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2014-09-16 16:38'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-12-03 16:31'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

Work still in progress

{{/callout}}

You basically have two options:

*   Add these classes to "static" CSS files: they won't be able to reference flavors, but can use CSS3 properties (as of Nuxeo 5.5 and 5.6, CSS3 properties management is not working well for dynamic CSS files).

*   Add theses classes to "dynamic" CSS files (see above how to declare new dynamic CSS styles and bind them to the theme page).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Declare the CSS and Javascript Resources Used in Your Templates]({{page page='how-to-declare-the-css-and-javascript-resources-used-in-your-templates'}})
*   [How to Customize the Login Page]({{page page='how-to-customize-the-login-page'}})
*   [undefined]()
*   [undefined]()
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Theme in Developer Documentation]({{page page='theme'}})
*   [Branding in Studio Documentation]({{page space='studio' page='branding'}})
*   [Runtime and Component Model]({{page page='runtime-and-component-model'}})
*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div></div>