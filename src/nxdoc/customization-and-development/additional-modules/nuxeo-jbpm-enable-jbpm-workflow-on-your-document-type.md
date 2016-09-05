---
title: 'Nuxeo jBPM: Enable jBPM Workflow on Your Document Type'
labels:
    - howto
    - create-task-operation
    - jbpm
    - howto-extension
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Nuxeo+jBPM%3A+Enable+jBPM+Workflow+on+Your+Document+Type
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Nuxeo+jBPM%3A+Enable+jBPM+Workflow+on+Your+Document+Type
    page_id: '2949293'
    shortlink: rQAt
    shortlink_source: 'https://doc.nuxeo.com/x/rQAt'
    source_link: >-
        /display/NXDOC58/Nuxeo+jBPM%3A+Enable+jBPM+Workflow+on+Your+Document+Type
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:12'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-06-13 10:47'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-06-12 11:26'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-07-17 22:36'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-07-01 10:54'
        message: Updated operation link to use Explorer
        version: '18'
    - 
        author: Alain Escaffre
        date: '2013-04-04 18:37'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2012-11-27 11:20'
        message: ''
        version: '16'
    - 
        author: Anahide Tchertchian
        date: '2011-09-29 12:08'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Anahide Tchertchian
        date: '2011-09-29 12:08'
        message: ''
        version: '14'
    - 
        author: Anahide Tchertchian
        date: '2011-09-29 12:08'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-09-01 17:15'
        message: added link to createTask operation
        version: '12'
    - 
        author: Anahide Tchertchian
        date: '2011-08-24 15:51'
        message: ''
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2011-08-24 15:51'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-07-19 17:37'
        message: Updated instructions with new menu labels
        version: '9'
    - 
        author: Alain Escaffre
        date: '2011-03-04 07:00'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-01-13 10:17'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-01-13 10:16'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-09-15 11:40'
        message: ''
        version: '5'
    - 
        author: Wojciech Sulejman
        date: '2010-08-30 15:55'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-06-04 18:59'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-06-04 18:56'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-06-04 16:59'
        message: ''
        version: '1'

---
{{#> callout type='note' }}

This documentation applies to target versions of the Nuxeo Platform up to 5.5\. It also applies to later versions if the&nbsp;[<span style="color: rgb(0,0,0);">j</span>BPM add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-jbpm) (<span style="color: rgb(0,0,0);">nuxeo-platform-jbpm</span>) is installed.

{{/callout}}

By default, the workflow is not enabled on your custom document types (this is done by default from Studio version 2.4).

You need to declare two distinct extensions from the **Advanced Settings** > **XML Extension** menu.
Copy the content of the extensions below and replace "CUSTOM DOCTYPE ID" by your document type ID.

*   The first extension lists the workflows you want to be available for your custom document types.

    ```
     <extension target="org.nuxeo.ecm.platform.jbpm.core.JbpmService"
        point="typeFilter">

        <type name="CUSTOM DOCTYPE ID">
          <processDefinition>review_parallel</processDefinition>
          <processDefinition>review_approbation</processDefinition>
        </type>

     </extension>

    ```

*   The second extension says that the default workflow is available for your custom document type. Note that since Nuxeo version 5.4.3, this contribution is no more needed:

    ```
      <extension target="org.nuxeo.ecm.platform.actions.ActionService"
        point="filters">

        <filter id="jbpm-process" append="true">
          <rule grant="true">
            <type>CUSTOM DOCTYPE ID</type>
          </rule>
        </filter>

      </extension>

    ```

{{! excerpt}}

This will be useful if you want to use the jBPM workflows. Default workflows enable you to control the life cycle state through a series or a set of human validation tasks configured by the the workflow initiator himself.

{{! /excerpt}}

If you want to implement a workflow that is more "controlled", not built by the end user, you can leverage the ["CreateTask" Operation](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Workflow.CreateTask), such as it is done in [this simple tutorial]({{page space='nxdoc' page='one-step-validation-flow-based-on-lifecycle-only'}}). Tasks created with the CreateTask operation appear on the Summary tab.

&nbsp;

* * *