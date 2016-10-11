---
title: Human resources - Vacation request workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-6-0
toc: true
confluence:
    ajs-parent-page-id: '8683961'
    ajs-parent-page-title: Templates reference
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Human+resources+-+Vacation+request+workflow
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/Human+resources+-+Vacation+request+workflow
    page_id: '8683607'
    shortlink: V4CE
    shortlink_source: 'https://doc.nuxeo.com/x/V4CE'
    source_link: /display/Studio/Human+resources+-+Vacation+request+workflow
tree_item_index: 500
history:
    -
        author: Manon Lumeau
        date: '2015-11-23 10:22'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-09-07 09:30'
        message: Fix TOC
        version: '13'
    -
        author: Alain Escaffre
        date: '2012-10-02 23:49'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2012-10-02 23:47'
        message: ''
        version: '11'
    -
        author: Frédéric Vadon
        date: '2012-01-03 15:51'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Frédéric Vadon
        date: '2012-01-03 15:51'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2011-08-30 19:39'
        message: ''
        version: '8'
    -
        author: Frédéric Vadon
        date: '2011-08-30 14:59'
        message: ''
        version: '7'
    -
        author: Frédéric Vadon
        date: '2011-08-30 14:49'
        message: ''
        version: '6'
    -
        author: Frédéric Vadon
        date: '2011-08-30 14:43'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2011-08-30 14:40'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2011-08-30 14:39'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2011-08-30 14:38'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2011-08-29 18:40'
        message: ''
        version: '1'

---
{{#> callout type='note' }} This documentation needs to be updated because the implementation of the shared template is now based on Content Routing {{/callout}}

&nbsp;

The goal of this tutorial is to explain the Studio application template :&nbsp;Human resources - Vacation request workflow.

This template is a complete use case of using Nuxeo Studio to implement a Business Case. You will find custom lifecycles, content views, document types, notifications, actions ... so as to provide a ready-to-use template for HR workflows.

The best way to follow this documentation is to import the application template in your Studio project, find here the documentation on how to&nbsp;[use application templates]({{page space='Studio' page='Use Application+Templates'}})&nbsp;in a Studio project.

Being already familiar to Studio main aspects is recommended to understand this documentation, if not the case, you can start by our [how to get started guide](http://doc.nuxeo.com/pages/viewpage.action?pageId=8192432).

&nbsp;

# The Content Model

In the Studio document section, you will find 2 documents types :&nbsp;

*   HumanResourcesFolderStructure :

It contains the HRHolidayRequests. It is a structured folder created with&nbsp;Structure template feature, and for each user it is created thanks to listener "CreateHumanResourceFolder" that is executed at the creation of workspace type documents which path starts with "/default-domain/UserWorkspaces".

*   HRHolidayRequest :&nbsp;

This is the main document type. It holds the holiday request data : beginning date, end date, managers, number of each vacation day type... Holiday requests are associated with life cycle HRHolidayRequestLifecycle that holds request life cycle states, from draft to accepted trough operational and then HR validation.&nbsp;

A "request vacation period" button is created in Human Ressource folder by the User Action "NewHolidayRequestAction" that triggers the Automation Chain "CreateHolidayRequestChain". This chain first navigates to the user holiday folder and then shows the&nbsp;Holiday Creation page.

![]({{file name='screenshot_2011-08-29_16.39.07.png'}} ?border=true)

You can see here that some fields are already predefined with 0 values. ![]({{file name='screenshot_2011-08-30_14.54.11.png'}} ?border=true)
The zeros are filled in by the Automation Chain "HRHolidayRequestDefaultValuesChain". This chain is launched by the event handler "HRHolidayRequestDefaultValuesEventListener" triggered on a empty HRHolidayRequest created event.

# The Workflow

### Roles in the Workflow

In the process of validating a holiday request, 3 persons are involved : the request creator who starts the workflow, the user operational manager who validates the request and finally the HR manager who confirms the request validation. Two groups are predefined :&nbsp;hr_operational_managers and&nbsp;hr_manager.

During the validation workflow, tasks are assigned and emails are sent to the different people involved, so it is necessary to get their names and emails at some points. It is easy to know who is the request creator as it is stored in the "dc:creator" field. The HR manager is also no very difficult as we will send tasks and emails to the whole HR Manager group. But getting the user operational manager is a little more tricky.

The solution is to use a vocabulary and the fonction&nbsp;@{Fn.getVocabularyLabel("Vocabulary","id"}. The vocabulary is used to store the operational manager of each user, the id will be the user, and the label will be operational manager.

In our case, it is mandatory to populate the vocabulary "EmployeeManagerMapping" either in your Studio project, or in Nuxeo as it will be used in every automation chain where the operational manager is required.

Here is an exemple where jack is the operational manager of john :

&nbsp; ![]({{file name='screenshot_2011-08-29_17.41.39.png'}} ?border=true)

### The Workflow Steps

The workflow is started with a click on the user action "StartWorkflow" that launches the Automation Chain "SendToManager". Then all others steps are crossed by task validations.

*   SendToManager :&nbsp;

This automation chain creates a&nbsp;Holiday request approval validation task to the operational manager and send him an e-mail notification. Please note the e-mail is created using a template, it enables to send a rich mail using html-like formatting and parameters fetched from the context (document creator, request beginning date...).

Then document life cycle is set to "op_manager_approval", several properties of the document are updated (request creation date...) and Read & Edit&nbsp;permission is granted to the operational manager so that he can make modifications if needed.

*   Operational manager validation

When the operational manager validates his task, it launches "OMValidatedChain". This chain set the document life cycle state to "hr_manager_processing", creates a task to HR manager and send an email to both HR manager and the request creator.

If the Operational manager rejects the request, it sets the request to "rejected" and send an e-mail notification to the creator of the request.

*   HR manager validation

If a HR manager validates the holiday request, it sets the state to accepted, and send an e-mail notification to both the creator of the request and his operational manager.

### Permissions

During the different steps of the workflow, people have different needs of accessing the requests, those needs change with life cycle states. For example, operational manager does not need the Edit&nbsp;permission when the request is in draft state.

Permissions are managed in the workflow with Document>Set ACL, and Document>Remove ACL operations.

A base permission is defined and created with the Automation Chain "SetUpBaseHolidayRequestWorkflowACL" which&nbsp;grants permission to read for the user operational manager and edit&nbsp;for the request creator.The permission is named "HolidayRequestWorkflow" with the operation Document>Set ACL. It will then be easy to handle (remove for example) this permission by using its name in Document>Remove ACL.

After the base permissions are set, each operation of the workflow sets specific&nbsp;permissions, for instance : edit&nbsp;permission to HR manager when he has to validate the request.

This way of doing insures that the minimal required permissions&nbsp;are set for each operation of the workflow.

![]({{file name='screenshot_2011-08-30_11.48.54.png'}} ?border=true)

# Display

*   Content views:&nbsp;&nbsp;

When going the human ressource folder, each user has access to different views depending on his role. For example, an operational manager can see all pending request of his team.
This view are defined in the search and listing section of Nuxeo studio and are displayed in additional tabs of the human ressources folder depending once again on user role.

![]({{file name='screenshot_2011-08-30_12.17.12.png'}} ?border=true)

*   The user menu human ressource link:

The studio project adds an entry directly in the user menu to navigate to human ressource folder thanks to the user action "GoToHR". The bound automation chain is "GoToHRSpaceChain". This chain not only navigates to the user's humane ressource folder and but also checks that it exists and if not, launches another automation chain to create the human ressource folder.

# Troubleshooting&nbsp;

A little bit of configuration is required to make the workflow works properly, please feel free to check the following items in case you encounter problems when testing the project.

*   E-mail configuration:&nbsp;

In almost each steps of the workflow, e-mails are sent, so make sure your email configuration is correct (mail.smtp.host, mail.smtp.port) in your configuration file. The configuration file may be situated in various places depending on your OS, the installation type... [Here is a link to find it on Windows](http://doc.nuxeo.com/pages/viewpage.action?pageId=3345719)

*   EmployeeManagerMapping vocabulary:

As explain in the first part of the Workflow section of this tutorial, users are linked to their operational manager thanks to the&nbsp;EmployeeManagerMapping vocabulary, so make sure this vocabulary is populated before fulfilling a holiday request.
