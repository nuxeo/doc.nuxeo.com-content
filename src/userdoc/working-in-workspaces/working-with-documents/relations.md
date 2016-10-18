---
title: Relations
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141201
    - relations
confluence:
    ajs-parent-page-id: '21299491'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Relations
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Relations'
    page_id: '21299471'
    shortlink: DwFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DwFFAQ'
    source_link: /display/USERDOC60/Relations
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-08-31 12:53'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-01-22 15:50'
        message: Add related topics
        version: '10'
    -
        author: Solen Guitter
        date: '2013-10-22 18:11'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-24 10:02'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-24 10:02'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-06-06 11:42'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-12-01 11:20'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-10-01 14:17'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-10-01 14:16'
        message: resized screenshots
        version: '3'
    -
        author: Solen Guitter
        date: '2010-10-01 14:16'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-27 18:48'
        message: ''
        version: '1'

---
&nbsp;

Relations are information that connect the application's documents with other documents or external resources. Documents are thus part of a coherent and organized structure.

A summary of the document's relations is displayed in the **Summary** tab.
![]({{file name='relations-summary-tab.png'}} ?w=650,border=true)
You can also see all the document's relations in the **Relations** tab of the document. In **Relations** tab, relations are sorted by outgoing and incoming relations. Outgoing relations are relations that were created from the current document. Incoming relations are relations which were created from another document and to the current document.
The objects of the relation are hyperlinks. Click on the object's name to consult it.

Available relations are:

*   reference relation (references, is referenced by),
*   basis relation (is based on, is base for),
*   replacement relation (replaces, is replaced by),
*   requirement relation (requires, is required by),
*   compliance relation (conforms to, has conform).

## Adding a Relation

You need to have writing or management rights to add relations on a document.

You can create a relation from a document to:

*   another document on the application,
*   an external document (using URI),
*   a text.

You can create relations between documents from different workspaces or domains.

When you add a relation on a document, it creates what we call an "outgoing" relation. The document to which you added the relation automatically has an "incoming" relation.

**To create a relation:**

1.  Click on the **Relations** tab of the document.
2.  Click on the **Add a new relation** link.
    The relation creation form is displayed under the link.
    ![]({{file name='relations-creation-form.png'}} ?w=500,border=true)
3.  Fill in the relation creation form.
4.  Click on the **Add** button.
    The relation is displayed as an outgoing relation, under the relation creation form.
    ![]({{file name='relations-outgoing.png'}} ?w=725,border=true)
    An incoming relation is automatically created in the target document's **Relations** tab, that directs to the source document of the relation.
    ![]({{file name='incoming-relations.png'}} ?w=725,border=true)
    Relations are also displayed in the **Summary** tab of the document.

## Deleting a Relation

You need to have writing or management rights to delete the relations of a document.

You can delete outgoing relations only.

**To delete a relation:**

1.  Click on the **Relations** tab of the document.
2.  Click on the **Delete** link corresponding to the relation.
    The relation is deleted and does not appear in the table anymore. It is also removed from the incoming relations of the target document.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [How to Add New Relation Types]({{page page='how-to-add-new-relation-types'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
