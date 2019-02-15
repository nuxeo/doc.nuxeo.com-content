---
title: Content Views
review:
  comment: ''
  date: '2014-11-26'
  status: ok
labels:
  - search
  - content-view
confluence:
  ajs-parent-page-id: '12911803'
  ajs-parent-page-title: Listings & Views
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Content+Views
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Content+Views'
  page_id: '12912765'
  shortlink: fQjF
  shortlink_source: 'https://doc.nuxeo.com/x/fQjF'
  source_link: /display/Studio/Content+Views
tree_item_index: 100
history:
  - author: Anahide Tchertchian
    date: '2014-12-01 19:33'
    message: ''
    version: '36'
  - author: Solen Guitter
    date: '2014-11-26 10:18'
    message: screenshot
    version: '35'
  - author: Solen Guitter
    date: '2014-11-26 09:44'
    message: screenshots
    version: '34'
  - author: Leonard Brazzano
    date: '2014-11-25 20:54'
    message: ''
    version: '33'
  - author: Leonard Brazzano
    date: '2014-11-25 20:54'
    message: ''
    version: '32'
  - author: Leonard Brazzano
    date: '2014-11-25 20:37'
    message: ''
    version: '31'
  - author: Leonard Brazzano
    date: '2014-11-25 20:37'
    message: ''
    version: '30'
  - author: Leonard Brazzano
    date: '2014-11-25 19:50'
    message: ''
    version: '29'
  - author: Leonard Brazzano
    date: '2014-11-25 19:49'
    message: ''
    version: '28'
  - author: Leonard Brazzano
    date: '2014-11-25 19:42'
    message: ''
    version: '27'
  - author: Solen Guitter
    date: '2014-11-05 22:58'
    message: ''
    version: '26'
  - author: Solen Guitter
    date: '2014-10-21 13:09'
    message: ''
    version: '25'
  - author: Solen Guitter
    date: '2014-10-21 12:51'
    message: ''
    version: '24'
  - author: Solen Guitter
    date: '2014-10-21 12:50'
    message: Update screen shots
    version: '23'
  - author: Solen Guitter
    date: '2014-10-20 17:35'
    message: ''
    version: '22'
  - author: Manon Lumeau
    date: '2014-07-04 12:15'
    message: ''
    version: '21'
  - author: Manon Lumeau
    date: '2014-07-04 12:10'
    message: ''
    version: '20'
  - author: Solen Guitter
    date: '2014-01-13 18:37'
    message: ''
    version: '19'
  - author: Benjamin Jalon
    date: '2013-02-11 17:02'
    message: ''
    version: '18'
  - author: Benjamin Jalon
    date: '2013-02-11 16:49'
    message: ''
    version: '17'
  - author: Benjamin Jalon
    date: '2013-02-11 13:14'
    message: ''
    version: '16'
  - author: Benjamin Jalon
    date: '2013-01-15 19:59'
    message: ''
    version: '15'
  - author: Benjamin Jalon
    date: '2013-01-15 19:56'
    message: ''
    version: '14'
  - author: Benjamin Jalon
    date: '2013-01-15 19:55'
    message: ''
    version: '13'
  - author: Benjamin Jalon
    date: '2013-01-15 18:41'
    message: ''
    version: '12'
  - author: Benjamin Jalon
    date: '2013-01-15 18:24'
    message: ''
    version: '11'
  - author: Benjamin Jalon
    date: '2013-01-15 17:52'
    message: ''
    version: '10'
  - author: Benjamin Jalon
    date: '2013-01-15 17:49'
    message: ''
    version: '9'
  - author: Benjamin Jalon
    date: '2013-01-15 09:42'
    message: ''
    version: '8'
  - author: Benjamin Jalon
    date: '2013-01-14 15:54'
    message: ''
    version: '7'
  - author: Benjamin Jalon
    date: '2013-01-14 15:54'
    message: ''
    version: '6'
  - author: Benjamin Jalon
    date: '2013-01-14 15:53'
    message: ''
    version: '5'
  - author: Benjamin Jalon
    date: '2013-01-14 15:48'
    message: ''
    version: '4'
  - author: Benjamin Jalon
    date: '2013-01-14 13:00'
    message: ''
    version: '3'
  - author: Benjamin Jalon
    date: '2013-01-14 12:29'
    message: ''
    version: '2'
  - author: Alain Escaffre
    date: '2013-01-03 10:52'
    message: ''
    version: '1'
---

{{#> callout type='info' }}
Select the Nuxeo JSF UI target package in your [Application Definition]({{page page='application-definition'}}) for the Content View feature to be available.
{{/callout}}

{{{multiexcerpt 'DeprecatedJSF' page='nxdoc/generic-multi-excerpts'}}}

Content view is the Nuxeo technology used to define a list of documents to display. The Nuxeo Platform uses this technology in these following cases:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Content tab Listing</th>
<th colspan="1">Search</th>
</tr>
<tr>
<td colspan="1">![]({{file name='list-view.png' space='userdoc' page='browsing-content'}} ?w=300,h=181)</td>
<td colspan="1">![]({{file name='search-tab.png' space='userdoc' page='default-search'}} ?w=300,h=167)</td>
</tr>
</tbody>
</table>
</div>

A Content View is defined by three notions:

- [A query]({{page page='content-view-query-and-form-tab'}}): defines a request on the document repository to express the list of documents to display,
- [A form]({{page page='form-layouts'}}): lets the user express additional information about the request in your final application (ex: advanced search form, faceted form, post-filtering in content tab),
- [A display result]({{page page='content-view-results'}}): A description of how the listing result is displayed.

Here is how these notions are visible in the Nuxeo Platform interface:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Content tab Listing</th>
<th colspan="1">Search</th>
</tr>
<tr>
<td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content Views.1532009021075/Content View - Content
    name: Content View - Content.png
    addins#screenshot#up_to_date
--}}
![Content View - Content](nx_asset://ed6cdfad-d59e-4ff2-b0fe-c66438841bb6 ?w=300,border=true)</td>
<td colspan="1">{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content Views.1532009021075/Content View - Search tab
    name: Content View - Search tab.png
    addins#screenshot#up_to_date
--}}
![Content View - Search tab](nx_asset://6f67d05d-ebd6-47fe-b38c-3745d52c6ad0 ?w=300,border=true)</td>
</tr>
</tbody>
</table>
</div>

## Content View Configuration Overview

Each part of the content view definition in Studio is dedicated to configure each notion explained above:

- Query definition:
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content Views.1532009021075/Content View - Query Definition
      name: Studio-content-view-query-definition.png
      addins#screenshot#up_to_date
  --}}
  ![Content View - Query Definition](nx_asset://ea36f0ce-04d4-4ef0-af9f-c9a5860aa6fe ?w=600,border=true)
- Form definition:
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content Views.1532009021075/Content View - Form Definition
      name: Studio-content-view-form-definition.png
      addins#screenshot#up_to_date
  --}}
  ![Content View - Form Definition](nx_asset://9f935e93-32c1-4592-9caf-ac0fd698cdbc ?w=600,border=true)
- Result Display definition:
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content Views.1532009021075/Content View - Results Form
      name: Studio-content-view-results-definition.png
      addins#screenshot#up_to_date
  --}}
  ![Content View - Results Form](nx_asset://0a8d3dd3-268e-41de-8dc6-9e26efecffea ?w=600,border=true)

Once you defined your content view, you can use it for these following cases:

- as the Content tab of your document type
- in another tab of your document type
- as a search form in the Search tab (from Nuxeo Platform 6.0)
- as a faceted search (before Nuxeo Platform 6.0)
- as an advanced search (before Nuxeo Platform 6.0)

The following pages explain how to configure each part of a content view.

You can also have a look at the [technical documentation about Content Views](http://doc.nuxeo.com/x/FQ4z).
