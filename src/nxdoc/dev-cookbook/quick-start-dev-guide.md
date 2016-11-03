---
title: Quick Start Dev Guide
review:
    comment: ''
    date: ''
    status: ok
version_override:
    'FT': /nxdoc/start-customizing-the-nuxeo-platform/
confluence:
    ajs-parent-page-id: '17334435'
    ajs-parent-page-title: Dev Cookbook
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Quick+Start+Dev+Guide
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Quick+Start+Dev+Guide'
    page_id: '17334418'
    shortlink: koAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/koAIAQ'
    source_link: /display/NXDOC58/Quick+Start+Dev+Guide
history:
    -
        author: Solen Guitter
        date: '2015-01-30 10:10'
        message: ''
        version: '3'
    -
        author: Anonymous
        date: '2013-07-16 10:30'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-07-15 13:57'
        message: ''
        version: '1'

---
Welcome to the Nuxeo Developer Quick Start Guide!

This guide aims at showing you how to start a Nuxeo project with a simple example using our tools Nuxeo Studio and Nuxeo IDE. The most common process when people want to customize the Nuxeo Platform consists in doing the configuration in Nuxeo Studio and creating new features (customizations that go beyond XML configuration and require actual coding) in Nuxeo IDE. This Quick Start Guide will guide you through the different steps of this process.

Our example will use a template in Nuxeo Studio, to quickly have a working set of customization in Nuxeo Studio (Studio customization is not the purpose here). This template, called Custom Doc ID Generation, provides a new document type ("Sample") for which an automation chain is run when the document is created in order to generate an incremental UID. We will add a new metadata that will be filled in with a random value upon creation as well. To generate this random string, we will use an operation that will be coded in Nuxeo IDE. And finally we will integrate this new operation in our Studio project.

The purpose of this guide is not to provide an overview of all the features of Nuxeo Studio or Nuxeo IDE but to show you how to use these two tools to make your own Nuxeo project. However, you can take a look at the [Studio documentation]({{page space='studio' page='nuxeo-online-services'}}) or [IDE documentation]({{page space='idedoc'}}) at anytime if you want more information about a feature.

In order to follow / complete this example, you will need:

*   a Nuxeo Studio account (trial or regular),
*   Eclipse, of course,
*   Nuxeo IDE (see [Getting Started with Nuxeo IDE]({{page space='nxdoc60' page='getting-started-with-nuxeo-ide'}})).

Now let's [start your project with Nuxeo Studio]({{page page='starting-your-project-with-nuxeo-studio'}}).

&nbsp;

&nbsp;
