---
title: 'HOWTO: Upload Labels Translations in Nuxeo Studio (i18n)'
review:
    comment: ''
    date: '2017-12-14'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: Learn how to upload your own translation of labels in Nuxeo Studio Modeler.
        level: Advanced
        tool: Studio
        topics: 'Labels, Localization, Translation'
labels:
    - lts2016-ok
    - i18n
    - labels
    - translation
    - sguitter
    - howto
    - studio
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235763'
    ajs-parent-page-title: Labels and Translations Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=3867532
    canonical_source: viewpage.action?pageId=3867532
    page_id: '3867532'
    shortlink: jAM7
    shortlink_source: 'https://doc.nuxeo.com/x/jAM7'
    source_link: /pages/viewpage.action?pageId=3867532
tree_item_index: 200
history:
    -
        author: Anahide Tchertchian
        date: '2015-05-22 14:47'
        message: 'emove warn about server restart: message bundles hotreload does work correctl'
        version: '18'
    -
        author: Solen Guitter
        date: '2014-12-01 21:59'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-15 18:02'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-15 17:59'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:14'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-01-02 10:47'
        message: ''
        version: '13'
    -
        author: Laurent Doguin
        date: '2013-12-30 15:33'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-05-27 15:24'
        message: 'Added note on i18n key naming rules (no rule) '
        version: '11'
    -
        author: Solen Guitter
        date: '2011-09-05 16:31'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Solen Guitter
        date: '2011-09-05 16:31'
        message: ''
        version: '9'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:16'
        message: ''
        version: '8'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:15'
        message: ''
        version: '7'
    -
        author: Darcy Carrié
        date: '2011-02-17 12:49'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-12-30 16:04'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-09-14 16:04'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-09-06 16:40'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-09-06 16:38'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-09-06 16:13'
        message: ''
        version: '1'

---

{{#> callout type='info'}}
This page is about label translation for Nuxeo JSF UI. For Web UI labels, please refer to the page [HOWTO: Manage Translations]({{page version='' space='nxdoc' page='web-ui-managing-translations'}}).
{{/callout}}

The Nuxeo Platform relies on standard i18n principles for translating text in the user interface. You need to upload a `.properties` file, suffixed with a four-letter locale code depending on the language you target. Studio allows you to upload `.properties` files to be deployed with the customization plugin. It's useful:

*   To translate new labels that appear in the plugin, such as form's fields name, lifecycle transition names, document type names, new vocabularies' labels, etc
*   To override existing labels definitions (when you want to change existing translations).

There are no naming rules for i18n keys: you can use the key format that is most convenient for you and use it directly in the `.properties` file.

**To upload English translations for your plugin:**

1.  Prepare a properties file named `messages_en_US.properties` with keys and label values like this one. For instance, if you have a document type called "ProfessionalServiceProposal", you can add the following line:
    ```properties
    ProfessionalServiceProposal = Professional service proposal
    ```
    to a file like this:
    ```properties
    label.security.permission.validation.workflow.validation = Validation
    label.security.permission.validation.document.validated = Document Validated
    label.security.permission.validation.validation.rejected = Document Rejected
    ```
2.  In Studio Modeler, go to **Resources** and upload the file in the **i18n files** section.
    ![]({{file name='studio-resource-editor-empty.png'}} ?w=650,border=true)
3.  Repeat as needed with other languages, adding other files: `messages_fr_FR.properties` (French), `messages_es_ES.properties` (Spanish), `messages_ar_SA.properties` (Arabic), ... (take a look at [HOWTO: Translate Nuxeo]({{page page='how-to-translate-the-nuxeo-platform'}}) for a list of all the codes available)
4.  [Update your Nuxeo instance with your Studio customizations]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).
