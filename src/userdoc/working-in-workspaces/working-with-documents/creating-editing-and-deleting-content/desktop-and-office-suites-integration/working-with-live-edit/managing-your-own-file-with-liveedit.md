---
title: Managing Your Own File with LiveEdit
review:
    comment: ''
    date: ''
    status: ok
labels:
    - live-edit
toc: true
confluence:
    ajs-parent-page-id: '21299502'
    ajs-parent-page-title: Working with Live Edit
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Managing+Your+Own+File+with+LiveEdit
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Managing+Your+Own+File+with+LiveEdit
    page_id: '21299454'
    shortlink: '-gBFAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-gBFAQ'
    source_link: /display/USERDOC60/Managing+Your+Own+File+with+LiveEdit
history:
    - 
        author: Manon Lumeau
        date: '2014-12-01 10:36'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2014-11-24 15:51'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-02-04 15:29'
        message: Formatting
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:03'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:56'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-06-27 17:22'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-06-27 17:22'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-09-01 10:40'
        message: ''
        version: '2'
    - 
        author: Arnaud Kervern
        date: '2011-08-31 14:24'
        message: ''
        version: '1'

---
{{{multiexcerpt 'LiveEditDeprecated' page='Working with Live Edit'}}}

By default, we recognize default office files (doc, docx, xls, xlsx, odt, ...) for Microsoft Office, OpenOffice.org and LibreOffice. But sometimes, you could be interested in managing other file types with Live Edit, and launching their associated editors.

## With Internet Explorer

Recognized extensions are managed in the Windows Registry. They are simple string values, stored in `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Internet Settings\Accepted Documents` and using this model:

In a .reg file, a new handled extension should looks like: `liveedit_msoffice12_word_template"="application/x-nuxeo-liveedit;ext7=\"vnd.ms-word.template.macroEnabled.12\"`.

The key is a unique name, and in this example, it is `liveedit_msoffice12_word_template`.
The value is built like a MIME-TYPE: `application/x-nuxeo-liveedit;extX="_FILE_MIME_TYPE_"`. In this example, the value is: `application/x-nuxeo-liveedit;ext7="vnd.ms-word.template.macroEnabled.12`.

{{#> callout type='note' heading='Internet Explorer behaviour'}}

With Internet Explorer, Live Edit will open the associated program and save the edited file into the Nuxeo Platform when the program ended.

{{/callout}} {{#> callout type='info' heading='Restart required'}}

Do not forget to restart your browser after making changes.

{{/callout}}

See the attached file to enable all Microsoft Office extensions.

## With Firefox

In the extension preferences form, you can directly add the editor / MIME-TYPE mapping. By doing this, it will be enough to enable a new extension.

{{#> callout type='note' heading='Additional script'}}

With Firefox, you just receive a file descriptor with the file URL and authentication information. You also need to add a script to download the file, start the editor and upload it when finished.

{{/callout}}