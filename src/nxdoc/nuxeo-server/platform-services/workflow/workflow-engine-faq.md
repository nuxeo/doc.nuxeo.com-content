---
title: Workflow Engine FAQ
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - faq
    - workflow
    - grenard
    - lts2017-ok
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Engine+FAQ
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Engine+FAQ'
    page_id: '11534725'
    shortlink: hQGw
    shortlink_source: 'https://doc.nuxeo.com/x/hQGw'
    source_link: /display/NXDOC/Workflow+Engine+FAQ
tree_item_index: 1200
history:
    -
        author: Solen Guitter
        date: '2016-08-17 12:23'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-08-17 12:23'
        message: Remove 5.5 question
        version: '29'
    -
        author: Solen Guitter
        date: '2016-08-17 12:22'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2016-08-17 12:22'
        message: 'Remove "since 5.7.2"'
        version: '27'
    -
        author: Thibaud Arguillere
        date: '2014-06-23 20:48'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2013-10-21 13:46'
        message: ''
        version: '25'
    -
        author: Mariana Cedica
        date: '2013-08-06 18:04'
        message: ''
        version: '24'
    -
        author: Mariana Cedica
        date: '2013-08-06 18:03'
        message: ''
        version: '23'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 13:58'
        message: Updated escalation answer
        version: '22'
    -
        author: Mariana Cedica
        date: '2013-07-11 10:50'
        message: ''
        version: '21'
    -
        author: Mariana Cedica
        date: '2013-07-11 10:39'
        message: ''
        version: '20'
    -
        author: Mariana Cedica
        date: '2013-07-11 10:29'
        message: ''
        version: '19'
    -
        author: Mariana Cedica
        date: '2013-07-09 18:06'
        message: ''
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 16:26'
        message: Added anchor to be used for linkback
        version: '17'
    -
        author: Mariana Cedica
        date: '2013-07-03 16:59'
        message: ''
        version: '16'
    -
        author: Mariana Cedica
        date: '2013-06-27 17:17'
        message: ''
        version: '15'
    -
        author: Mariana Cedica
        date: '2013-06-27 17:16'
        message: ''
        version: '14'
    -
        author: Mariana Cedica
        date: '2013-05-27 14:26'
        message: ''
        version: '13'
    -
        author: Mariana Cedica
        date: '2013-05-27 14:25'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-05-27 14:25'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-05-22 17:59'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-01-24 12:37'
        message: ''
        version: '9'
    -
        author: Mariana Cedica
        date: '2013-01-02 15:34'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2012-11-22 14:06'
        message: ''
        version: '7'
    -
        author: Mariana Cedica
        date: '2012-11-22 14:03'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2012-09-21 01:33'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-09-21 01:33'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2012-09-21 01:33'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-21 01:31'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-21 01:30'
        message: ''
        version: '1'

---
*   **Does Nuxeo workflow engine implement BPEL or BPMN?**
    Content Routing is not a Business Process management tool; it is designed for content-centric applications, so it would not make sense to implement BPEL. BPMN could be interesting, but [Studio]({{page space='studio'}}) proposes a 100% integrated experience with the Nuxeo Platform and its tools. Implementing support of BPMN so as to define the forms with a generic designer would make experience not as good as in Studio.

*   **Does Nuxeo workflow engine support multiple templates of workflows?**
    Yes, workflow models can be designed in Studio, and multiple workflows can be used at the same time in a given Nuxeo instance. It is possible to filter workflows on user properties, current document properties, ...

*   **How does the workflow engine behave with versioning of templates?**
    An instance started using a workflow template will use a frozen copy of it until the end of the process. But new instances will use the new model.

*   **Does it support escalation (time based output of nodes, etc...)?**
    Escalation rules are available on task nodes. They allow to execute an automation chain depending on a set condition, which can be time based.

*   **Is there a console to manage all the workflow instances?**
    This will be included in the next release of Nuxeo. It can be added on your project very easily, as a route is persisted as a "document" in the repository.

*   **Does the workflow accept notifications?**
    It is possible to configure completely customized notifications.

*   **Is Content Routing for programmers only?**
    Content Routing requires a technical mind if you want to capture all its power, but can be configured very simply by non developers guys through Studio.

*   **Is it complex to design a new workflow?**
    It can be very simple, depending on how much logic there is inside. Chaining nodes in Studio is very intuitive though.

*   **How can I disable the default existing workflow SerialDocumentReview for the documents of type File and Note?**
    It's very simple, just use the following contribution to override its availability filter:

    ```html/xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService" point="filters">
        <filter id="filter@SerialDocumentReview" append="true">
          <rule grant="false">
            <type>File</type>
            <type>Note</type>
          </rule>
         </filter>
     </extension>
    ```

*   **How can I enable the default workflow SerialDocumentReview for new document types?**

    Use the following contribution:

    ```html/xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService" point="filters">
        <filter id="filter@SerialDocumentReview" append="true">
          <rule grant="true">
            <type>MyDocTYpe</type>
          </rule>
         </filter>
     </extension>
    ```

*   **How can I know which Workflows are runnable on a document through the Rest API?**

    While fetching a document from the [Rest API]({{page page='rest-api'}}), you can use the [runnableWorkflows enricher]({{page page='content-enrichers#runnableWorkflows'}}) and check what is returned in `document.contextParameters.runnableWorkflows`.

*   **How can I have all the comments submitted by users when completing tasks logged in by the audit?**
    You just need to use a node variable called "comment" and you'll find all the comments stored in the Event log, on the "Workflow task completed" event.

*   {{> anchor 'current-user-variable'}}**How can I get the current user name in an operation executed by the workflow?**
    All the automation operations executed by the workflow engine are executed using a temporary unrestricted session (if the current user is not an administrator, this is a session with the user "system"). In order to fetch the current user id, you can to use: `CurrentUser.getActingUser()`.

*   **Is the availability filter configured on the workflow also evaluated when the workflow is started using the operation "StartWorkflow"?**
    No, this filter is actually an [Action Filter](/x/EYAO) used to control the visibility of workflow models in the list of workflows displayed by the widget type "Workflow Process".

*   **Can I have a workflow variable and a node variable with the same name?**
    No, the workflow engine doesn't handle this case. They could have the same name, but as long as they are not both used on the same node. But we recommend you to choose different names and to avoid this situation.
