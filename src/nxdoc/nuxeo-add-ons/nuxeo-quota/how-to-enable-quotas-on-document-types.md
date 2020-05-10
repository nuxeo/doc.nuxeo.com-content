---
title: 'HOWTO: Enable Quotas on Document Types'
review:
    comment: ''
    date: '2016-12-07'
    status: ok
details:
    howto:
        excerpt: Learn how to enable Nuxeo Quota features on document types other than domains and workspaces.
        level: Beginner
        tool: Nuxeo Studio
        topics: 'Document type, Nuxeo Quota, Statistics'
labels:
    - lts2016-ok
    - quota
    - fdavid
    - howto
    - quotas-component
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '11534351'
    ajs-parent-page-title: Nuxeo Quota
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Enable+Quotas+on+Document+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Enable+Quotas+on+Document+Types'
    page_id: '12914459'
    shortlink: Gw-F
    shortlink_source: 'https://doc.nuxeo.com/x/Gw-F'
    source_link: /display/NXDOC/How+to+Enable+Quotas+on+Document+Types
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 13:36'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-04-14 12:43'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-03-21 10:15'
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

    ```xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
        point="filters">
      <filter id="QUOTA_MANAGABLE_DOCTYPES" append="true">
        <rule grant="true">
          <type>Folder</type>
        </rule>
      </filter>
    </extension>
    ```

    Replace `Folder` in the `<type>` element by the document type on which you want to enable quotas. You can have several `<type>` elements.

    {{#> callout type='note' }}

    Note that MANAGABLE is misspelled in the filter id. This will be corrected in a future Nuxeo version, but the current misspelling will continue to work.

    {{/callout}}


2.  [Update your Nuxeo instance with the Studio customization]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).

{{#> callout type='tip' }}

If you don't want to use Studio and prefer using your IDE, you can just [add a contribution]({{page page='contributing-to-an-extension-using-nuxeo-ide'}}) with the XML above.

{{/callout}}


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentations'}}

- [Nuxeo Quota]({{page page='nuxeo-quota'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
