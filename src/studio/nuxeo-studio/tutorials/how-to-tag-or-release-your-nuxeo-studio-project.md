---
title: 'HOWTO: Tag or Release Your Nuxeo Studio Project'
description: Learn how to use the tags and releases features of Nuxeo Studio.
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to use the tags and releases features of Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: 'Branch Management, Studio Tags'
labels:
    - howto
toc: true
confluence:
    ajs-parent-page-id: '12912677'
    ajs-parent-page-title: Tutorials
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: How+to+Tag+or+Release+Your+Nuxeo+Studio+Project
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/How+to+Tag+or+Release+Your+Nuxeo+Studio+Project
    page_id: '31034389'
    shortlink: FYzZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FYzZAQ'
    source_link: /display/Studio/How+to+Tag+or+Release+Your+Nuxeo+Studio+Project
tree_item_index: 900
history:
    -
        author: Manon Lumeau
        date: '2016-05-11 12:43'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2016-05-11 12:34'
        message: ''
        version: '1'
---

## Tag

{{! multiexcerpt name='tag'}}

In order to identify specific state of your work, you may want to tag any given commit. Once created, you will find your tag in the tags list on the [Releases & Tags page]({{page page='releases-and-tags'}}), which will allow you to download, revert your working state to that specific tagged state, etc.

{{! /multiexcerpt}}

From the Branch Management page:

1.  Click on the **Tag** button next to the commit that you want to tag.
    ![]({{file name='tag-release-button.png'}} ?w=350,border=true)
2.  Fill in the pop-up window with a tag name and a description.
    ![]({{file name='create-tag.png' page='branch-management'}} ?w=350,border=true)
    The On Commit field is in read-only and automatically filled, it will display the name of the tag where the release is done.
3.  Click on **Ok**.
    Your project is tagged.

Once you have created a new tag, it will be available from the tags tab on the [Releases & Tags page]({{page page='releases-and-tags'}}), where you will be available to manage your tags.

## {{> anchor 'release-creation'}} Release

{{! multiexcerpt name='release'}}

A release is considered as a tested and validated version of your project. Once created, you will be able to use this stable version in production.

{{! /multiexcerpt}}

### From the Studio Modeler

Go to **Source Control** > **Branch Management**:

1.  Click on the **Release** button next to the commit that you want to release.
    ![]({{file name='tag-release-button.png'}} ?w=350,border=true)
2.  Fill in the pop-up window:
    ![]({{file name='create-release.png' page='branch-management'}} ?w=350,border=true)
    All the fields will be pre-filled but you can modify the released version and prepare your next version by checking the Next version box. You will be able to choose the type of your release or to create a custom one with a qualifier.

Once your release is created, you can now install it like you would [install any other Nuxeo package]({{page space='nxdoc' page='installing-a-new-package-on-your-instance'}}).

### With the REST API

To create a release you need:

1.  Your project identifier
2.  Credentials with write access to the project
3.  The revision on which the release will be created. This can be master or a feature branch, but not a user workspace branch
4.  Either the name of the release that will be created, or the type of release you want to create (see below).

{{! multiexcerpt name='release'}}

Versions in Studio must have the following format: `M.m.p[-q]` where:

* M is the _major_ number. It should be incremented when new features are added and APIs were broken
* m is the _minor_ number. It should be incremented when new features are added and no API was broken
* p is the _patch_ number. It should be incremented when the release contains only bug fixes
* q is the _qualifier_ string. It qualifies the release, eg: beta, rc1. Must contain only letters, numbers, '_', '-' or '.'

For automation purposes it might be preferable to ask Studio to choose the next version type: `MAJOR`, `MINOR` or `PATCH` instead of specifying a version name. Studio will look for the latest release created in the history of the revision commit and try to release the next version as asked.

{{! /multiexcerpt}}

If the version name specified (or computed by Studio) already exists, then the release will not be allowed and will fail.

```
Request:

POST https://connect.nuxeo.com/nuxeo/site/studio/v2/project/{project_id}/releases
Authorization: Basic base64({username}:{password})
Accept: application/json
Content-Type: application/json

{
    "revision": "{branch_name}",
    "versionName": "(M.m.p-q|MAJOR|MINOR|PATCH)"
}

Response:

Content-Type: application/json

{
    "version": "M.m.p-q",
    "bundleSymbolicName": "studio.extensions.{project_id}",
    "mavenCoordinates": "{project_group_id}:{project_id}:M.m.p-q"
}
```

**Example** creating a minor release on master as John Doe on my-project with curl:

```bash
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "revision": "master", "versionName": "MINOR" }' \
     -u 'jdoe:mypassword' \
     'https://connect.nuxeo.com/nuxeo/site/studio/v2/project/my-project/releases'
```
