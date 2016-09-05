---
title: 'Nuxeo Quota: Enabling Quotas on Document Types'
labels:
    - quota
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Nuxeo+Quota%3A+Enabling+Quotas+on+Document+Types
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Nuxeo+Quota%3A+Enabling+Quotas+on+Document+Types
    page_id: '17794964'
    shortlink: lIcPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/lIcPAQ'
    source_link: /display/NXDOC58/Nuxeo+Quota%3A+Enabling+Quotas+on+Document+Types
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:33'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2016-03-21 10:18'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-12-17 16:38'
        message: ''
        version: '1'

---
{{! excerpt}}

By default, [quotas]({{page space='nxdoc' page='nuxeo-quota'}}) are available on domains and workspaces only. It is possible to enable them on other document types using Nuxeo Studio:

{{! /excerpt}}

1.  [Create a new XML extension]({{page space='nxdoc' page='how-to-contribute-to-an-extension'}}) with the following content:

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

If you don't want to use Studio and prefer using your IDE, you can just [add a contribution]({{page page='how-to-contribute-a-simple-configuration-in-nuxeo'}}) with the XML above.

{{/callout}}