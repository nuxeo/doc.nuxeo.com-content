---
title: 'HOWTO: Display a Children Documents Listing'
review:
    comment: ''
    date: '2018-04-19'
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to create a listing displaying custom properties of the documents contained in a given space.
        level: Intermediate
        tool: Studio
        topics: 'Page Providers'
labels:
    - howto
    - studio
toc: true
tree_item_index: 1200
---

In Nuxeo Web UI, if you want to build a custom page providers to retrieve children document, typically for a folderish document type for example, you should use predicates instead of query parameters that were used on JSF UI side.

In this tutorial we want to display interesting business properties when listing the children documents of a contract portfolio:
- Owner
- Policy
- Start date
- End date

## Prerequisites

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}})
- The Nuxeo [Web UI addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) is installed on your instance.
- In Studio Modeler > **Settings** > **Application Definition**, make sure that Nuxeo Web UI is in the **Packages to Install** list.


## Create a Contract Portfolio

{{{multiexcerpt 'quick-switcher' page='web-ui-document-layouts'}}}

1. In Studio Modeler, under **Configuration**, click on the **Content Model** section, then **Document Types**.</br>
    Click on the **New** button.
1. Fill in the creation form as follows and click on **Next**:
   - **ID**: contractsPortfolio
   - **Extends**: Folder
   - **Label**: Contracts Portfolio
1. Fill in the Definition tab:
   - Select an icon for your portfolio, from your resources or from your desktop
   - **Accepted Children Types**: contract
   - **Document Facets**: Document is folderish
1. Save your changes by clicking on **Save** at the top right corner of the page.

Now click on **Configure layouts in Designer** at the top right of the page and configure the 5 layouts under your **contractsPortfolio** document type by clicking on **CONFIGURE** on each layout and save your changes.


## Create a Page Provider

1. Now in Studio Modeler, under **Configuration**, Click on **Page Providers**, then on **New** button.
1. Fill in the creation form as follows and click on Next:
   - **Feature ID**: portfolioContent
   - **Use ElasticSearch Index**: Yes
1. Fill in the query filter like this:

```
ecm:mixinType != 'HiddenInNavigation'
AND ecm:isVersion = 0
AND ecm:currentLifeCycleState != 'deleted'
```

1. Add a predicate on field: `Schema` > `System` > `ParentId` and take note of the name that has been given to it (likely to be `system_parentId`)

![]({{file name='portfolioContent-web-ui-modeler.png'}} ?w=650,border=true)

{{#> callout type='info' }}
Contrary to JSF UI, parameters are not inserted in the query then resolved using MVEL query parameters. Instead, we use predicates to define parameters in Modeler and resolve them using JavaScript in Designer.
{{/callout}}

## Configure a Listing

1. In modeler, on your portfolioContent page provider screen, click on **Configure layouts in Designer**
   You are now in Studio Designer.
1. On the **results** field, click on **Configure**
1. On the **table** results listing, click on **Edit**
1. At the bottom right of the page, click on **Switch to table editor**
1. Remove the **Modified** and **last Contributor** columns by clicking on the delete icon ![]({{file name='icon-trash.png' page='web-ui-search'}} ?w=20)
1. In the right column, select **contract** > **owner : string** in _view_ mode and drag and drop it after the title column.
1. Do the same with the **contract** > **policy : string**, **contract** > **start : date** and **contract** > **endDate : date** </br>
1. On the **Owner** and **Policy** column, click on the eye icon ![]({{file name='icon-eye.png' page='nxdoc/web-ui-search'}} ?w=20).</br>
   The 2 columns become grey. We will see after the deployment what this feature does.

   You should end up with the following screen:</br>
   ![]({{file name='portfolioContentListing-table-editor.png'}} ?w=650,border=true)

1. Save your changes by clicking on the **Save** button at the top right of the page


## Create a Tab

1. In Studio Studio Designer, go to **UI** > **Tabs**.
1. Hover over the **Create** button and select **Listing**.
1. Fill in the page like this:
   - **Name**: portfolioContentListing
   - **Label**: Content
   - **Order**: 1
   - **Provider**: portfolioContent
   - **Schemas**: dublincore, contract
   - **Search-name**: portfoliocontent
1. Unfold the down arrow at the bottom of the **Elements & Attributes** section
1. Add the following line next to the **params** field:</br>
   `{"system_parentId": "[[document.uid]]"}`

   ![]({{file name='portfolioContentListing-web-ui-designer.png'}} ?w=650,border=true)

  {{#> callout type='info' heading='Some explanations for params' }}
  - Elements are configured using JavaScript (JS). We are putting a JS object here (`{"key": "value", "anotherKey": "anotherValue"}`) that will be inserted in the element.
  - `system_parentId` is the name of the predicate we defined in Modeler. We are saying here that we want to assign a value to it.
  - `[[document.uid]]` is the value we assign to our predicate. In this case, we are using one way binding (symbolized by the double square brackets) to forward a value dynamically. The `document.uid` variable can be guessed easily once you know that you are parsing a [document entity-type]({{page version='' space='nxdoc' page='rest-api-entity-types'}}#document) using JS.
  {{/callout}}

1. At the bottom of the page, define the activation filter:

   - **Document has one of the type**: `contractsPortfolio`
   ![]({{file name='portfolioContentListing-web-ui-designer-part2.png'}} ?w=650,border=true)

1. Save your modification and deploy your Studio project


As we modified the **Owner** and **Policy** columns, they are available optionally. By clicking on **Columns Settings** icon, you can decide to display them or not.
![]({{file name='portfolioContentListing-columns-settings.png'}} ?w=350,border=true)
