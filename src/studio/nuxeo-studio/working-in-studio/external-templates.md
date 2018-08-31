---
title: External Templates
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: External+Templates
    canonical_source: 'https://doc.nuxeo.com/display/Studio/External+Templates'
    page_id: '8683945'
    shortlink: qYGE
    shortlink_source: 'https://doc.nuxeo.com/x/qYGE'
    source_link: /display/Studio/External+Templates
tree_item_index: 900
labels:
  - university
history:
    -
        author: Manon Lumeau
        date: '2015-08-07 16:21'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-01-13 10:54'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-01-13 10:53'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-02-26 17:30'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:40'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:40'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:24'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:23'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:21'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:16'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:13'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:11'
        message: ''
        version: '1'

---
Nuxeo Studio includes an Application Templates library composed of Studio projects or samples that you can use as a basis for your own project. This enables you to import new document types, lifecycles, workflows, features in your project as a template that you can edit to adapt it to your project.

{{#> callout type='info'}}
Watch the related courses on Nuxeo University
- [Expert Session on the Video Utils External Template](https://university.nuxeo.com/learn/public/course/view/elearning/135/expert-session-studio-external-templates-videoutils)
- [Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/External Template/University Videoutils
    name: university_videoutils.png
    studio_modeler#screenshot#up_to_date
--}}
![University Videoutils](nx_asset://0c9da5ef-bbe6-4bcb-a243-340f048a0aa1 ?w=450,border=true)
{{/callout}}

To make Nuxeo Studio discovery easier, we automatically import the [Default configuration]({{page space='Studio' page='Default configuration+templates'}}) template that corresponds to your target application when a Studio project is created. You can then see how the configuration is done and start your project from it.

In the Application Templates library, you will find very complex ready-to-use templates for complete function use cases (such as Human resources - Vacation request workflow) or some unitary cases, such as Custom Doc ID generation or Nuxeo School: Sending emails.

For each application template you're displayed some a set of information:

*   **Project version**: The version number of the application template.
*   **Target version**: The version of the Nuxeo Platform and possible add-ons required to install the template.
*   **Import this package**: Click on this button to import the package that you want and follow the instructions. This button is displayed only if your Studio project is configured for a compatible target version of the template.
*   **Details**: Click on this button to be displayed the list of Studio configuration items defined by the template.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/External Template/Application Templates
    name: application_templates.png
    studio_modeler#screenshot#up_to_date
--}}
![Application Templates](nx_asset://5901fa85-4b6e-4030-8123-ce20c9441fd5 ?w=650,border=true)

For more information about application templates you can see the page [Using Application Templates]({{page page='using-application-templates'}}) and [the detailed documentation for each of them]({{page page='templates-reference'}}).

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Using Application Templates]({{page page='using-application-templates'}})
- [Default configuration templates]({{page page='default-configuration-templates'}})
- [Templates reference]({{page page='templates-reference'}})

{{/panel}}
</div>
<div class="column medium-6">
</div>
</div>
