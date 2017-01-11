---
title: Working with Studio Projects
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22905665'
    ajs-parent-page-title: Nuxeo IDE
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Working+with+Studio+Projects
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Working+with+Studio+Projects'
    page_id: '8684219'
    shortlink: u4KE
    shortlink_source: 'https://doc.nuxeo.com/x/u4KE'
    source_link: /display/IDEDOC/Working+with+Studio+Projects
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 16:35'
        message: 'emove children display macro   '
        version: '7'
    -
        author: Solen Guitter
        date: '2013-11-27 15:27'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-10-03 12:25'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2011-10-03 12:25'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-09-30 16:03'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-09-28 15:09'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 15:06'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

Nuxeo IDE enables developers to extend the Nuxeo application with new features, but they also use [Studio]({{page space='studio'}}) in parallel.
Nuxeo IDE provides a way to use each customization tool's content into the other one. For instance, use operations created in Eclipse using Nuxeo IDE from Nuxeo Studio, or exploit the document types defined in Nuxeo Studio in your code in Eclipse.

**Available how-tos:**

*   [Configuring a Nuxeo Online Services Account]({{page space='IDEDOC' page='Configuring a+Nuxeo+Online+Services+Account'}})&nbsp;&mdash; To enable Nuxeo IDE to leverage your Nuxeo Studio customization, you need to configure your Nuxeo Online Services account so Nuxeo IDE can connect to Studio.
*   [Browsing a Studio Project Content]({{page space='IDEDOC' page='Browsing a+Studio+Project+Content'}})&nbsp;&mdash; The Studio view enables you to browse the list of your Studio customizations. You can see all the document types, schemas, content views, automation chains, etc, that you have configured in Nuxeo Studio.
*   [Binding Studio Projects to an Nuxeo IDE Project]({{page space='IDEDOC' page='Binding Studio+Projects+to+an+Nuxeo+IDE+Project'}})&nbsp;&mdash; The whole purpose of enabling to work with Nuxeo Studio is to be able to use elements configured in Studio from Nuxeo IDE, and to benefit from Eclipse key features such as code completion. As you may have several projects (both in Nuxeo Studio and in Nuxeo IDE), you need to indicate which Studio project the Nuxeo IDE project should be bound to.
*   [Uploading Custom Operations in Nuxeo Studio]({{page space='IDEDOC' page='Uploading Custom+Operations+in+Nuxeo+Studio'}})&nbsp;&mdash; Nuxeo IDE enables you to code new features, that can be complementary to your Studio customizations. Typically, you can use Nuxeo IDE to develop new Automation operations, that want to leverage in the Nuxeo Studio automation chain builder. Just like you can browse your Nuxeo Studio project from Nuxeo IDE, you can also use your operation in Nuxeo Studio.
*   [Deploying a Project with Studio Dependencies]({{page space='IDEDOC' page='Deploying a+Project+with+Studio+Dependencies'}})&nbsp;&mdash; For now, when deploying your projects on the server (using the a deployment profile) the Studio projects are not automatically deployed. In order to deploy both your Nuxeo IDE projects and their Studio project dependencies, your need to:
*   [Creating a Custom Nuxeo Package]({{page space='IDEDOC' page='Creating a+Custom+Nuxeo+Package'}})&nbsp;&mdash; Nuxeo IDE enables you to create Nuxeo Packages for your Nuxeo project. A Nuxeo Package is the easiest way to distribute a plugin, as it contains all the bundles, libraries and runtime properties that would be required to make your new plugin work, all in one single ZIP file.
*   [Settings Eclipse Development Templates]({{page space='IDEDOC' page='Settings Eclipse+Development+Templates'}})
