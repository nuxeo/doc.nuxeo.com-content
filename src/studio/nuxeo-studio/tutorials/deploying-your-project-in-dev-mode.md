---
title: Deploying Your Project in Dev Mode
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto-deployement
confluence:
    ajs-parent-page-id: '12912677'
    ajs-parent-page-title: Tutorials
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Deploying+Your+Project+in+Dev+Mode
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Deploying+Your+Project+in+Dev+Mode'
    page_id: '3867020'
    shortlink: jAE7
    shortlink_source: 'https://doc.nuxeo.com/x/jAE7'
    source_link: /display/Studio/Deploying+Your+Project+in+Dev+Mode
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:29'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-03-21 09:30'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-10-08 10:07'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-10-08 10:05'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2014-10-07 00:28'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-10-07 00:27'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2014-05-05 15:06'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-05-05 14:57'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-05-05 14:44'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-02-26 18:29'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-12-07 16:42'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-09-05 16:40'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '9'
    -
        author: Solen Guitter
        date: '2011-09-05 16:40'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '8'
    -
        author: Solen Guitter
        date: '2011-09-05 16:40'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Solen Guitter
        date: '2011-09-05 16:40'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-04-26 10:46'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-04-26 10:03'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-12-22 12:36'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-08-12 01:16'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-08-12 01:16'
        message: ''
        version: '1'

---
{{#> callout type='note' }}

The Dev mode, as its name stands, is for development only. You should always deploy a released version of your project on a production instance.
{{/callout}}

{{! excerpt}}

You can update your Nuxeo Platform instance with your Studio configuration by going to the&nbsp;[**Admin Center**]({{page space='nxdoc' page='admin-tab-overview'}})&nbsp;> **Update Center**, on the **Studio** tab.

{{! /excerpt}}



1.  Make sure your Nuxeo Platform instance is [registered]({{page space='nxdoc' page='registering-your-nuxeo-instance'}}).
2.  Go to the **Admin Center** > **Update Center** > **Studio** tab.
3.  Activate the Dev mode by clicking on the dedicated button.
    It says you need to restart but this is actually not mandatory.
4.  Click on the **Update** button.
5.  Your Studio project configuration is automatically downloaded and (re)deployed on your Nuxeo Platform.
{{#> callout type='info' }}In case your Studio project has [several branches]({{page page='branch-management'}}), note that deploying your customization will deploy the registered user's current branch.{{/callout}}
6.  You can do it as many time as you do modifications in Studio. We actually recommend you to be very iterative, and not to let to many changes go before updating your Nuxeo Platform with the newest Studio project configuration.

**To deploy a specific branch on your application:**

1.  Make sure the branch you want to deploy is the current branch in Nuxeo Studio.
2.  Update your application with the Studio configuration.

{{#> callout type='info' }}

The Studio project is available as a Nuxeo Package. Thus, all [the nuxeoctl's mp-* commands]({{page space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}) can be used to list, download, install, uninstall, upgrade a Nuxeo Studio configuration.
{{/callout}}


<div style="width: 640px; height: 480px; margin: 10px; position: relative;">
<iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/eb497f4a-ac4a-46f5-879a-376372ffc333"></iframe>
<a href="https://www.lucidchart.com/pages/examples/mind_mapping_software" style="margin: 0; padding: 0; border: none; display: inline-block; position: absolute; bottom: 5px; left: 5px;"><img alt="mind mapping software"title="Lucidchart online diagrams"style="width: 100px; height: 30px; margin: 0; padding: 0; border-image: none; border: none; display: block"src="https://www.lucidchart.com/img/diagrams-lucidchart.png"/></a>
</div>

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

* [Installing the Studio JAR Manually]({{page page='installing-the-studio-jar-manually'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
