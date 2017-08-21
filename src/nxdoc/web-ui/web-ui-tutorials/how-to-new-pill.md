---
title: "HOWTO: Insert a New Pill"
review:
    comment: ''
    date: '2017-08-21'
    status: ok
toc: true
details:
     howto:
         excerpt: Learn how to insert a new pill
         level: Intermediate
         tool: Designer
         topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - pill
    - page-provider
tree_item_index: 1400
---
{{#> callout type='note' }}
The View Designer is not available for everyone yet, but if you can't wait any longer to try it, do not hesitate to contact your sales representative to enable it on your project.
{{/callout}}

In this tutorial you will learn how to add a new pill to your custom document type. This pill will help you to find other contracts created for the same contract owner. To do so, we'll be using a custom page provider linked to the Contract document type.

## Prerequisites
- A [Contract document type]({{page version='810' space='nxdoc' page='getting-started-with-nuxeo-studio'}}#step-3-create-a-contract-document-type) created in Modeler
- Web UI addon installed on your instance
- View Designer enabled on your Studio project

Once you are all set, you can navigate to Modeler to start creating your search.

## Create a Page Provider

1. In Customization, go to **Page Providers**, click on **New** and name it _otherContracts_.
1. In the Query filter add the following line `AND ecm:primaryType='Contract'`. This will enable to only search contract documents.</br>
   You should end up with something like this:

   ```
   ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted' AND ecm:primaryType='Contract'
   ```

Now we will add aggregates to customize the search.

**The search by owner of the contract:**
![]({{file version='810' space='nxdoc' page='web-ui-search' name='contract-owner-vd.png'}} ?w=250,border=true)
  1. Add another new Predicates
  1. Click on **Edit binding** and select `schema:contract` > `owner`

**The search by date range:**
![]({{file version='810' space='nxdoc' page='web-ui-search' name='creation-date-range-vd.png'}} ?w=250, border=true)
1. Next to **Aggregates** click on **Add**
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

You now need to add your labels to your translations file to display them correctly in the UI. To do so:

1. Click on the **UI** table
1. Click on **Translations**
1. Use the default `messages.json` or create your own language.
1. Create a new entry in the JSON file with key `label.ui.aggregate.<label>` and the label as value. Here it's:

    ```
    `"label.ui.aggregate.from_now-1y_to_now-1M":"Last year"`,
    `"label.ui.aggregate.from_now-1M_to_now-7d":"Last month"`,
    `"label.ui.aggregate.from_now-7d_to_now-24H":"Last week"`,
    `"label.ui.aggregate.from_now-24H_to_now":"Last 24H"`
    ```

You can now save your changes and go to the Designer.

## Create a Listing
Go to the Designer:
1. Click on **UI** > **Document Pages**   
1. Hover over the Create button ![]({{file space='nxdoc' version='' page='nuxeo-web-ui' name='create_button.png'}}) and select the **Listing** type ![]({{file name='listing_button.png'}} ?w=20)
1. Name it `other-contracts`.
1. Fill in the creation form like this:
  ![]({{file name='other-contract.png'}} ?w=450,border=true)
1. Fill in the **Element & Attributes** section like this:
  ![]({{file name='other-contract-elements-attributes.png'}} ?w=450,border=true)
1. Fill in the Filters section like this:
  1. **Current user has one of the permissions**: `Edit`
  1. **Current document has one of the types**: `Contract`
1. Save your changes.  

You can now deploy your project on your instance and see what it looks like!
![]({{file name='other-contract-result.png'}} ?w=500, border=true)
