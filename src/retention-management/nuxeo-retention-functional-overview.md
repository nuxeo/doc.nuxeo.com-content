---
title: Retention Functional Overview
description: Discover how to use the Nuxeo Retention Management addon once installed.
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

- A **retention search** that lets you [search through all the documents](#retention-search) under retention and/or legal hold.

- A **retention rules** menu that displays the list of [retention rules]({{page page='index'}}#retention-rules) defined on your instance.

- A **retention events** menu that lets you [create a retention event](#create-a-retention-event).

### Retention Actions

New actions are displayed on documents and result list:

- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-main
    name: Retention_ICON_RetentionMenu.png
    server#icon#to_be_updated
--}}
![retention-icon-main](nx_asset://8d149fc3-fd74-47d6-ac71-da3e076bf397 ?w=20) applies a retention rule to the document.

- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-legal-hold
    name: Retention_ICON_LegalHold.png
    server#icon#to_be_updated
--}}
![retention-icon-legal-hold](nx_asset://e73f883d-072a-459b-97f6-81ac7a5946f9 ?w=20) applies/removes a legal hold to the document.

- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-main
    name: Retention_ICON_RetentionMenu.png
    server#icon#to_be_updated
--}}
![retention-icon-main](nx_asset://8d149fc3-fd74-47d6-ac71-da3e076bf397 ?w=20) overrides the retention of a document already under retention.

### Retention Rule Document Type

A **retention rule** document type is available, it can only be created under the retention rules menu.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-rules-menu
    name: Retention_SCREEN_RetentionRulesMenu.png
    server#screenshot#up_to_date
--}}
![retention-screen-rules-menu](nx_asset://235e0b69-9c05-4a35-8f62-7532008d7f35 ?w=650,border=true)

### Permissions

Regarding access rights, this addon includes:

- A **`RecordManager`** group.
- A new **`Manage Record`** permission that allows users to create/edit retention rules, apply a retention rule to a document or a list of documents and override the retention of a document already under retention.
- A new **`Manage legal hold`** permission that allows granted users to apply/remove a legal hold to a document or a list of documents.

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
    More details on the [Focus on the retention types section](#retention-types).
  </tr>
  <tr>
    <td>Based on an event</td>
    <td>The retention period will start once the defined event occurs (after the retention rule has been applied to the document).</br>
    More details on the [Focus on the retention types section](#retention-types).</td>
  </tr>
  <tr>
    <td>Event type</td>
    <td>Select the type of event that will trigger the retention period. The list of available event types is defined using a dedicated vocabulary.</br>
    </td>
  </tr>
  <tr>
    <td>Event field value</td>
    <td>Fill in the value related to the event (contract number, employee identifier, loan reference, etc.)</br>
    **Example:** If I apply a retention rule to a document on January 1st, 2020 with the event "contract terminated", a retention period of 2 years, and the contract is closed on August 10th, 2020, then the retention will expire on August 10th, 2022.
    </td>
  </tr>
  <tr>
    <td>Based on a metadata</td>
    <td>The retention period will start based on a defined metadata, once you apply the retention rule to the document.</br>
    More details on the [Focus on the retention types section](#retention-types).
    </td>
  </tr>
  <tr>
    <td>Metadata</td>
    <td>The path of the metadata to use. All date metadata from all schemas are available (default and local ones).</br>
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

#### {{> anchor 'extend-retention'}}Focus on the retention types
##### Immediate

The retention period will start once you apply the retention rule to the document.

**Example:** If I apply a retention rule to a document on January 1st, 2020 with a period of 2 years, then the retention will expire on January 1st, 2022.</td>

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-schema-immediate
    name: Retention_SCHEMA_RetentionImmediate.png
    addins#schema#up_to_date
--}}
![retention-schema-immediate](nx_asset://333ea217-fe1f-4a57-afc0-65c695daaaa6 ?w=600,border=true)


##### Based on a metadata

The retention period will start based on a defined metadata, once you apply the retention rule to the document.

This retention type is useful when the retention period depends on a past and external event. It can also be used for migration purpose (moving from a legacy records management system to Nuxeo).

**Example:** If I apply a retention rule to a document on March 15th, 2020 with the metadata "publication date", a retention period of 2 years, and the "publication date" is September 15th, 2019, then the retention will expire on September 15th, 2021.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-schema-metadata
    name: Retention_SCHEMA_RetentionMetadata.png
    addins#schema#up_to_date
--}}
![retention-schema-metadata](nx_asset://b906f7be-83db-4f29-a3db-1b2ce1876742 ?w=600,border=true)

{{#> callout type='warning'}}
Metadata-based retention rule are designed for **past dates**, not future dates.
{{/callout}}


##### Based on a event

The retention period will start once the defined event occurs (after the retention rule has been applied to the document).

This retention type is useful for all cases where a document needs to be preserved from any deletion or change but the retention starting point is unknown at the beginning.

**Examples:** Contract terminated, Employee left the company, loan repayment, etc.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-schema-event
    name: Retention_SCHEMA_RetentionEvent.png
    addins#schema#up_to_date
--}}
![retention-schema-event](nx_asset://5a0edde0-6536-4b69-bd2f-f4276bd4a0eb ?w=600,border=true)


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
- The document will be automatically tagged as a **record**
- The retention rule's settings will be applied to the document

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

After having performed a search from the [retention search menu](#retention-search), a list of documents is displayed. Then, if you click on the **Without attached rule** quick filter, you can click on **Attach retention rule** icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-main
    name: Retention_ICON_RetentionMenu.png
    server#icon#to_be_updated
--}}
![retention-icon-main](nx_asset://8d149fc3-fd74-47d6-ac71-da3e076bf397 ?w=20) at the top-right of the screen.</br>

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-apply-bulk
    name: Retention_SCREEN_ApplyRetentionBulk.png
    addins#screenshot#up_to_date
--}}
![retention-screen-apply-bulk](nx_asset://0e547a39-a4fd-4eb7-9973-d8cbd9e911a5 ?w=600,border=true)

Select the retention rule that you want from the popup window and confirm.

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
3. Fill the fields on the **Fire event** section:

  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-eventmenu
      name: Retention_SCREEN_RetentionEvent.png
      addins#screenshot#up_to_date
  --}}
  ![retention-screen-eventmenu](nx_asset://6f012bec-ec76-4b58-9efb-a4aa06b8513b ?w=600,border=true)


4. Click on **Fire event**.

At this stage, the event is created on Nuxeo Platform, and the retention rules fitting with this event will trigger the retention period for the involved documents.

### {{> anchor 'retention-search'}} Retention Search

The **retention search** is a dedicated search with criteria related to the retention management.

This search contains filters on:

- The attached retention rule.
- The expiration date (past and future).
- The retention status (active retention, expired, not under retention).
- The legal hold status.
- The full text content.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-search
    name: Retention_SCREEN_Search.png
    addins#screenshot#up_to_date
--}}
![retention-screen-search](nx_asset://e7de1927-d99b-450e-9117-53b2904fe599 ?w=600,border=true)

### History Related to Retention Actions

#### History on a Document

On the **History** tab of your document, you can see all the events related to the retention including:

- Application of a retention rule to the document.
- Beginning of the retention perid.
- Overriding of the retention period.
- Application of a legal hold on the document.
- Removing of a legal hold on the document.

#### General History

On the **Administration** > **Audit** page, you can see all the events related to the retention, including the [retention events]({{page page='index'}}#retention-events) that have been created on the platform.

### Put a Document Under legal hold

There are different ways to put a document under a [legal hold]({{page page='index'}}#legal-hold). You can apply a legal hold to a single document or to several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on **More** ![]({{file name='more-search-web-ui.png' space='userdoc' page='search'}} ?w=14) and select **Apply legal hold**.</br>
  A popup window is displayed.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-legalhold-popup
    name: Retention_SCREEN_ApplyLegalHoldPopup.png
    server#popup#to_be_updated
    --}}
  ![retention-screen-legalhold-popup](nx_asset://e9bba24c-6edc-44e9-81a4-a46fac55e135 ?w=350,border=true)

2. Fill in the description and click on **Apply legal hold**.</br>
    A bar is displayed at the top of your document to notify users that the document is under a legal hold.</br>
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-legalhold-document
    name: Retention_SCREEN_document-legalhold.png
    server#screenshot#to_be_updated
  --}}
  ![retention-screen-legalhold-document](nx_asset://84e7a358-cff2-4a99-97b9-59eeac58b37d ?w=600,border=true)

#### From a Result List

After having performed a search from the [retention search menu](#retention-search), a list of documents is displayed. Then, if you click on the **Not Under legal hold** quick filter, you can click on **Apply legal hold** icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-legal-hold
    name: Retention_ICON_LegalHold.png
    server#icon#to_be_updated
--}}
![retention-icon-legal-hold](nx_asset://e73f883d-072a-459b-97f6-81ac7a5946f9 ?w=20) at the top-right of the screen.</br>

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-applyhold-bulk
    name: Retention_SCREEN_ApplyLegalHoldBulk.png
    addins#screenshot#up_to_date
--}}
![retention-applyhold-bulk](nx_asset://cc9b9dc7-7fdb-44aa-a9af-af72d5b47b6e ?w=600,border=true)

Fill in the description field from the popup window and confirm.

{{#> callout type='note' }}
The legal hold will be applied on **all the documents displayed on the page**.
{{/callout}}

### Remove a legal hold

There are different ways to remove a legal hold. You can remove a legal hold for a single document or for several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on **More** ![]({{file name='more-search-web-ui.png' space='userdoc' page='search'}} ?w=14) and select **Remove legal hold**.</br>
  A popup window is displayed.</br>
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-legalhold-remove-popup
      name: Retention_SCREEN_RemoveLegalHoldPopup-2.png
      server#popup#to_be_updated
  --}}
  ![retention-screen-legalhold-remove-popup](nx_asset://ea2ffc42-009a-4903-bd06-3d0a3645a29b ?w=350,border=true)

2. Click on **Remove legal hold**.</br>
  The top bar displayed on top of your document doesn't display the legal hold anymore.</br>
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-retention-document
      name: Retention_SCREEN_document-retention.png
      server#screenshot#up_to_date
  --}}
  ![retention-screen-retention-document](nx_asset://396babbe-f0db-4a6c-a54f-c071298b6b04 ?w=600,border=true)

#### From a Result List

After having performed a search from the [retention search menu](#retention-search), a list of documents is displayed. Then, if you click on the **Under legal hold** quick filter, you can click on **Remove legal hold** icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-icon-legal-hold
    name: Retention_ICON_LegalHold.png
    server#icon#to_be_updated
--}}
![retention-icon-legal-hold](nx_asset://e73f883d-072a-459b-97f6-81ac7a5946f9 ?w=20) at the top-right of the screen.</br>

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Functional Overview/retention-screen-removehold-bulk
    name: Retention_SCREEN_RemoveLegalHoldBulk.png
    addins#screenshot#up_to_date
--}}
![retention-screen-removehold-bulk](nx_asset://8fc57c45-28f7-49ab-8f0e-2ceadaa76ba5 ?w=600,border=true)

Confirm from the popup window.

{{#> callout type='note' }}
The legal hold will be removed for **all the documents displayed on the page**.
{{/callout}}

## As a User

{{#> callout type='info' heading='Standard and Compliance mode' }}
This page describes the user experience depending on the Retention Management addon mode among [Standard or Compliance]({{page page='index'}}#configuration-modes).
{{/callout}}

As a user, you will see some differences on the **View** tab of your documents:

- There is an info header displaying Retention information or legal hold.
- Some actions can be unavailable due to the nature of a document under retention or legal hold, or due to the functional limitations involved by the Nuxeo Retention Management addon.

The following tables describe the availability of document actions:

- The action is **available** (depending on the user permissions) as for a standard Nuxeo instance,
- The action is **disabled for records**, meaning the action is disabled only when the document is under retention or legal hold,
- The action is **disabled on instance**, meaning it's disabled for all documents on the Nuxeo instance, due to some limitations coming from the Nuxeo Management addon.

### With Standard mode


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
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Download</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Export</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to collection</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to favorites</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to clipboard</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Notify me</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Share</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View permissions</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Change permissions</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View history</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View publishing</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add tags</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Start process</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Lock</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Publish document</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Replace main file</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Delete main file</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Delete document</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Comments</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Versioning</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add attachment</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
</tbody>
</table>
</div>

### With Compliance mode

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
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Download</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Export</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to collection</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to favorites</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Add to clipboard</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Notify me</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Share</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View permissions</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Change permissions</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View history</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">View publishing</td>
    <td></td>
    <td></td>
    <td><center>&#10003;</center></td>
</tr>
<tr>
    <td colspan="1">Add tags</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Start process</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Lock</td>
    <td><center>&#10003;</center></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Publish document</td>
    <td></td>
    <td></td>
    <td><center>&#10003;</center></td>
</tr>
<tr>
    <td colspan="1">Replace main file</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Delete main file</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Delete document</td>
    <td></td>
    <td><center>&#10003;</center></td>
    <td></td>
</tr>
<tr>
    <td colspan="1">Comments</td>
    <td></td>
    <td></td>
    <td><center>&#10003;</center></td>
</tr>
<tr>
    <td colspan="1">Versioning</td>
    <td></td>
    <td></td>
    <td><center>&#10003;</center></td>
</tr>
<tr>
    <td colspan="1">Add attachment</td>
    <td></td>
    <td></td>
    <td><center>&#10003;</center></td>
</tr>
</tbody>
</table>
</div>
