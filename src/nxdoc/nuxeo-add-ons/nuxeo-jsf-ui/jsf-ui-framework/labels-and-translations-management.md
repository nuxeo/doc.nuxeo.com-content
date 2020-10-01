---
title: Labels and Translations Management
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - todo
    - translation
    - sguitter
    - nxdoc-697
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '16089312'
    ajs-parent-page-title: JSF UI Framework
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Labels+and+Translations+Management
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Labels+and+Translations+Management'
    page_id: '19235763'
    shortlink: s4MlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/s4MlAQ'
    source_link: /display/NXDOC/Labels+and+Translations+Management
tree_item_index: 1300
history:
    -
        author: Solen Guitter
        date: '2015-10-12 14:09'
        message: ix formatting issue
        version: '4'
    -
        author: Solen Guitter
        date: '2014-06-12 16:42'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:11'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-05-05 23:57'
        message: ''
        version: '1'

---
{{! excerpt}}

The Framework supports resolution of translations using the standard Java Internationalisation mechanism.

{{! /excerpt}}

Labels can be gathered in .properties files and translated in properties file with the corresponding language suffix. Because of the modularity of the Nuxeo Platform, a specific mechanism allows the Nuxeo Runtime to "build" the complete resources file before deploying it in the web application. You can read the [Deployment Model of Nuxeo Platform]({{page page='understanding-bundles-deployment'}}) documentation page for a better understanding. Your plugin must declare the translation resources to the Nuxeo Runtime so that they are taken into account.

*   Let your resources files somewhere in your plugin hierarchy, for instance `OSGI-INF/l10n`
*   Add an "append" instruction to the `deployment-fragment.xml` file of your plugin (and add this file if it is not added yet) for each translation file

    ```xml
     <append from="nuxeo.faceted.search.tmp/OSGI-INF/l10n/messages_fr.properties"
          to="nuxeo.war/WEB-INF/classes/messages_fr.properties" addNewLine="true" />
    ```

Then, you can reference your labels keys from the various context that are provided in the application:

*   on Facelet Templates:&nbsp;

    ```xml
     <h:outputText value="#{messages['myLabelKey']}" />
    ```

*   From a Seam Component (TODO)

*   Using the [Nuxeo Widgets]({{page page='basic-widget-types'}}): most of the Nuxeo widgets hold a "localize" boolean attribute. When set to true, the label attribute content is considered as a key and resolved at display time.

You may want more information about [default labels of the Back Office]({{page page='how-to-translate-the-nuxeo-platform'}}).

You can also use Nuxeo Studio to [upload label translations]({{page page='how-to-upload-labels-translations-in-nuxeo-studio-i18n'}}).&nbsp;
