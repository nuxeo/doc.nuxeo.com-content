---
title: Releases & Tags
review:
    comment: ''
    date: '2018-03-29'
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: viewpage.action?pageId=31032031
    canonical_source: viewpage.action?pageId=31032031
    page_id: '31032031'
    shortlink: 34LZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/34LZAQ'
    source_link: /pages/viewpage.action?pageId=31032031
tree_item_index: 1100
history:
    -
        author: Manon Lumeau
        date: '2016-05-11 13:06'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2016-05-11 13:05'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2016-05-11 13:04'
        message: Added section about tags
        version: '3'
    -
        author: Manon Lumeau
        date: '2016-03-22 10:47'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2016-03-21 23:09'
        message: ''
        version: '1'

---
{{! excerpt}}

The releases and tags tab allows to list each and every releases and tags that were performed on the project. It also allows to download the Nuxeo Package associated to a given release.

{{! /excerpt}}

## Releases Tab

{{{multiexcerpt 'release' page='How to Tag or Release Your Nuxeo Studio Project'}}}

![]({{file name='releases-tab.png'}} ?w=650,border=true)

**Delete**: Deletes the release. This operation cannot be reverted.

**Maven GAV**: Displays the Maven coordinates so that you can add the release as a dependency on your Java project.

**Download Package**: You can download the release package and ask the administrator of the instance to install it using `nuxeoctl`. See the page [Installing a New Package on Your Instance]({{page version='' space='nxdoc' page='installing-a-new-package-on-your-instance'}}).

## Tags Tab

{{{multiexcerpt 'tag' page='How to Tag or Release Your Nuxeo Studio Project'}}}

![]({{file name='tags-tab.png'}} ?w=650,border=true)

**Delete:** Delete the specific tag

**Download JAR:** Download the JAR

**Download Package:** You can download the tag package from this tab and then ask the administrator of the instance to install it using `nuxeoctl`. See the page [Installing a New Package on Your Instance]({{page version='' space='nxdoc' page='installing-a-new-package-on-your-instance'}}).

{{#> callout type='warning' }}
This must not be used for production (a tag package is built on demand).
{{/callout}}

**Revert to:** [Revert]({{page page='branch-management#review-branch-commit'}}) to the state in history where the tag is.
