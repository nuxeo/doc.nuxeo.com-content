---
title: Releases & Tags
review:
    comment: ''
    date: '2019-11-12'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
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

{{#> callout type='info' heading='recommended reading'}}
This screen will be populated if you have made a tag or release of your Nuxeo Studio project. We recommend checking our [how to create a tag or release]({{page version='' page='how-to-tag-or-release-your-nuxeo-studio-project'}}) first.
{{/callout}}

## Releases Tab

{{{multiexcerpt 'release' page='How to Tag or Release Your Nuxeo Studio Project'}}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Releases & Tags/Release Tab
    name: releases-tab.png
    studio_modeler#screenshot#up_to_date
--}}
![Release Tab](nx_asset://e189beb3-48b9-41e5-a4d7-bfdf6c425d70 ?w=650,border=true)

**Delete**: Deletes the release. This operation cannot be reverted.

**Maven GAV**: Displays the Maven coordinates so that you can add the release as a dependency on your Java project.

**Download Package**: You can download the release package and ask the administrator of the instance to install it using `nuxeoctl`.</br>
See the page [Installing a New Package on Your Instance]({{page version='' space='nxdoc' page='installing-a-new-package-on-your-instance'}}).

## Tags Tab

{{{multiexcerpt 'tag' page='How to Tag or Release Your Nuxeo Studio Project'}}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Releases & Tags/Tags Tab
    name: tags-tab.png
    studio_modeler#screenshot#up_to_date
--}}
![Tags Tab](nx_asset://c02c1808-8630-4498-894c-47c829c512cd ?w=650,border=true)

**Delete:** Delete the specific tag

**Download JAR:** Download the JAR

**Download Package:** You can download the tag package from this tab and then ask the administrator of the instance to install it using `nuxeoctl`. </br>
See the page [Installing a New Package on Your Instance]({{page version='' space='nxdoc' page='installing-a-new-package-on-your-instance'}}).

{{#> callout type='warning' }}
This must not be used for production (a tag package is built on demand).
{{/callout}}

**Revert to:** [Revert]({{page page='branch-management'}}#revert) to the state in history where the tag is.
