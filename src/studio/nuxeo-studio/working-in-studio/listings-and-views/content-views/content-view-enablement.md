---
title: Content View - Enablement
review:
  comment: ''
  date: ''
  status: ok
confluence:
  ajs-parent-page-id: '12912765'
  ajs-parent-page-title: Content Views
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Content+View+-+Enablement
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Content+View+-+Enablement'
  page_id: '20517059'
  shortlink: wxA5AQ
  shortlink_source: 'https://doc.nuxeo.com/x/wxA5AQ'
  source_link: /display/Studio/Content+View+-+Enablement
tree_item_index: 300
history:
  - author: Solen Guitter
    date: '2015-09-07 09:19'
    message: ename page to fix anchor link
    version: '5'
  - author: Solen Guitter
    date: '2014-11-03 19:02'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2014-11-03 18:58'
    message: ''
    version: '3'
  - author: Solen Guitter
    date: '2014-11-03 18:57'
    message: ''
    version: '2'
  - author: Solen Guitter
    date: '2014-10-21 18:41'
    message: ''
    version: '1'
---

{{#> callout type='info' }}
Select the Nuxeo JSF UI target package in your [Application Definition]({{page page='application-definition'}}) for the Content View feature to be available.
{{/callout}}

{{{multiexcerpt 'DeprecatedJSF' page='nxdoc/generic-multi-excerpts'}}}

If you selected the Search content view flag on the [Query & form tab of the content view]({{page version='' space='studio' page='content-view-query-and-form-tab'}}), you get an additional Enablement tab. This tab allows you to define under which circumstances the content view should be displayed in the Search tab drop down list. It shows the options below:

- **Action order**: Select the place of your content view in the Search drop down list. 0 makes the content view the default one.
- **Current user is a member of**: Indicate if the user needs to be member of a specific group to be displayed the search form.
- **Current user is administrator**: Indicate if the search should be restricted to administrators.
- **Custom EL expression**: See the page [Understand Expression and Scripting Languages Used in Nuxeo]({{page space='nxdoc' page='understand-expression-and-scripting-languages-used-in-nuxeo'}}).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content View - Enablement/Content View Enablement tab
    name: Studio-content-view-enablement-tab.png
    studio_modeler#screenshot#up_to_date
--}}
![Content View Enablement tab](nx_asset://c8086bf2-b6f9-4181-a241-364918188226 ?w=600,border=true)

You can report to the page [Filtering Options Reference Page]({{page page='filtering-options-reference-page'}}) for more information about each of these options.
