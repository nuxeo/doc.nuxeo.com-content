---
title: Deploying a Project with Studio Dependencies
review:
    comment: ''
    date: ''
    status: ok
labels:
    - studio-project
    - howto
    - nuxeo-ide
confluence:
    ajs-parent-page-id: '8684219'
    ajs-parent-page-title: Working with Studio Projects
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Deploying+a+Project+with+Studio+Dependencies
    canonical_source: >-
        https://doc.nuxeo.com/display/IDEDOC/Deploying+a+Project+with+Studio+Dependencies
    page_id: '8684234'
    shortlink: yoKE
    shortlink_source: 'https://doc.nuxeo.com/x/yoKE'
    source_link: /display/IDEDOC/Deploying+a+Project+with+Studio+Dependencies
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-09-01 16:22'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-09-01 12:04'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-11-27 15:22'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-11-27 15:22'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-10-06 15:44'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Solen Guitter
        date: '2011-10-06 15:44'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-10-06 11:43'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-10-06 11:41'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:32'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:32'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 17:03'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

{{! excerpt}}

For now, when deploying your projects on the server (using the a deployment profile) the Studio projects are not automatically deployed. In order to deploy both your Nuxeo IDE projects and their Studio project dependencies, your need to:

{{! /excerpt}}

1.  Start your SDK server.
2.  [Deploy the Studio projects using the regular **Admin Center** web interface]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).
3.  Reload the Nuxeo IDE projects on the server by clicking on the **refresh** button in the server view.

    {{#> callout type='tip' }}

    Of course, if you haven't modified your Nuxeo IDE projects, you don't need to reload the Nuxeo IDE project.

    {{/callout}}
