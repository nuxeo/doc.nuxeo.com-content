---
title: Nuxeo JSF UI
description: "JSF UI addon offers a user interface for Nuxeo server, extensible and configurable: forms, process, user actions."
review:
    comment: ''
    date: '2019-10-18'
    status: ok
labels:
    - content-review-lts2016
    - jsf
    - todo
    - seam-jsf-component
    - atchertchian
    - multiexcerpt-include
    - excerpt
    - lts2017-ok
    - deprecated
toc: true
confluence:
    ajs-parent-page-id: '16089312'
    ajs-parent-page-title: JSF UI Framework
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+JSF+UI
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+JSF+UI'
    page_id: '950313'
    shortlink: KYAO
    shortlink_source: 'https://doc.nuxeo.com/x/KYAO'
    source_link: /display/NXDOC/Nuxeo+JSF+UI
tree_item_index: 2050
history:
    -
        author: Manon Lumeau
        date: '2016-09-27 12:54'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2016-09-26 16:11'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2016-09-05 09:37'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2016-07-20 13:42'
        message: remove children display macro
        version: '23'
    -
        author: Solen Guitter
        date: '2015-12-14 15:03'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2015-08-31 14:07'
        message: Update table of contents look
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 13:42'
        message: 'NXDOC-427: add sub pages index'
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 18:25'
        message: ''
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 18:24'
        message: 'NXDOC-196: remove warning'
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 18:24'
        message: 'NXDOC-196: review content'
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-11-24 16:53'
        message: ''
        version: '16'
    -
        author: Gildas Lefevre
        date: '2014-11-04 17:46'
        message: Update versions of technical stack
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-01-10 18:14'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-01-10 18:14'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-01-07 14:57'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 15:05'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 17:26'
        message: add WIP warning
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 13:46'
        message: Reverted from v. 7
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 13:44'
        message: remove JSF stack part (moved to sub page)
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 12:39'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-09-05 15:44'
        message: Added TOC
        version: '6'
    -
        author: Solen Guitter
        date: '2011-03-04 10:46'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2011-03-04 10:46'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-03-04 10:46'
        message: formatting and typos
        version: '3'
    -
        author: Thierry Delprat
        date: '2010-10-15 01:01'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 01:35'
        message: ''
        version: '1'
---

{{{multiexcerpt 'DeprecatedAddon_10.10' page='generic-multi-excerpts'}}}

## Requirements
Nuxeo JSF UI is supported on the following browsers:

{{! multiexcerpt name='jsf-ui-supported-browsers'}}
- Chrome - latest version
- Firefox - latest version
- Edge - latest version
- Internet Explorer 11
- Safari 9+
{{! /multiexcerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

Once the addon is installed, you can go to `http://SERVER_URL/nuxeo/jsf` and after authentication, you will be able to browse the JSF UI and start creating content, upload files, browse and search for content.

## Configuration

There is no additional configuration step required to start using the addon. Customisation is done via Nuxeo Studio.

## Nuxeo Platform Concepts

{{{multiexcerpt 'functional-overview' page='nuxeo-platform-concepts'}}}

## Creating Content

{{{multiexcerpt 'functional_overview' page='creating-content'}}}

## Editing Content

### Content and Metadata Edit Form

{{{multiexcerpt 'edit-document' page='editing-content'}}}

{{{multiexcerpt 'edit-form-custom-functional-overview' page='editing-content'}}}

### Clipboard and Worklist

{{{multiexcerpt 'clipboard-worklist-overview' page='editing-content'}}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JSF UI Framework Overview]({{page page='jsf-ui-framework-overview'}})</span>

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
