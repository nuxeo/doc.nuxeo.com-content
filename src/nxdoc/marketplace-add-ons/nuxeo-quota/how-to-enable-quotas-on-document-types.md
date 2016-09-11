---
title: How to Enable Quotas on Document Types
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to enable Nuxeo Quota features on document types other
            than domains and workspaces.
        level: Beginner
        tool: Nuxeo Studio
        topics: 'Document type, Nuxeo Quota, Statistics'
labels:
    - quotas-component
    - lts2015-not-ok
    - howto
    - quota
confluence:
    ajs-parent-page-id: '28475531'
    ajs-parent-page-title: Nuxeo Quota
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Enable+Quotas+on+Document+Types
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/How+to+Enable+Quotas+on+Document+Types
    page_id: '28475673'
    shortlink: GYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GYGyAQ'
    source_link: /display/NXDOC710/How+to+Enable+Quotas+on+Document+Types
history:
    - 
        author: Manon Lumeau
        date: '2016-03-21 10:21'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:31'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-11-30 23:24'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-11-30 23:22'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-06-12 15:06'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-12-17 16:39'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-12-17 16:34'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-12-12 11:19'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-12-12 11:17'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-12-12 11:17'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-06-20 14:28'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-02-28 18:49'
        message: ''
        version: '1'

---
{{! excerpt}}

By default, [quotas]({{page page='nuxeo-quota'}}) are available on domains and workspaces only. It is possible to enable them on other document types using Nuxeo Studio.

{{! /excerpt}}

1.  [Create a new XML extension]({{page page='how-to-contribute-to-an-extension'}}) with the following content:

    ```html/xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
        point="filters">
        <filter id="QUOTA_MANAGABLE_DOCTYPES" append="true">
          <rule grant="true">
            <type>Folder</type>
          </rule>
        </filter>
    </extension>
    ```

    Replace Folder in the <type> tag by the document type(s) on which you want to enable quotas.

2.  [Update your Nuxeo instance with the Studio customization]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).

{{#> callout type='tip' }}

If you don't want to use Studio and prefer using your IDE, you can just [add a contribution]({{page page='contributing-to-an-extension-using-nuxeo-ide'}}) with the XML above.

{{/callout}}

&nbsp;

* * *