---
title: Local Search Configurations
labels:
    - local-configuration
    - faceted-search
    - advanced-search
toc: true
confluence:
    ajs-parent-page-id: '16092668'
    ajs-parent-page-title: Managing a Workspace
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Local+Search+Configurations
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Local+Search+Configurations'
    page_id: '16092607'
    shortlink: v431
    shortlink_source: 'https://doc.nuxeo.com/x/v431'
    source_link: /display/USERDOC58/Local+Search+Configurations
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:29'
        message: ''
        version: '17'
    - 
        author: Manon Lumeau
        date: '2015-08-28 14:21'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-31 14:00'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:50'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:38'
        message: Removed related topics from TOC
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:38'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-06-19 14:19'
        message: Migrated to Confluence 4.0
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-06-19 14:19'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-19 14:18'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-06-18 17:48'
        message: Updated screenshots
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-11 23:43'
        message: Updated screenshots
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:14'
        message: Removed 5.4 references and added toc
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:02'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-08 18:11'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-08 18:07'
        message: Added related content
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:30'
        message: added screeshots
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-05-23 19:37'
        message: ''
        version: '1'

---
&nbsp;

## Changing Advanced Search Form

You can have only one advanced search form enabled.

**To enable a contributed advanced search form:**

1.  Click on the **Manage** tab of the space.
2.  Click on the **Local configuration** sub-tab.
3.  If needed, click on the **Enable** link of the search configuration.
    The default advanced search form provided in Nuxeo is selected in the "Advanced search view" drop down list.
4.  In the "Advanced search view" drop down list, select the advanced search form that you want to enable.
    ![]({{file name='DM-custom_advanced_search_form.png'}} ?w=650,border=true)
5.  Click on the **Save** button.
    When users click on the **Advanced search** link from the current space and one of its sub-space, the selected advanced search form is displayed.

## Changing Faceted Search

It is possible to enable several faceted searches on a space. This allows users to have several forms and possibly predefined searches that they can edit.

{{#> callout type='info' heading='Faceted search availability'}}

Faceted search is available on the Document Management module.

{{/callout}}

**To enable contributed faceted searches:**

1.  Click on the **Manage** tab of the space.
2.  Click on the **Local configuration** sub-tab.
3.  If needed, click on the **Enable** link of the faceted search configuration.
    The default faceted search provided in the Nuxeo Platform and the list of contributed faceted searches is displayed.
4.  Move the faceted searches you want to enable from the space to the "Enabled content view" list.
    ![]({{file name='DM-faceted_search_configuration.png'}} ?w=650,border=true)
5.  Click on the **Save** button.
    Users that have access to the space now have the selected faceted searches available in the Faceted search tab of the left pane.

{{#> callout type='tip' heading='Removing a faceted search'}}

To remove a faceted search, move it back to the "Existing content view" list on the left and click **Save**.

{{/callout}}

&nbsp;

&nbsp;