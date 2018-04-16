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
Watch the related courses on Nuxeo University
- [Expert Session on External Templates](https://university.nuxeo.com/learn/public/course/view/elearning/135/expert-session-studio-external-templates-videoutils).
![]({{file version='' space='nxdoc' page='university' name='university-external-template.png'}} ?w=450,border=true)
{{/callout}}

**To import an Application Template:**

{{! multiexcerpt name='application-template-import'}}

1.  Go to **Configuration** > **External Templates**
    All the available templates are displayed. If a template is not compatible with your project target version (ex: Nuxeo DM 5.4.0, Nuxeo DM 5.4.2), it is displayed with a little sign ![]({{file name='unabled_small.png'}} ?w=16,h=16) that says "not compatible".

2.  Click on the **Details** link of the template that you're interested in to check what the template includes.
    A window pops up that displays the list of all elements the template includes: definition of new documents, automation chains, etc, new icons and images, new widgets...
    ![]({{file name='STUDIO_application_template_details.png'}} ?w=350,border=true)
3.  Click on **Import this package**.
4.  On the confirmation window that pops up, click on **OK**.
    A feedback window pops up to indicate that the import was successful.
    ![]({{file name='STUDIO_application_template_imported.png'}} ?w=350,border=true)
5.  Click on **OK**.
    The icon ![]({{file name='STUDIO_tick_icon.png'}} ?w=18,h=16) is displayed next to the imported template, indicating that this template has been imported.
    Your project is reloaded with all the template's features. You can now browse your project with the new imported features and edit them. If you modify something, Studio will tell you that you broke some other configuration by displaying the errors, and you'll be able to adapt every dependent thing. Also you'll be able to rename the imported features if you need.

{{! /multiexcerpt}} {{#> callout type='info' heading='Using several application templates'}}

Some templates declare the same object. For instance two templates can declare the "Folder" document type. In that case, Nuxeo Studio will refuse to import the second template until you rename the previous object, to avoid collision.
![]({{file name='Screen shot 2011-07-01 at 10.56.20.png'}} ?w=350,h=310,border=true)

{{/callout}}
