---
title: 'HOWTO: Insert a New Tab'
review:
    comment: ''
    date: '2017-08-21'
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
    - content-review-lts2017
tree_item_index: 1400

---
In this tutorial you will learn how to add a new tab to your custom document type. This tab will help you to find other contracts created for the same contract owner. To do so, we'll be using a custom page provider linked to the Contract document type.


## Prerequisites
- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Nuxeo Modeler
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

Once you are all set, you can navigate to Modeler to start creating your search.

## Create a Page Provider

{{{multiexcerpt 'quick-switcher' page='web-ui-document-layouts'}}}

1. In Studio Modeler, go to Customization, go to **Page Providers**, click on **New** and name it _otherContracts_.
1. In the Query filter add the following line `AND ecm:primaryType='Contract'`. This will enable to only search contract documents.</br>
   You should end up with something like this:

   ```
   ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:primaryType='Contract'
   ```

Now we will add aggregates to customize the search.

**The search by owner of the contract:**
![]({{file version='' space='nxdoc' page='web-ui-search' name='contract-owner-vd.png'}} ?w=250,border=true)
1. Add another new Predicates
1. Click on **Edit binding** and select `schema:contract` > `owner`

**The search by date range:**
![]({{file version='' space='nxdoc' page='web-ui-search' name='creation-date-range-vd.png'}} ?w=250, border=true)
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
1. Save your changes.

### Configure Layouts

Once you are all set, you can navigate to the Studio Designer to configure your layouts.
1. In **UI**, go to **Layouts** > **Page Providers** > **otherContracts**
1. Click on **form**  and then **Configure**, it will automatically create the `nuxeo-othercontracts-search-form` layout.
1. Do the same with the **result** button, click on **Configure**, the `nuxeo-othercontracts-search-results` layout is created.


## Create a Listing
Go to the Designer:
1. Click on **UI** > **Tabs**   
1. Hover over the Create button ![]({{file version='' space='nxdoc' page='web-ui-overview' name='create_button.png'}} ?w=20) and select the **Listing** type ![]({{file name='listing_button.png'}} ?w=20)
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
