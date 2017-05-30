---
title: Customizing Nuxeo Platform with Studio and View Designer
review:
    comment: 'Created Tutorial'
    date: '2017-05-23'
    status: ok
labels:
    - studio
    - customization
toc: true
hidden: true
tree_item_index: 250

---

This tutorial introduces you to a few important aspects of **Nuxeo Studio** so that you can take advantage of this great product as quickly as possible.

{{#> callout type='warning' }}
This tutorial makes use of **View Designer**, a new customization tool for Nuxeo Web UI. **View Designer** is currently available through a limited release. If you don't have access yet and would like to try it out, please contact your Nuxeo representative.
{{/callout}}

## Introduction

We've implemented a very simple workflow on the BCContract document type, `BCContractCancel_WF` allowing any BigCorp employee to cancel a contract. Once launched, the request will pass through a manager to confirm the cancellation.

BigCorp now needs another feature added to the workflow: have someone from Accounting specify the amount to refund to the client, with a full refund automatically granted to cancellations that occur within 10 days of signing.

In the steps below, we will show you how to add custom schemas, automation chains and workflow steps to fulfill this feature request.

## Setting Up

First, we'll set up the Nuxeo Platform so it's ready for you to configure.

### Nuxeo Platform

DOWNLOAD AND REGISTER THE NUXEO PLATFORM

1.  [Download Nuxeo Platform](https://www.nuxeo.com/downloads/) and unzip the archive.

2.  Set the platform to **Dev Mode**: open `NUXEO_HOME/bin/nuxeo.conf` and set `org.nuxeo.dev` to `true`.

3.  Register your instance:

{{#> panel heading='**MAC OS** / **LINUX**'}}

```bash
$ chmod +x ./bin/nuxeoctl
$ ./bin/nuxeoctl register
```
{{/panel}}

{{#> panel heading='**WINDOWS**'}}

```bash
> .\bin\nuxeoctl.bat register
```
{{/panel}}

Use your **Nuxeo Online Services** credentials and follow the steps. If you don't have a **NOS** account yet, use the command `register-trial` to sign up for your 30-day free trial.

4.  Install any dependencies needed for the tutorial:

{{#> panel heading='**MAC OS** / **LINUX**'}}

```bash
$ ./bin/nuxeoctl mp-install nuxeo-dam nuxeo-web-ui nuxeo-jsf-ui
```
{{/panel}}

{{#> panel heading='**WINDOWS**'}}

```bash
> .\bin\nuxeoctl.bat nuxeo-dam nuxeo-web-ui nuxeo-jsf-ui
```
{{/panel}}

5.  Start Nuxeo Server:

{{#> panel heading='**MAC OS** / **Linux**'}}

```bash
$ ./bin/nuxeoctl console
```
{{/panel}}

{{#> panel heading='**Windows**'}}

```bash
> .\bin\nuxeoctl.bat console
```
{{/panel}}

### Wizard

1.  Open Chrome or Firefox and navigate to [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo).

2.  Follow the steps in Nuxeo Platform Wizard to complete the installation. You don't need to register or select any more addons. The server will restart at the end.

3.  While you're waiting for your server to restart, install [Nuxeo Dev Tools]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}) for Chrome or Firefox.


### Template

INSTALL THE GETTING STARTED TEMPLATE

1.  Log into Nuxeo Platform with the credentials *Administrator* / *Administrator*.

2.  Open [Nuxeo Dev Tools]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}) and click on the **Go to Studio** button.

3.  Log into Studio with your **NOS** credentials.

4.  Under the **Customization** menu in Studio, select **External Templates** and install the **Nuxeo Training: Getting Started** template.

5.  From Nuxeo Platform, open [Nuxeo Dev Tools]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}) again and click the **Hot Reload** button to update your instance with configurations from the template.

6.  Finally, log out of Nuxeo Platform and log back in again. Your Studio tutorial environment is now ready!

### Users & Groups

CREATE SAMPLE USERS

1.  Click on **Administration** ![Administration]({{file space='nxdoc' page='web-ui' name='administration.png'}} ?w=25), then **Users & Groups**.

2.  Click on **New** to create two new Users, **Jon Doe** and **Jane Smith**, setting passwords that you'll remember.

3.  Create a Group, **managers** and add Jane Smith to the group, then create a group **accounting** and add Jon Doe.

### Custom Documents

CREATE SAMPLE DOCUMENTS

Nuxeo Studio allows you to create your own document types and customize the metadata for each one. Let's take a look at one of the customized document types that we created for this tutorial.

1.  Click on **Browse** ![Browse]({{file space='nxdoc' page='web-ui' name='browse.png'}} ?w=25) and select **Domain** > **Workspaces** in the drawer panel from the side menu.

2.  Click on the **Create** ![]({{file version='' space='nxdoc' page='web-ui' name='create_button.png'}} ?w=25) button and create a workspace named **BigCorp**.

3.  Click on ![]({{file version='' space='nxdoc' page='web-ui' name='create_button.png'}} ?w=25) again to create a BC Portfolio with the following metadata:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Title**</td>
        <td>Generic Company</td>
      </tr>
      <tr>
        <td>**Company Size**</td>
        <td>(Select **Medium**)</td>
      </tr>
      <tr>
        <td>**Company Industry**</td>
        <td>(Select **Information Technology**)</td>
      </tr>
      <tr>
        <td>**First Name**</td>
        <td>Bob</td>
      </tr>
      <tr>
        <td>**Last Name**</td>
        <td>Jones</td>
      </tr>
      <tr>
        <td>**Tel**</td>
        <td>8765432</td>
      </tr>
      <tr>
        <td>**Email**</td>
        <td>bjones@company.com</td>
      </tr>
        <td>**Upload**</td>
        <td>Upload a logo of your choice!</td>
      </tr>
    </tbody>
  </table>
</div>

4.  On the Permissions tab, give both groups the Read & Write permission on this document.

5.  From within your created portfolio, click ![]({{file version='' space='nxdoc' page='web-ui' name='create_button.png'}} ?w=25) again. You'll notice that the only document we can create in a BC Portfolio is **BC Contract**.

{{#> callout type='tip' }}
To modify this constraint, under the **Customization** menu in Studio, select **Content Model** > **Document Types** > **BC Portfolio**. You can then add other document types to the **Accepted Children Types** on the **Definition** tab.
{{/callout}}

6.  Create a contract with the following metadata:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Title**</td>
        <td>GC Contract 1</td>
      </tr>
      <tr>
        <td>**Type**</td>
        <td>(Select **Fixed fee contract**)</td>
      </tr>
      <tr>
        <td>**Contract Owner**</td>
        <td>(Select **Jon Doe**)</td>
      </tr>
      <tr>
        <td>**Signature Date**</td>
        <td>February 28, 2017</td>
      </tr>
      <tr>
        <td>**Start Date**</td>
        <td>March 15, 2017</td>
      </tr>
      <tr>
        <td>**Expiration Date**</td>
        <td>March 15, 2018</td>
      </tr>
      <tr>
        <td>**Amount**</td>
        <td>25000</td>
      </tr>
    </tbody>
  </table>
</div>

## Schemas

CONFIGURE A NEW FIELD ON A CUSTOM DOCUMENT

First we'll add a metadatum to our schema to represent the amount to be refunded.

1.  In Studio, under the **Customization** menu, select **Content Model** > **Document Types** > **BCContract**, then click on the **Schema** tab.

2.  Add a new field to the schema: `refundAmount: Floating point`.

{{#> callout type='tip' }}
This field is directly related to the **BC Contract** document type, but if you want to create more general properties to be shared with other document types you can add them to a separate schema (**Customization** > **Content Model** > **Schemas**), or create your own.
{{/callout}}

3.  Save your changes and click on the **Open View Designer** button.

4.  Drag and drop the new property from **Catalog** in the right menu to the **nuxeo-bccontract-view-layout** and save.

{{#> callout type='tip' }}
Using the code editor ![]({{file version='' space='nxdoc' page='customizing-with-studio-and-view-designer' name='code_editor.png'}} ?w=25), you can drag and drop the property into a Polymer `dom-if` template. The one we've created will only appear in the document view layout if the contract has been cancelled.
{{/callout}}

## Automation Chains

CREATE A SIMPLE AUTOMATION CHAIN

Now let's create two simple automation chains to handle each refund case.

1.  Under **Automation** > **Automation Chains**, click on **New** to create a new automation chain, `BCContract_CancelFullRefund_AC`.

2.  Drag and drop the **Document** > **Document.SetProperty** operation to the chain.

3.  Reference the property to be set using the XPath, `bccontract:refundAmount`.

4.  Reference the original contract amount (`@{Document.getProperty("bcsalescommon:amount")}`) as the value in order to perform a **full refund**.

5.  Save your automation chain, then create another, `BCContract_CancelPartialRefund_AC`. This time instead of the full amount, we'll reference a workflow variable, `@{WorkflowVariables["refundAmount"]}` which we'll declare in the next step.

## Workflows

CONFIGURE A WORKFLOW

1.  Under **Workflow** > **Process Definitions**, select **BCContractCancel_WF**.

2.  On the **Variables** tab, add `refundAmount` as a **Floating Point** value.

3.  On the **Graph** tab, under the **Automated tasks** menu, drag and drop a **Node** to the graph area, then click ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) to edit it.

4.  Entitle the node, **Check Signature Date**.

5.  On the **Transitions** tab, add the transition `refundFull`. We only want to run this transition if the contract was signed 10 or fewer days ago, so we'll add an expression to evaluate that condition:

    ```java
    (CurrentDate.time - Fn.calendar(Document["bccontract:signatureDate"]).time) <= 864000000
    ```

6.  Select the `BCContract_CancelFullRefund_AC` automation chain for this transition.

7.  Create a second transition, `refundPartial` with a condition that checks for contracts more than 10 days ago, then save your node definition.

8.  From the **User Tasks** menu, create a **Simple Task** entitled **Enter Refund Amount**.

9.  BigCorp wants all partial refund amounts to be determined by someone on their accounting team, so we'll add `group:accounting` to the field **Assignees**.

10. On the **Variables** tab, ensure that the `refundAmount` variable is editable in this task, then added its widget to the form on the **Form** tab.

11. On the **Resolution Actions** tab, add a `confirmRefund` button, then link the confirm button to the `BCContract_CancelPartialRefund_AC` automation chain on the **Transitions** tab.

12. Finally, reorganize the nodes and transitions to implement our new logic, and save. You should have something like this:

![workflow]({{file space='nxdoc' page='customizing-with-studio-and-view-designer' name='workflow-final.png'}} ?w=350)

### Task Layouts

CONFIGURE THE DIALOG FOR EACH TASK

A few final touches to customize user interaction with our workflow.

1.  Open **View Designer** and scroll down the **Layouts** menu to open up our workflow layouts.

2.  Click on the **Enter Refund Amount** task layout to configure it.

3.  From the catalog, select **task** > **variables** > **refundAmount : double** > **edit** to add the input widget.

Return to Nuxeo Platform and perform another hot reload to deploy all your changes. Try launching the **Cancel Contract** process from your document. You'll have to log in again as the other users you've created in order to complete all the tasks.

## Search

BigCorp wants to personalize a Search form in order to perform fulltext searches on contracts only and filter the results by size (amount).

### Page Providers

CREATE A PAGE PROVIDER FOR A CUSTOM DOCUMENT

1.  In Studio, select **Page Providers**, then **New**.

2.  We'll give our page provider the ID `contract`. To the existing query filter, we'll add:

```sql
AND ecm:primaryType = 'BCContract'
```
which will filter our custom document type, `BCContract`.

{{#> callout type='tip' }}
You can add to the query filter to further tailor your search results. Try filtering out contracts that haven't been cancelled!
{{/callout}}

3.  Under **Predicates**, click **Add**. Click on **Edit binding** and select `schema:system` > `fulltext`.

3.  Next to **Aggregates**, click **Add** and select **Range** from the proposed Aggregate Types.

4.  Bind the `bcsalescommon:amount` field to the Aggregate, then add some ranges. For example:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Label</th>
        <th>From</th>
        <th>To</th>
      </tr>
      <tr>
        <td>Basic (up to €1,000)</td>
        <td>0</td>
        <td>1,000</td>
      </tr>
      <tr>
        <td>Silver (€1,000 - 5,000)</td>
        <td>1,001</td>
        <td>5,000</td>
      </tr>
      <tr>
        <td>Gold (€5,000 +)</td>
        <td>5000</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

5.  Save your Page Provider.

### Search Drawer

CUSTOMIZE A SEARCH

In **View Designer**, scroll down the **Layouts** menu to **Page Providers**, select **contract** and open **form** to configure the form layout.

1.  Drag the search elements from the menu on the right into the form and modify the labels as needed.

2.  Then open **results** and save to instantiate the search results layout.

3.  From the **UI** menu, select **Drawer** and hover over ![]({{file version='' space='nxdoc' page='web-ui' name='create_button.png'}} ?w=25) to select the Search drawer. Then fill in the form:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>Name</td>
        <td>**Contract**</td>
      </tr>
      <tr>
        <td>Available</td>
        <td>***enabled***</td>
      </tr>
      <tr>
        <td>provider</td>
        <td>`dublincore`, `bcsalescommon`, `bccontract`</td>
      </tr>
      <tr>
        <td>search-name</td>
        <td>`contract`</td>
      </tr>
      <tr>
        <td>auto</td>
        <td>`enabled`</td>
      </tr>
      <tr>
        <td>name</td>
        <td>**contract**</td>
      </tr>
      <tr>
        <td>Label</td>
        <td>**Contract Search**</td>
      </tr>
      <tr>
        <td>Icon</td>
        <td>Select an icon of your choice.</td>
      </tr>
      <tr>
        <td>Order</td>
        <td>Enter a number to indicate the icon's position in the left menu.</td>
      </tr>
    </tbody>
  </table>
</div>

4.  Finally, select **Translations** to modify the range labels. Following our previous example:

```javascript
{
  "label.ui.aggregate.from_0_to_1000":"Basic (up to €1,000)",
  "label.ui.aggregate.from_1001_to_5000":"Silver (€1,000 - 5,000)",
  "label.ui.aggregate.from_5001":"Gold (€5,000 +)"
}
```

Return to Nuxeo Platform, perform a hot reload and your customized search should be available. Create a few contracts and test your new Search.

{{#> callout type='tip' }}
Try customizing your search to filter contract types or owners.
{{/callout}}

## Branding

By now, I'm sure you've noticed our custom login page with the ever-conspicuous Big Corp logo. Not a fan? No problem! Let's modify the background image.

### Login page

CUSTOMIZE THE LOGIN PAGE

1.  In Studio, select **Branding** from the **Customization** menu, then **New**. Enter a name for your theme.

2.  On the tab **Login Page**, Select a background image or a background colors that matches your company's color scheme.

3.  Select a logo to be displayed within the Login box.

4.  Save, hot reload your project and log out of your Nuxeo instance to see the changes.

{{#> callout type='tip' }}
Our teams are working round the clock to improve the themes and styling of Web UI so that you can apply your own branding. Check in again soon to see the improvements we've made and to further customize your Nuxeo application.
{{/callout}}
