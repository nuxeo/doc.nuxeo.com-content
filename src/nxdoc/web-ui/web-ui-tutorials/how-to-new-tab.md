---
title: 'HOWTO: Insert a New Tab'
description: Learn how to add a new tab to a custom document type.
review:
  comment: ''
  date: '2019-07-18'
  status: ok
toc: true
details:
  howto:
    excerpt: Learn how to insert a new tab on your custom document type
    level: Intermediate
    tool: Designer
    topics: Web UI
labels:
  - lts2016-ok
  - nuxeo-web-ui
  - nuxeo-elements
  - tcardoso
  - nuxeo-ui-elements
  - page-provider
  - tab
  - lts2017-ok
  - lts2019-ok
tree_item_index: 1400
---

{{! excerpt}}
In this tutorial you will learn how to add a new tab to your custom document type. This tab will help you to find other contracts created for the same contract owner. To do so, we'll be using a custom page provider linked to the Contract document type.
{{! /excerpt}}

## Prerequisites

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Nuxeo Modeler.
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

Once you are all set, you can navigate to Modeler to start creating your search.

## Create a Page Provider

1. In Studio Modeler, open the Configuration > **Page Providers** menu; click on **New** and name it `otherContracts`.
1. In the Query filter add the following line `AND ecm:primaryType='Contract'`. This will enable to only search contract documents.</br>
   You should end up with something like this:

   ```
   ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:primaryType='Contract'
   ```

Now we will add aggregates to customize the search.

**The search by owner of the contract:**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a New Tab/contract-owner-vd.png
    name: contract-owner-vd.png
    1.1.3#screenshot#up_to_date
--}}
![contract-owner-vd.png](nx_asset://b3dac2ef-6a71-49a6-9136-708e52f07b39 ?w=250,border=true)

1. Add another new Predicates.
1. Click on **Edit binding** and select `schema:contract` > `owner`.

**The search by date range:**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a New Tab/creation-date-range-vd.png
    name: creation-date-range-vd.png
    1.1.3#screenshot#up_to_date
--}}
![creation-date-range-vd.png](nx_asset://263526ac-16b3-41e3-b45c-5a23c98405b0 ?w=250,border=true)

1. Next to **Aggregates** click on **Add**.</br>
   A popup window appears.
1. Fill the popup window like this:
   <div class="table-scroll">
   <table class="hover">
   <tbody>
   <tr>
   <th colspan="1">Field</th>
   <td colspan="1">dc:created</td>
   </tr>
   <tr>
   <th colspan="1">Date Ranges</th><td colspan="1">
   <ul>
       <li>Label: `Last year` From: `now-1y` To: `now-1M`</li>
       <li>Label: `Last month` From: `now-1M` To: `now-7d`</li>
       <li>Label: `Last week` From: `now-7d` To: `now-24H`</li>
       <li>Label: `Last 24h` From: `now-24H` To: `now`</li>
   </ul>
   </td>
   </tr>
   </tbody>
   </table>
   </div>
1. Save your changes.

Once you are all set, click on **Configure layouts in Designer** at the top-right of your screen.
You are now in Studio Designer, where you can configure the layouts of your Search.

### Configure Layouts

1. In Studio Designer, open the **UI** > **Layouts** > **Page Providers** menu.<br>
You will find the page provider created previously.
1. Click on **form** and then **Configure**, it will automatically create the `nuxeo-othercontracts-search-form` layout.
1. Click on **result** and then **Configure**, the `nuxeo-othercontracts-search-results` layout is created.

### Configure Labels

You now need to add your labels to your translations file to display them correctly in the UI. To do so:

1. In Studio Designer and from the **UI** tab, open the **Translations** menu.
1. Create a new `messages.json` file.
1. Create a new entry in the JSON file with key `label.ui.aggregate.<label>` and the label as value. Here it's:
  ```
  {
    "label.ui.aggregate.from_now-1y_to_now-1M":"Last year",
    "label.ui.aggregate.from_now-1M_to_now-7d":"Last month",
    "label.ui.aggregate.from_now-7d_to_now-24H":"Last week",
    "label.ui.aggregate.from_now-24H_to_now":"Last 24H"
  }
  ```

You can now save your changes and go to the Designer.

## Create a Listing

From the Page Provider screen for **otherContracts**:

1. In **Bind more elements**, select **Tab**.
1. Name it `other-contracts`.
1. Fill in the creation form like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a New Tab/other-contract.png
      name: other-contract.png
      studio_designer#screenshot#up_to_date
    --}}
    ![other-contract.png](nx_asset://3d8705d7-1e9a-4752-84b7-cdbad6942986 ?w=450,border=true)
1. Fill in the **Element & Attributes** section like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a New Tab/other-contract-elements-attributes.png
      name: other-contract-elements-attributes.png
      studio_designer#screenshot#up_to_date
    --}}
    ![other-contract-elements-attributes.png](nx_asset://209e3f72-ef8e-4fe9-847c-2b9e07a8c0b0 ?w=450,border=true)
1. Fill in the Filters section like this:
  - **Document has one of the types**: `Contract`
  - **User has at least one of the permissions**: `ReadWrite`
1. Save your changes.

You can now deploy your project on your instance and see what it looks like!
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a New Tab/other-contract-result.png
    name: other-contract-result.png
    1.1.3#screenshot#up_to_date
--}}
![other-contract-result.png](nx_asset://2409057b-9813-479c-83f5-8d753ad6a8be ?w=500,border=true)
