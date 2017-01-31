---
title: Notes
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141125
    - note
confluence:
    ajs-parent-page-id: '21299527'
    ajs-parent-page-title: Available Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Notes
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Notes'
    page_id: '21299485'
    shortlink: HQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/HQFFAQ'
    source_link: /display/USERDOC60/Notes
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2015-08-28 08:30'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-11-25 17:55'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-03-26 12:26'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-02-24 14:18'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-02-06 17:43'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-01-15 10:07'
        message: Added precision about note default format
        version: '17'
    -
        author: Solen Guitter
        date: '2012-06-19 18:14'
        message: Migrated to Confluence 4.0
        version: '16'
    -
        author: Solen Guitter
        date: '2012-06-19 18:14'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2011-12-23 11:05'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2011-12-23 10:23'
        message: Updated screenshots
        version: '13'
    -
        author: Solen Guitter
        date: '2011-11-23 10:36'
        message: Added related content
        version: '12'
    -
        author: Solen Guitter
        date: '2011-11-23 10:26'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-06-06 14:41'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-06-06 11:35'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-06-06 11:35'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2010-10-20 10:39'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-10-01 14:10'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-10-01 14:10'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-09-27 17:56'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-09-14 15:44'
        message: fixed broken links
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-10 18:40'
        message: fixed broken links
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-26 19:02'
        message: ''
        version: '1'

---
{{! excerpt}}

The note is a document that consists in a text displayed in the **Summary** tab of the document. The note is usually created using the integrated rich editor, displayed in the note creation form. This editor enables layout modifications on the text.

{{! /excerpt}}

![]({{file name='note.png'}} ?w=600,border=true)

The default format of the note is HTML. The other formats available are .txt, .xml and Markdown.

![]({{file name='note-text.png'}} ?w=600,border=true)

A note is composed of the fields below:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Title

</td><td colspan="1">

Note's title

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Text that explains what the note is about.

</td></tr><tr><td colspan="1">

Content

</td><td colspan="1">

Text of the note created using a rich text editor.

</td></tr><tr><td colspan="1">

Format

</td><td colspan="1">

Format of the automatically created file used to export notes from the Nuxeo Platform.

</td></tr></tbody></table></div>

**To create a note:**

{{{multiexcerpt 'create-document' page='Creating Content'}}}

{{#> callout type='tip' heading='Other ways to create a note'}}

You can also create a note by importing a .txt, a .html or a .xml file using [ **Import** button]({{page page='creating-content#import-button'}}) or [drag and drop]({{page page='importing-content-using-drag-and-drop'}}).

{{/callout}}

When the note is created, users can enhance it by adding [comments]({{page page='comments'}}), attached files on it, or just [editing it]({{page page='editing-content'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related User Documentation'}}

- [Creating Content]({{page page='creating-content'}})
- [Editing Content]({{page page='editing-content'}})
- [Working Using Drag and Drop]({{page page='working-using-drag-and-drop'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Customization Documentation'}}

- [How to Override Existing Document Types]({{page space='nxdoc60' page='how-to-override-existing-document-types'}})
- [How to Define a Document Type]({{page space='nxdoc60' page='how-to-define-a-document-type'}})

{{/panel}}</div></div>
