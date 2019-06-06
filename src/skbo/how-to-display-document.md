---
title: How to display documents as thumbnails by default in JSF
description: How to display documents as thumbnails by default in JSF
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - studio-customization
    - jsf
    - studio
    - thumbnail

---
# How to display documents as thumbnails by default in JSF?
## Problem
For some document types, I would like the default display to appear as thumbnails instead of a list.
## Solution
Let’s assume you have a custom type ThumbnailWS extending WorkSpace.

Let’s assume ThumbnailWS has as content the document ThumbnailView. In Studio, check in the Result tab the box **"Display layout mode selection"**.

Add in **Studio Modeler > Advanced Settings > XML Extensions** the extension

    <require>org.nuxeo.ecm.webapp.contentview.contrib</require>
      <extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService" point="contentViews">
        <contentView name="ThumbnailView">
          <resultLayouts>
            <layout iconPath="/icons/document_listing_icon_2_columns_icon.png" name="document_listing_thumbnail" showEditRows="true" showSlideshow="true" title="document_thumbnail_listing" translateTitle="true"/>
            <layout iconPath="/icons/document_listing_icon.png" name="document_listing_table" showCSVExport="true" showEditColumns="true" showSpreadsheet="true" title="document_listing" translateTitle="true"/>
          </resultLayouts>
        </contentView>
    </extension>

In Nuxeo default display, let’s display the ThumbnailWS workspace containing Picture documents: they are displayed as list.  
Hot-reload the Studio project, then display the ThumbnailWS workspace again: they are displayed as thumbnails.

(The above extension inverses the presentation order of the listing/thumbnail icons for a given content view, here ThumbailView)


2019-06-01T17:37:28.085Z
## (c) Nuxeo Support Knowledge Base Outline 2019
