---
title: Using Application Templates
review:
    comment: ''
    date: ''
    status: ok
labels:
    - application-template
confluence:
    ajs-parent-page-id: '8683945'
    ajs-parent-page-title: External Templates
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Using+Application+Templates
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Using+Application+Templates'
    page_id: '7537365'
    shortlink: 1QJz
    shortlink_source: 'https://doc.nuxeo.com/x/1QJz'
    source_link: /display/Studio/Using+Application+Templates
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-04-26 12:30'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-02-26 16:07'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:21'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:21'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:18'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:15'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-08-31 11:54'
        message: Added default configuration templates description
        version: '6'
    -
        author: Alain Escaffre
        date: '2011-07-13 12:22'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2011-07-01 11:00'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-06-30 10:31'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-06-29 18:17'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-06-29 11:10'
        message: ''
        version: '1'
---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University<br>[Expert Session on External Templates](https://university.nuxeo.com/learn/public/course/view/elearning/135/expert-session-studio-external-templates-videoutils).![]({{file version='' space='nxdoc' page='university' name='university-external-template.png'}} ?w=450,border=true)
{{/callout}}

**To import an Application Template:**

{{! multiexcerpt name='application-template-import'}}

1.  Go to **Configuration** > **External Templates**
    All the available templates are displayed. If this icon ![]({{file name='unabled_small.png'}} ?w=16,h=16) is displayed, the template is not compatible with your project target version (ex: Nuxeo Platform 10.10.0).

2.  Click on **Details** to check what the template that you're interested in includes.
    A pop-up displays the list of all elements the template includes: definition of new documents, automation chains, icons, images, widgets...
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Using Application Templates/Application Template details
    name: STUDIO_application_template_details.png
    studio_modeler#popup#up_to_date
    --}}
    ![Application Template details ](nx_asset://a9c5181c-0426-47be-924a-d60a21595afb ?w=350,border=true)
3.  Click on **Import this package**.
4.  On the confirmation window, click on **OK**.<br>
    A pop-up appears, indicating that the import was successful.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Using Application Templates/Application Template Imported
    name: STUDIO_application_template_imported.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![Application Template Imported](nx_asset://f6b1df76-9744-4bf7-b67c-14da77c957b7 ?w=350,border=true)
5.  Click on **OK**.<br>
    The icon ![]({{file name='STUDIO_tick_icon.png'}} ?w=18,h=16) is displayed next to the imported template, indicating that this template has been imported.
    Your project is reloaded with all the template's features.You can now browse your project with the new imported features and edit them.<br>
    If you modify something, Studio will indicate you that you broke some other configuration by displaying the errors, and you'll be able to adapt every dependent item. Also you'll be able to rename the imported features if needed.

{{! /multiexcerpt}} {{#> callout type='info' heading='Using several application templates'}}
Some templates declare the same object. For instance two templates can declare the "Folder" document type. In that case, Nuxeo Studio will refuse to import the second template until you rename the previous object, to avoid collision.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Using Application Templates/Application Template Import Result
    name: STUDIO_application_template_import_result.png
    studio_modeler#screenshot#up_to_date
--}}
![Application Template Import Result](nx_asset://698b4766-899d-4876-a33c-e9a191bb297d ?w=350,border=true)
{{/callout}}
