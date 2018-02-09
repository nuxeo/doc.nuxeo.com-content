---
title: Nuxeo IDE
review:
    comment: ''
    date: ''
    status: ok
is_overview: true
confluence:
    ajs-parent-page-id: '8684133'
    ajs-parent-page-title: Documentation Center for Nuxeo Platform IDEs
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Nuxeo+IDE
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Nuxeo+IDE'
    page_id: '22905665'
    shortlink: QYNdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QYNdAQ'
    source_link: /display/IDEDOC/Nuxeo+IDE
tree_item_index: 100
history:
    -
        author: Bertrand Chauvin
        date: '2016-01-05 15:04'
        message: ix Nuxeo website UR
        version: '4'
    -
        author: Solen Guitter
        date: '2015-01-30 10:47'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-12-15 15:59'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-12-15 15:55'
        message: ''
        version: '1'

---
{{! multiexcerpt name='ide-replaced-by-generator-info'}}
{{#> callout type='warning'}}
Nuxeo IDE is being replaced by the [Nuxeo Generator](https://www.npmjs.com/package/generator-nuxeo) and won’t be maintained any longer. You can take a look at the page [Configure Nuxeo Platform]({{page version='' space='nxdoc' page='configure-nuxeo-platform'}}) to discover how to use the Nuxeo Generator.
{{/callout}}
{{! /multiexcerpt}}

We developed an Eclipse IDE to make it easy to extend the Nuxeo Platform using Eclipse.

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}

### [Running your Projects on the Server]({{page page='running-your-projects-on-the-server'}})

Installing Nuxeo IDE adds a new perspective to Eclipse, called Nuxeo, which enables you to deploy your changes and control the runtime.

1.  [Configuring the Server Launcher]({{page page='running-your-projects-on-the-server#configuringserverlauncher'}})
2.  [Deployment profiles]({{page page='running-your-projects-on-the-server#deploymentprofiles'}})
3.  [Lauching the Server]({{page page='running-your-projects-on-the-server#launchingserver'}})
4.  [Remote debugging]({{page page='running-your-projects-on-the-server#remotedebugging'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}

### [Working with Studio Projects]({{page page='working-with-studio-projects'}})

- [Configuring a Nuxeo Online Services Account]({{page page='configuring-a-nuxeo-online-services-account'}})
- [Binding Studio Projects to an Nuxeo IDE Project]({{page page='binding-studio-projects-to-an-nuxeo-ide-project'}})
- [Deploying a Project with Studio Dependencies]({{page page='deploying-a-project-with-studio-dependencies'}})
- [Settings Eclipse Development Templates]({{page page='settings-eclipse-development-templates'}})

{{/panel}}
</div>
</div>

{{{multiexcerpt 'license' page='NXDOC:Developer Documentation Center'}}}
