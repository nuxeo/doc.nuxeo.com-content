---
title: Nuxeo CSV
labels:
    - import
    - nuxeo-csv
    - csv
toc: true
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Nuxeo+CSV
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Nuxeo+CSV'
    page_id: '16810060'
    shortlink: TIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TIAAAQ'
    source_link: /display/NXDOC58/Nuxeo+CSV
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:45'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2016-03-11 10:37'
        message: 'Merge ADMINDOC with NXDOC    '
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-16 17:04'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-10-04 18:36'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-08-02 20:01'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

{{{excerpt 'USERDOC58:Nuxeo CSV'}}}

## Installation

The Nuxeo CSV package requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc58' page='installing-a-new-package-on-your-instance'}}).

After the package is installed, users have a **Import a CSV file** button available in workspaces, folders and in any document where they can import files.

![]({{file name='nuxeo-csv-button.png'}} ?w=650,h=165,border=true)

## Configuration: Enabling File Upload

The Nuxeo CSV addon enables users to create file documents and upload their main attachment at the same time. This requires to configure where the server will take the attachments. This is done adding the parameter&nbsp;`nuxeo.csv.blobs.folder` in the server [nuxeo.conf]({{page space='admindoc58' page='configuration-parameters-index-nuxeoconf'}}) and giving him a value that is the path to a folder that can be accessed by the server.

## Using Nuxeo CSV

{{! excerpt}}

If you installed the Nuxeo CSV addon from the Nuxeo Marketplace, you'll probably want to enable CSV import on the document types you defined, either in Studio or with some code. Here is how to do that.

{{! /excerpt}}

1.  In&nbsp;[Studio]({{page space='studio'}}), in the&nbsp;**Advanced Settings**&nbsp;menu, click on&nbsp;**XML Extensions**.
2.  Click on&nbsp;**New**&nbsp;to create a new extension.
3.  Give it an ID and click on&nbsp;**Next**.

    {{#> callout type='tip' }}

    You may want to check the [Studio naming conventions]({{page space='studio' page='naming-conventions'}}).

    {{/callout}}
4.  Paste the following content in the text area and fill in the&nbsp;`<type>`&nbsp;tag with the ID of the document type on which you want to enable CSV import.

    ```xml
    <require>org.nuxeo.ecm.platform.actions</require>
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="filters">
      <filter id="importFile" append="true">
        <rule grant="true">
          <permission>AddChildren</permission>
          <type>YourCustomTypeID</type>
        </rule>
      </filter>
    </extension>
    ```

5.  In the XML extension, put as many&nbsp;`<type>`&nbsp;tags as documents types on which CSV import should be enabled.
6.  Click on&nbsp;**Save**.
    After you update your Nuxeo Platform instance, your document type(s) will have the&nbsp;**Import a CSV file**&nbsp;button.

{{#> callout type='tip' }}

If you don't want to use Studio and prefer using your IDE, you can just [add a contribution]({{page page='how-to-contribute-a-simple-configuration-in-nuxeo'}}) with the XML above.

{{/callout}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>