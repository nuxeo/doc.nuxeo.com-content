---
title: Functional Overview
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
tree_item_index: 200
private: true
---

{{! excerpt}}

{{! /excerpt}}

## As a Record Manager

As a record manager, you are responsible of the proper organization and management of the documents on the platform.
You have to make sure that the [retention rules]({{page page='nuxeo-retention-management'}}#retention-rules) are properly written, implemented and used.

Once the module is installed, different menus, sub-menus and actions are available throughout your instance.

- ICON: A new **retention menu** is available in the left side menu, including the following sub-menus:

    - ICON: A **retention search** that lets you search through all the documents under retention and/or legal hold.

    - ICON: A **retention rules** menu that displays in the drawer the list of retention rules defined on your instance.

    - ICON: A **retention events** menu that lets you create a retention event.

- New actions on documents and result list:

    - ICON: apply a retention rule to the document

    - ICON: apply/remove a legal hold to the document

    - ICON: override a retention of a document under retention

- A **Retention rule** document type is available, it can only be created under the retention rules folder.

- Regarding access rights, The Nuxeo Retention Management addon includes:
    - a **RecordManager** group is added to your instance, to let you add users in it.

    - A new permission is created called **Manage record** that allows granted users to:

        - create/edit retention rules

        - apply a retention rule to a document or a list of documents

        - override the retention of a document under retention

    - A new permission is created called **Manage Legal Hold** that allows granted users to:

        - Apply a Legal Hold to a document or a list of documents

        - Remove a Legal Hold to a document or a list of documents


### Create a Retention Rule

To create a new [retention rule]({{page page='nuxeo-retention-management'}}#retention-rules):
1. Go to the Retention menu.
2. Click on **Retention rules** menu
3. Click on the **Create** button. </br>
    The creation popup is displayed.

#### General information

 - **Rule name**: Name of the rule displayed in the retention rules menu and when selecting a retention rule to apply to a document
 - **Description**: Description of the retention rule. The description is here for information purpose
 - **Status**: Select if the rule can be applied to the documents (status "active") or not (status "inactive")

#### Rule application

 - **Document types**: Here you can filter for which document types the retention rule is applicable. If you let the field empty, the retention rule will be available for all document types of your instance.

#### {{> anchor 'retention-events'}}Period starting point

 - **Immediate**: The retention period will start once you applied the retention rule to the document.</br>

 Example: If I apply a retention rule to a document the 1st January of 2020 with a period of 2 years, then the document will expire the 1st January of 2022.

 - **Based on an event**: The retention period will start once the defined event will occur (after the retention rule has been applied to the document).

    - **Event type**: Select the type of event that will trigger the retention period. The list of available event types is defined using a dedicated vocabulary **TBD**</br>
    Examples: Contract terminated, Employee left the company, Repayment of loan,...

    - **Event field value**: Fill the value related to the event</br>
    Examples: Contract number, employee identifier, loan reference,...

 Example: If I apply a retention rule to a document the 1st January of 2020 with the event "contract terminated", a retention period of 2 years, and the contract is closed the 10th August of 2020, then the document will expire the 10th August of 2022.

 - **Based on a metadata**: The retention period will start based on a defined metadata, once you applied the retention rule to the document.

  - **Metadata**: The path of the metadata to use. All metadata of all schemas are available (default and local ones).</br>
  Examples: dc:title, contract:number, contract:employeeid,...</br>
  </br>
 Example: If I apply a retention rule to a document the 1st January of 2020 with the metadata "publication date", a retention period of 2 years, and the "publication date" is 15th of September 2019, then the document will expire the 15th September of 2021.

#### Duration

You can select the duration of the retention in years, months and/or days.
The fields are aggregated to define the total retention duration.

#### Post retention actions

You can select one or several actions to be automatically executed once the retention expired.

Examples: delete the document, notify some specific users, export, ...

### Put a Document Under Retention

To put a document under retention, you have to link the document to a retention rule.
By doing so:
  - the document will be automatically tagged as a record
  - the retention rules settings will be applied to the document

{{#> callout type='warning' }}
This is an **irreversible action**, even for an administrator, meaning:
  - you can't unlink a retention rule to the document
  - you can't shorten the retention period
{{/callout}}

After having linked a retention rule, the only available action is to [extend the retention]({{page page='nuxeo-retention-functional-overview'}}#extend-retention).

There are different ways to put a document under retention. You can attach a retention rule to a single document or to several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on the ICON **More** icon and select **Attach retention rule**.</br>
    A popup window is displayed.</br>
    SCREENSHOT

2. Select the retention rule needed from the drop-down list and click on **Attach retention rule**.</br>
    A top bar is displayed next to your document to notify users that the document is or will be, under retention.</br>
    SCREENSHOT

#### From a Result list

After having performed a search from the regular search menu, a list of results is displayed. For example, you only want to retain the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results you can click on **Attach retention rule** at the top-right of the screen.</br>

SCREENSHOT

Here too, select the retention rule that you want from the popup window and confirm.

{{#> callout type='note' }}
The retention rule will be applied on **all the documents displayed on the page**.
{{/callout}}

#### From a Folder View

As you can put a whole list of results under retention, you can also attach a retention rule to all the content of a folder.

Like the previous section, click on the **Attach retention rule** at the top-right of the screen, select the retention rule that you need and confirm.

{{#> callout type='note' }}
The retention rule will be applied on **all the documents displayed on the page**.
{{/callout}}

### Manage Retention Rules

#### Edit a retention rule

You can edit an existing retention rule to change the status or the settings of the rule.

{{#> callout type='note' }}
The changes made on a retention rule are not retroactive. It will affect only the documents linked to the retention rule after the changes are done.
**They won't be applied to the documents previously linked to the retention rule**.
{{/callout}}

Once on the **View** tab of the retention rule:
1. Click on the ICON **Edit document** icon.</br>
    A popup window is displayed.</br>

2. Update the rule

3. Click on **Save** button


#### Delete a retention rule

You can delete an existing retention rule.

{{#> callout type='note' }}
The deletion of a retention rule **will not affect** the documents previously attached to the rule.
Those documents will keep their retention settings as retention period and post retention actions.
{{/callout}}

Once on the **View** of the retention rule:
1. Click on the ICON **Delete document** icon.</br>
    A popup window is displayed.</br>

2. Confirm to delete the retention rule.


### {{> anchor 'extend-retention'}}Extend the retention of a document

When a document is under retention, you can lengthen the retention of the document.

{{#> callout type='warning' }}
This is an **irreversible action**: there is no way to shorten a retention period, even for an administrator.
{{/callout}}

Once on the **View** tab of your document:
1. Click on the ICON **More** icon and select **Extend retention**.</br>
    A popup window is displayed.</br>
    SCREENSHOT

2. Select the new expiration date (end of retention period) and click on **Extend retention**.</br>
    A top bar is displayed next to your document to notify users of the new expiration date.</br>
    SCREENSHOT



### Put a Document Under Legal Hold

There are different ways to put a document under a [Legal Hold]({{page page='nuxeo-retention-management'}}#legal-hold). You can apply a Legal Hold to a single document or to several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on the ICON **More** icon and select **Apply Legal Hold**.</br>
    A popup window is displayed.</br>
    SCREENSHOT

2. Fill the description and click on **Apply Legal Hold**.</br>
    A top bar is displayed next to your document to notify users that the document is under a Legal Hold.</br>
    SCREENSHOT

#### From a Result list

After having performed a search from the regular search menu, a list of results is displayed. For example, you only want to apply a Legal Hold to the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results you can click on **Apply Legal Hold** at the top-right of the screen.

SCREENSHOT

Here too, fill the description field from the popup window and confirm.

{{#> callout type='note' }}
The Legal Hold will be applied on **all the documents displayed on the page**.
{{/callout}}

### Remove a Legal Hold

There are different ways to remove a Legal Hold. You can remove a Legal Hold for a single document or for several documents in a row.

#### From a Document View

Once on the **View** tab of your document:
1. Click on the ICON **More** icon and select **Remove Legal Hold**.</br>
    A popup window is displayed.</br>
    SCREENSHOT

2. Click on **Remove Legal Hold**.</br>
    A top bar is displayed next to your document to notify users that the document is not under a Legal Hold anymore.</br>
    SCREENSHOT

#### From a Result list

After having performed a search from the regular search menu, a list of results is displayed. For example, you only want to remove a Legal Hold to the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results you can click on **Remove Legal Hold** at the top-right of the screen.

SCREENSHOT

Here too, confirm from the popup window.

{{#> callout type='note' }}
The Legal Hold will be removed for **all the documents displayed on the page**.
{{/callout}}


### Create a retention event

To create a new [retention event]({{page page='nuxeo-retention-functional-overview'}}#retention-events):
1. Go to the Retention menu.
2. Click on **Retention events** menu
3. Click on the **Create** button. </br>
    The creation popup is displayed.

    - **Title**: Title of the event to create

    - **Description**: Description of the retention event. The description is here for information purpose

    - **Event type**: Select the type of event you want to create among a list of available types</br>
    Examples: Contract terminated, Employee left the company, Repayment of loan,...

    - **Event field value**: Fill the value related to the event</br>
    Examples: Contract number, employee identifier, loan reference,...

4. Click on create

At this stage, the event is created on Nuxeo Platform, and the retention rules fitting with this event will trigger the retention period for the involved documents.

### Retention search

The **retention search** is a dedicated search with criteria related to the retention management.

This search contains filters on:

  - the attached retention rule

  - the expiration date (past and future)

  - the retention status (active retention, expired, not under retention)

This search is available on the **Retention menu** provided by the Nuxeo Retention Management addon.

### View history related to retention actions

#### History on a document

Once on the **History** tab of your document, you can see all the events related to the retention among:

  - Application of a retention rule to the document

  - Override of the retention period

  - Application of a Legal Hold on the document

  - Removing of a Legal Hold on the document

#### General history

Once on the **Administration/Audit** page, you can see all the events related to the retention, including the [retention events]({{page page='nuxeo-retention-functional-overview'}}#retention-events) that have been created on the platform.


## As a User

As a user, you will see some differences between a document under retention or under legal hold compared to a standard document.

Once on the **View** tab of your document:

  - There is an info header displaying retention information or legal hold

  - The **Delete document** and **Trash document** actions are not available

  - The **replace** action on the main file is not available

  </br>
