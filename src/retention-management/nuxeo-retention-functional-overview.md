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

Once the module is installed, different menus and actions are available throughout your instance.

- New menus are available in the left side menu:</br>
    ICON: A retention search that lets you search through all the documents under retention and/or legal hold.</br>
    ICON: A retention rules menu that displays in the drawer the list of retention rules defined on your instance.

- A **Retention rule** document type is available, it can only be created under the retention rules folder.

- Regarding access rights, a **RecordManager** group is added to your instance, to let you add users in it.
Also a new permission is created called **Manage record** TODO: EXPLAIN MANAGE RECORD PERMISSION.

### Create a Retention Rule

To create a new [retention rule]({{page page='nuxeo-retention-management'}}#retention-rules):
1. Go to the Retention menu.
1. Click on the **Create** button. </br>
    The creation popup is displayed.

TODO


### Put a Document Under Retention

There are different ways to put a document under retention. You can attach a retention to a single document or to several documents in a row.

#### From a Document View

Once on the **View** tab of your document (picture, video, audio or file):
1. Click on the ICON **More** icon and select**Attach retention rule**.</br>
    A popup window is displayed.
    SCREENSHOT

1. Select the retention rule needed from the drop-down list and click on **Attach retention rule**.</br>
    A top bar is displayed next to your document to notify users that the document is or will be, under retention.
    SCREENSHOT

#### From a Result list

After having performed a search from the regular search menu, a list of results is displayed. For example, you only want to retain the documents created in the last 24H, or the ones tagged with a specific tag, etc. From this list of results you can click on **Attach retention rule** at the top-right of the screen.

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

### Put a Document Under Legal Hold




## As a User




## Limitations
