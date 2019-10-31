---
title: Retention Functional Overview
description: Discover how to use the Nuxeo Retention Management add-on once installed.
review:
    comment: ''
    date: '2019-08-05'
    status: 'ok'
labels:
    - lts2019-wip
    - jaubenque
    - mlumeau
    - retention-management
toc: true
tree_item_index: 100
private: true
---

## As a Record Manager

As a record manager, you are responsible for the proper organization and management of the documents on the platform.
You have to make sure that the [retention rules]({{page page='index'}}#retention-rules) are properly written, implemented and used.

Once the module is installed, different menus, sub-menus and actions are available throughout Nuxeo.

### Retention Menu

A new retention menu {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-main
    name: Retention_ICON_RetentionMenu.png
    server#icon#to_be_updated
--}}
![retention-icon-main](nx_asset://8d149fc3-fd74-47d6-ac71-da3e076bf397 ?w=20) is available on the left side menu, including the following sub-menus:

- A **retention search** that lets you [search through all the documents](#retention-search) under retention and/or Legal Hold.

- A **retention rules** menu that displays the list of [retention rules]({{page page='index'}}#retention-rules) defined on your instance.

- A **retention events** menu that lets you [create a retention event](#create-a-retention-event).

### Retention Actions

New actions are displayed on documents and result list:

- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-main
    name: Retention_ICON_RetentionMenu.png
    server#icon#to_be_updated
--}}
![retention-icon-main](nx_asset://8d149fc3-fd74-47d6-ac71-da3e076bf397 ?w=20) apply a retention rule to the document.

- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-legal-hold
    name: Retention_ICON_LegalHold.png
    server#icon#to_be_updated
--}}
![retention-icon-legal-hold](nx_asset://e73f883d-072a-459b-97f6-81ac7a5946f9 ?w=20) apply/remove a Legal Hold to the document.

- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-main
    name: Retention_ICON_RetentionMenu.png
    server#icon#to_be_updated
--}}
![retention-icon-main](nx_asset://8d149fc3-fd74-47d6-ac71-da3e076bf397 ?w=20) override the retention of a document already under retention.

### Retention Rule Document Type

A **Retention rule** document type is available, it can only be created under the retention rules menu.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-rules-menu
    name: Retention_SCREEN_RetentionRulesMenu.png
    server#screenshot#up_to_date
--}}
![retention-screen-rules-menu](nx_asset://235e0b69-9c05-4a35-8f62-7532008d7f35 ?w=650,border=true)

### Permissions

Regarding access rights, this add-on includes:

- A **RecordManager** group.
- A new **Manage record** permission that allows users to create/edit retention rules, apply a retention rule to a document or a list of documents and override the retention of a document already under retention.
- A new **Manage Legal Hold** permission that allows granted users to apply/remove a Legal Hold to a document or a list of documents.

### {{> anchor 'create-retention-rule'}} Create a Retention Rule

To create a new [retention rule]({{page page='index'}}#retention-rules):
1. Go to the Retention menu.
2. Click on **Retention rules**.
3. Click on the **Create** button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Create Button
    name: create_button.png
    1.1.3#screenshot#up_to_date
--}}
![Create Button](nx_asset://2b093e23-6ed6-4228-943b-9b4655df9273 ?w=20). </br>
  The following creation popup is displayed.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-rule-creation
    name: Retention_SCREEN_RuleCreation.png
    server#screenshot#to_be_updated
  --}}
  ![retention-screen-rule-creation](nx_asset://53780f1a-ab77-45c1-8ddd-0438763d75be ?w=350,border=true)

<table>
  <tr>
    <th>General Information</th>
    <td></td>
  </tr>
  <tr>
    <td>Rule name</td>
    <td>Name of the rule displayed in the retention rules menu and when selecting a retention rule to apply to a document.</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Description of the retention rule.</td>
  </tr>
  <tr>
    <td>Status</td>
    <td>Select if the rule can be applied to the documents ("active") or not ("inactive").</td>
  </tr>
  <tr>
    <th>Rule Application</th>
    <th></th>
  </tr>
  <tr>
    <td>Document types</td>
    <td>Filter for which document types the retention rule is applicable. If left empty, the retention rule will be available for **all document types**.</td>
  </tr>
  <tr>
    <th>Period Starting Point</th>
    <th></th>
  </tr>
  <tr>
    <td>Immediate</td>
    <td>The retention period will start once you apply the retention rule to the document.</br>
    **Example:** If I apply a retention rule to a document on January 1st, 2020 with a period of 2 years, then the retention will expire on January 1st, 2022.</td>
  </tr>
  <tr>
    <td>Based on an event</td>
    <td>The retention period will start once the defined event occurs (after the retention rule has been applied to the document).
    </td>
  </tr>
  <tr>
    <td>Event type</td>
    <td>Select the type of event that will trigger the retention period. The list of available event types is defined using a dedicated vocabulary.</br>
    **Examples:** Contract terminated, Employee left the company, loan repayment, etc.</td>
  </tr>
  <tr>
    <td>Event field value</td>
    <td>Fill in the value related to the event (contract number, employee identifier, loan reference, etc.)</br>
    **Example:** If I apply a retention rule to a document on January 1st, 2020 with the event "contract terminated", a retention period of 2 years, and the contract is closed on August 10th, 2020, then the retention will expire on August 10th, 2022.
    </td>
  </tr>
  <tr>
    <td>Based on a metadata</td>
    <td>The retention period will start based on a defined metadata, once you apply the retention rule to the document.
    </td>
  </tr>
  <tr>
    <td>Metadata</td>
    <td>The path of the metadata to use. All metadata from all schemas are available (default and local ones): `dc:title`, `contract:number`, `contract:employeeid`, etc.</br>
    **Example:** If I apply a retention rule to a document on January 1st, 2020 with the metadata "publication date", a retention period of 2 years, and the "publication date" is September 15th, 2019, then the retention will expire on September 15th, 2021.
    </td>
  </tr>
  <tr>
    <th>Retention Duration</th>
    <td></td>
  </tr>
  <tr>
    <td>Duration</td>
    <td>You can select the duration of the retention in years, months or days.
    The fields are aggregated to define the total retention duration.</td>
  </tr>
  <tr>
    <th>Post Retention Actions</th>
    <td></td>
  </tr>
  <tr>
    <td>Actions</td>
    <td>You can select one or several actions to be automatically executed once the retention expires.</br>
    **Examples:** delete the document, notify specific users, export, etc.</td>
  </tr>
</table>

#### Edit a Retention Rule

You can edit an existing retention rule to change its status or settings.

{{#> callout type='note' }}
The changes made on a retention rule are not retroactive. It will only affect the documents linked to the retention rule after the changes are done. </br>
**They won't be applied to the documents previously linked to the retention rule**.
{{/callout}}

Once on the **View** tab of the retention rule:
1. Click on the ![]({{file name='edit-icon_web-ui.png' space='userdoc' page='icons-index'}} ?w=14) **Edit** button.</br>
    A popup window is displayed.
2. Update the rule.
3. Click on **Save** button.

#### Delete a Retention Rule

You can delete an existing retention rule.

{{#> callout type='info' }}
The deletion of a retention rule **will not affect** the documents previously attached to the rule.
Those documents will keep their retention settings, including retention period and post-retention actions.
{{/callout}}

On the **View** tab of the retention rule:
1. Click on the ![]({{file name='delete_web-ui.png' space='userdoc' page='icons-index'}} ?w=14) **Delete** button.</br>
    A popup window is displayed.
2. Click **Confirm** to delete the retention rule.

### Put a Document Under Retention

To put a document under retention, you have to link the document to a retention rule.</br>
By doing so:
- the document will be automatically tagged as a **record**
- the retention rule's settings will be applied to the document

{{#> callout type='warning' }}
This is an **irreversible action**, even as an administrator, meaning you can't unlink a retention rule to the document and you can't shorten the retention period.
{{/callout}}

After having linked a retention rule, the only available action is to [extend the retention](#extend-the-retention-of-a-document).

There are different ways to put a document under retention. You can attach a retention rule to a single document or to several documents in a row.

#### From a Document View

On the **View** tab of your document:
1. Click on the **More** ![]({{file name='more-search-web-ui.png' space='userdoc' page='search'}} ?w=14) button and select **Attach retention rule**.</br>
  A popup window is displayed.</br>
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-popup
      name: Retention_SCREEN_ApplyRetentionPopup.png
      server#popup#up_to_date
  --}}
  ![retention-screen-retention-popup](nx_asset://88548927-6e5e-4fd6-87a1-aefd4a5ae998 ?w=350,border=true)

2. Select the retention rule needed from the drop-down list and click on **Attach retention rule**.</br>
    A top bar is displayed at the top of your document to notify users that the document is, or will be, under retention.</br>
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-document
        name: Retention_SCREEN_document-retention.png
        server#screenshot#up_to_date
    --}}
    ![retention-screen-retention-document](nx_asset://396babbe-f0db-4a6c-a54f-c071298b6b04 ?w=600,border=true)

#### From a Result List

After having performed a search from the regular search menu, a list of documents is displayed. For example, you only want to retain the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results, you can select the documents that you want and click on **Attach retention rule** at the top-right of the screen.</br>

{{!--     ### nx_asset ###
  path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-list
  name: Retention_SCREEN_ApplyRetentionList.png
  server#screenshot#to_be_updated
--}}
![retention-screen-retention-list](nx_asset://4b65b80d-fbe1-43bd-91eb-6f8cd2da185b ?w=600,border=true)

Select the retention rule that you want from the popup window and confirm.

{{#> callout type='note' }}
The retention rule will be applied on **all the documents displayed on the page**.
{{/callout}}

#### From a Folder View

As you can put a whole list of results under retention, you can also attach a retention rule to an entire folder.

Like the previous section, click on the **Attach retention rule** at the top-right of the screen, select the retention rule that you need and confirm.

{{#> callout type='note' }}
The retention rule will be applied on **all the documents displayed on the page**.
{{/callout}}

### {{> anchor 'extend-retention'}}Extend the Retention of a Document

When a document is under retention, you can lengthen the retention of the document.

{{#> callout type='warning' }}
This is an **irreversible action**: there is no way to shorten a retention period, even as an administrator.
{{/callout}}

On the **View** tab of your document:
1. Click on the **More** ![]({{file name='more-search-web-ui.png' space='userdoc' page='search'}} ?w=14) button and select **Extend retention**.</br>
    A popup window is displayed.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-extend
    name: Retention_SCREEN_ExtendRetentionPopup.png
    server#popup#to_be_updated
  --}}
  ![retention-screen-retention-extend](nx_asset://0ad5587e-095f-4ba5-b795-d1c1de23c829 ?w=350,border=true)

2. Select the new expiration date (end of retention period) and confirm.</br>
  A top bar is displayed at the top of your document to notify users of the new expiration date.</br>
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-document
      name: Retention_SCREEN_document-retention.png
      server#screenshot#up_to_date
  --}}
  ![retention-screen-retention-document](nx_asset://396babbe-f0db-4a6c-a54f-c071298b6b04 ?w=600,border=true)

### Create a Retention Event

To create a new [retention event]({{page page='index'}}#retention-events):
1. Go to the Retention menu.
2. Click on **Retention events**.
3. Click on the **Create** {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/Create Button
    name: create_button.png
    1.1.3#screenshot#up_to_date
--}}
![Create Button](nx_asset://2b093e23-6ed6-4228-943b-9b4655df9273 ?w=20) button. </br>
  The creation popup is displayed:
  - **Title**: Title of the event to create.
  - **Description**: Description of the retention event.
  - **Event type**: Select the type of event you want to create among a list of available types</br>
  Examples: Contract terminated, Employee left the company, loan repayment, etc.
  - **Event field value**: Fill in the value related to the event</br>
  Examples: Contract number, employee identifier, loan reference, etc.

4. Click on **Create**.

At this stage, the event is created on Nuxeo Platform, and the retention rules fitting with this event will trigger the retention period for the involved documents.

### Retention Search

The **retention search** is a dedicated search with criteria related to the retention management.

This search contains filters on:

- the attached retention rule.
- the expiration date (past and future).
- the retention status (active retention, expired, not under retention).

### History Related to Retention Actions

#### History on a Document

On the **History** tab of your document, you can see all the events related to the retention including:

- Application of a retention rule to the document.
- Overriding of the retention period.
- Application of a Legal Hold on the document.
- Removing of a Legal Hold on the document.

#### General History

On the **Administration** > **Audit** page, you can see all the events related to the retention, including the [retention events]({{page page='index'}}#retention-events) that have been created on the platform.

### Put a Document Under Legal Hold

There are different ways to put a document under a [Legal Hold]({{page page='index'}}#legal-hold). You can apply a Legal Hold to a single document or to several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on **More** ![]({{file name='more-search-web-ui.png' space='userdoc' page='search'}} ?w=14) and select **Apply Legal Hold**.</br>
  A popup window is displayed.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-legalhold-popup
    name: Retention_SCREEN_ApplyLegalHoldPopup.png
    server#popup#to_be_updated
    --}}
  ![retention-screen-legalhold-popup](nx_asset://e9bba24c-6edc-44e9-81a4-a46fac55e135 ?w=350,border=true)

2. Fill in the description and click on **Apply Legal Hold**.</br>
    A bar is displayed at the top of your document to notify users that the document is under a Legal Hold.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-legalhold-document
    name: Retention_SCREEN_document-legalhold.png
    server#screenshot#to_be_updated
  --}}
  ![retention-screen-legalhold-document](nx_asset://84e7a358-cff2-4a99-97b9-59eeac58b37d ?w=600,border=true)

#### From a Result List

After having performed a search from the regular search menu, a list of results is displayed. For example, you only want to apply a Legal Hold to the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results you can click on **Apply Legal Hold** at the top-right of the screen.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-list
    name: Retention_SCREEN_ApplyRetentionList.png
    server#screenshot#to_be_updated
--}}
![retention-screen-retention-list](nx_asset://4b65b80d-fbe1-43bd-91eb-6f8cd2da185b ?w=600,border=true)

Fill in the description field from the popup window and confirm.

{{#> callout type='note' }}
The Legal Hold will be applied on **all the documents displayed on the page**.
{{/callout}}

### Remove a Legal Hold

There are different ways to remove a Legal Hold. You can remove a Legal Hold for a single document or for several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on **More** ![]({{file name='more-search-web-ui.png' space='userdoc' page='search'}} ?w=14) and select **Remove Legal Hold**.</br>
  A popup window is displayed.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-legalhold-remove-popup
    name: Retention_SCREEN_RemoveLegalHoldPopup.png
    server#popup#to_be_updated
  --}}
  ![retention-screen-legalhold-remove-popup](nx_asset://ea2ffc42-009a-4903-bd06-3d0a3645a29b ?w=350,border=true)

2. Click on **Remove Legal Hold**.</br>
  The top bar displayed on top of your document doesn't display the legal hold anymore.</br>
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-document
      name: Retention_SCREEN_document-retention.png
      server#screenshot#up_to_date
  --}}
  ![retention-screen-retention-document](nx_asset://396babbe-f0db-4a6c-a54f-c071298b6b04 ?w=600,border=true)

#### From a Result List

After having performed a search from the regular search menu, a list of results is displayed. For example, you only want to remove a Legal Hold to the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results you can click on **Remove Legal Hold** at the top-right of the screen.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-list
    name: Retention_SCREEN_ApplyRetentionList.png
    server#screenshot#to_be_updated
--}}
![retention-screen-retention-list](nx_asset://4b65b80d-fbe1-43bd-91eb-6f8cd2da185b ?w=650,border=true)

Confirm from the popup window.

{{#> callout type='note' }}
The Legal Hold will be removed for **all the documents displayed on the page**.
{{/callout}}

## As a User

As a user, you will see some differences on the **View** tab of your documents:

- There is an info header displaying Retention information or Legal Hold.
- Some actions can be unavailable due to the nature of a document under retention or legal hold, or due to the functional limitations involved by the Nuxeo Retention Management add-on.

The following table describes the availability of document actions:

- The action is **available** (depending on the user permissions) as for a standard Nuxeo instance,
- The action is **disabled for records**, meaning the action is disabled only when the document is under retention or legal hold,
- The action is **disabled on instance**, meaning it's disabled for all documents on the Nuxeo instance, due to some limitations coming from the Nuxeo Management add-on.


<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
    <th rowspan="2">Feature</th>
</tr>
<tr>
    <th>Available</th>
    <th>Disabled for records</th>
    <th>Disabled on instance</th>
</tr>
<tr>
    <td colspan="1">Preview</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Download</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Export</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to collection</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to favorites</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to clipboard</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Notify me</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Share</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View permissions</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Change permissions</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View history</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View publishing</td>
    <td></td>
    <td></td>
    <td>&#10003;</td>
</tr>
<tr>
    <td colspan="1">Add tags</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Start process</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Lock</td>
    <td>&#10003;</td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Publish document</td>
    <td></td>
    <td></td>
    <td>&#10003;</td>
</tr>
<tr>
    <td colspan="1">Replace main file</td>
    <td></td>
    <td>&#10003;</td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Delete main file</td>
    <td></td>
    <td>&#10003;</td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Delete document</td>
    <td></td>
    <td>&#10003;</td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Comments</td>
    <td></td>
    <td></td>
    <td>&#10003;</td>
</tr>
<tr>
    <td colspan="1">Versioning</td>
    <td></td>
    <td></td>
    <td>&#10003;</td>
</tr>
</tbody>
</table>
</div>
