---
title: Nuxeo for Salesforce
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - salesforce-component
toc: true
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+for+Salesforce
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+for+Salesforce'
    page_id: '28475742'
    shortlink: XoGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XoGyAQ'
    source_link: /display/NXDOC710/Nuxeo+for+Salesforce
history:
    -
        author: Solen Guitter
        date: '2016-03-18 09:38'
        message: ''
        version: '31'
    -
        author: Vladimir Pasquier
        date: '2016-03-15 18:25'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-02-08 09:23'
        message: 'Add tip '
        version: '29'
    -
        author: Solen Guitter
        date: '2016-01-04 09:43'
        message: ' Improve SFDC docs'
        version: '28'
    -
        author: Solen Guitter
        date: '2015-12-21 16:43'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-12-16 14:54'
        message: ''
        version: '26'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 21:17'
        message: ''
        version: '25'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 21:13'
        message: ''
        version: '24'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 21:11'
        message: ''
        version: '23'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 21:06'
        message: ''
        version: '22'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 21:05'
        message: ''
        version: '21'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:55'
        message: ''
        version: '20'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:52'
        message: ''
        version: '19'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:50'
        message: ''
        version: '18'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:50'
        message: ''
        version: '17'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:49'
        message: ''
        version: '16'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:48'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:48'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2015-12-15 20:47'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-11-30 09:43'
        message: >-
            NXDOC-658: Marketplace packages are now called Nuxeo Packages,
            format
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2015-11-05 21:44'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2015-11-05 21:40'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2015-10-13 17:47'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2015-10-09 20:38'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2015-10-06 19:12'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2015-10-06 17:39'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2015-10-06 17:39'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2015-09-28 20:01'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2015-09-28 19:47'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2015-09-28 19:47'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2015-09-28 19:32'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Nuxeo for Salesforce addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-salesforce) allows Salesforce (SFDC) users to attach documents to their Salesforce Objects (such as Opportunities, Contacts, Accounts...) through the Salesforce UI within a Nuxeo server.

{{! /excerpt}}

See [GitHub Readme](https://github.com/nuxeo/nuxeo-salesforce) for the Dev project description.

## Functional Overview Video

{{> wistia_video id='9pfro1cpv1'}}

## Installation and Configuration

### Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

### Nuxeo Platform Configuration

1.  Set up the HTTPS configuration.
    Salesforce is requiring Nuxeo server to be accessed through HTTPS. Follow this [documentation]({{page space='admindoc710' page='http-and-https-reverse-proxy-configuration'}}) to configure your reverse proxy for production purpose. For a dev or test environment, you can configure your Nuxeo server in HTTPS directly with the following configuration parameters example:

    ```
    nuxeo.server.https.port=8443
    nuxeo.server.https.keystoreFile=/Users/vpasquier/.keystore
    nuxeo.server.https.keystorePass=******
    ```

    You can setup the keystore by following the [Oracle documentation](https://docs.oracle.com/cd/E19509-01/820-3503/ggfen/index.html).

2.  Add the following configuration parameter (in **Admin** > **Cloud Services** > **OAuth2 Provider** > **Add**):

    ```
    ID=salesforce
    CliendID=YOUR_SALESFORCE_CONSUMER_KEY
    User Authorization URL=https://NUXEO_SERVER/nuxeo/picker/callback/callback.html
    ```

3.  Set up your browser to access Nuxeo for Salesforce from within Salesforce.
    If you're using Firefox browser, you don't need to configure it. However with Chrome, here are the guidelines to allow the access:
    1.  Authorize `Popups` from Salesforce (to allow OAuth execution).
    2.  Go to `https://NUXEO_SERVER/nuxeo` and allow Chrome to access in HTTPS your Nuxeo server.

### Salesforce Configuration

In your Salesforce account, you can setup the Nuxeo for Salesforce plugin through the Salesforce Marketplace (In progress).

You can also set it up directly from your Salesforce dashboard. Note that these instructions assume you are using "Salesforce Classic", not the "Lightning Experience". You can adapt them for the Lightning Experience, or disable it via  **Setup Home**&nbsp;> **Lightning Experience**. Scroll to the bottom to disable it.

1.  Go in your Salesforce dashboard.
2.  Go on **Setup** (top right).
3.  Go to **Build**&nbsp;> **Create**&nbsp;> **Apps**.
4.  Click the **New** button under **Connected Apps** named `Nuxeo` (it MUST be named "Nuxeo"):

    1.  Enable OAuth settings and set the callback URL: `https://NUXEO_SERVER/nuxeo/picker/callback/callback.html`
    2.  Add all available Scopes.
    3.  Enable Force.com Canvas and set the App URL `https://NUXEO_SERVER/nuxeo/picker`.
    4.  Select **OAuth Webflow** for **Access Method**.
    5.  Configure **Canvas App locations** and add **Layouts and Mobile Cards**.
5.  Save the "Nuxeo" Connected App.
6.  Go to **Build**&nbsp;> **Customize** and choose any SFDC Object, e.g. "Opportunities".
7.  Click on **Pages Layout** to edit the SFDC Object page layout.
8.  Add the Nuxeo Canvas App anywhere in the page.

    *   Hint: Choose "Canvas Apps" in the list of available objects.
    *   Tip: if you add a new "Section" you need to save the layout before you can drop the Nuxeo Canvas App.
9.  Save the layout.
    Now when an Opportunity is opened the Nuxeo widget will be enabled.

## Synchronization - Salesforce vs Nuxeo

The default behavior of Nuxeo Salesforce plugin is to bind the current Salesforce Object to a `Workspace` document type and the way the metadata are synchronized. This document type `Workspace` has a new facet `salesforce` to store the SF object id.

Each time a SF user is displaying a SF object in his SF console, Nuxeo is going to create/retrieve the related workspace, listing all its children.

### Default Behavior

The Automation operation script `javascript.FetchSFObject` can be overriden in order to bind the current Salesforce object to a specific document in Nuxeo.

{{#> panel type='code' heading='javascript.FetchSFObject'}}

```js
<scriptedOperation id="javascript.FetchSFObject">
  <inputType>void</inputType>
  <outputType>void</outputType>
  <category>javascript</category>
  <script>
    function run(input, params) {
      var sfobject = {};
      sfobject.id = params.sfobjectId;
      sfobject.name = params.sfobjectName;
      var docs = Repository.Query(null, {
        'query': "SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND sf:objectid = '" + sfobject.id + "' AND ecm:isCheckedInVersion = 0 AND ecm:mixinType != 'HiddenInNavigation'",
      });
      if (docs.length>0) {
        return Repository.GetDocument(null, {
          'value': docs[0].id
        });
      } else {
        var workspaces = Repository.GetDocument(null, {
            "value" : "/default-domain/workspaces"
        });
        var newSFobject = Document.Create(workspaces, {
              "type" : "Workspace",
              "name" : sfobject.name,
              "properties" : {
                  "dc:title" : sfobject.name,
                   "sf:objectid" : sfobject.id
              }
        });
        return newSFobject;
    }}]]>
  </script>
</scriptedOperation>
```

{{/panel}}

In the operation, the parameter `param` of the function provides three attributes: `sfobjectid`, `sfobjectname` and `sfobjecttype`.

### Override Example

Here is an example of overriding the SF object binding: When I enter my SF object, like account or an opportunity, the operation below is executed.

1.  Nuxeo checks if this object is already bound with a Nuxeo document through `sfobject.id`.
2.  It returns the Nuxeo document if exists.
3.  If the Nuxeo object doesn't exist, it creates it in the appropriate location:
    *   If the SF object is an account, place it under the document `/default-domain/workspaces/Custom` or under his parent account.
    *   If the SF object is an opportunity, place it under his parent account.
4.  The metadata are synchronized from Salesforce to Nuxeo (checking if metadata have been changed).

This behavior is implemented by this operation.

{{#> panel type='code' heading='New Behavior'}}

```js
function run(input, params) {
      var sfobject = JSON.parse(params.sfObject);
      // We are checking if the document is existing. If not we're going to check the rules to create it accordingly.
      var docs = Repository.Query(null, {
        'query': "SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND sf:objectId = '" + sfobject.Id + "' AND ecm:isCheckedInVersion = 0 AND ecm:mixinType != 'HiddenInNavigation'",
      });
      if (docs.length>0) {
        return versarDocument(docs[0],sfobject);
      } else {
        var newSFobject = {};
          // We are checking if an account has a parent account or not and create it beneath the appropriate document.
          if(sfobject.attributes.type === "Account") {
            if(sfobject.ParentId ===  null){
              var proposals = Repository.GetDocument(null, {
                  "value" : "/default-domain/workspaces/Custom"
              });
              newSFobject = Document.Create(proposals, {
                    "type" : "ParentAccount",
                    "name" : sfobject.Name,
                    "properties" : {
                        "dc:title" : sfobject.Name,
                         "sf:objectId" : sfobject.Id
                    }
              });
            }else{
              var parents = Repository.Query(null, {
                'query': "SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND sf:objectId = '" + sfobject.ParentId + "' AND ecm:isCheckedInVersion = 0 AND ecm:mixinType != 'HiddenInNavigation'",
              });
              newSFobject = Document.Create(parents[0], {
                    "type" : "AccountName",
                    "name" : sfobject.Name,
                    "properties" : {
                        "dc:title" : sfobject.Name,
                         "sf:objectId" : sfobject.Id,
                         "sf:Parent_Account" : parents[0]["dc:title"];
                    }
              });     
            }
          } else {
            if(sfobject.Contract_ID === null) {
              var accounts = Repository.Query(null, {
                'query': "SELECT * FROM Document WHERE ecm:currentLifeCycleState != 'deleted' AND sf:objectId = '" + sfobject.AccountId + "' AND ecm:isCheckedInVersion = 0 AND ecm:mixinType !=  'HiddenInNavigation'",
              });
              var account = accounts[0];
              var properties = getProperties(newSFobject, sfobject);
              properties["dc:title"]=sfobject.Name;
              properties["sf:objectId"]=sfobject.Id;
              newSFobject = Document.Create(account, {
                    "type" : "OpportunityName",
                    "name" : sfobject.Name,
                    "properties" : properties
              });
            }
          }
        return newSFobject;
       }
}
function versarDocument(doc, sfobject){
  if(sfobject.attributes.type === "Account") {
    var account = Repository.GetDocument(null, {'value': doc.id});
    return account;
  }else{
    var dirtyProperties = getProperties(doc, sfobject);
    var opportunity = Document.Update(
    doc, {
      'properties': dirtyProperties
    });
    return opportunity;
  }
}
function getProperties(doc, sfobject){
  var dirtyProperties = {};
  if(sfobject.Contract_ID!==doc["sf:Contract_ID"]){
    dirtyProperties["sf:Contract_ID"]=sfobject.Contract_ID;
  }
  if(sfobject.Task_Order_Number!==doc["sf:Task_Order_Number"]){
    dirtyProperties["sf:Task_Order_Number"]=sfobject.Task_Order_Number;
  }
  if(sfobject.Contract_Ceiling_Value!==doc["sf:Contract_Ceiling_Value"]){
    dirtyProperties["sf:Contract_Ceiling_Value"]=sfobject.Contract_Ceiling_Value;
  }
  if(sfobject.StageName!==doc["sf:Stage"]){
    dirtyProperties["sf:Stage"]=sfobject.StageName;
  }
  return dirtyProperties;
}
```

{{/panel}} {{#> callout type='warning' heading='Studio'}}

Those two operations can be overridden inside a Nuxeo Studio project easily by creating two operations for instance: `SFGetChildren` and `FetchSFObject`.

In order to find all your metadata in Salesforce, go to **Setup** > **Customize** > **Your Object** > **Fields**. You will be able to map correctly all the Nuxeo and SF metadata with the appropriate field keys.

{{/callout}}

## Documents Listing

### Default Behavior

The Automation operation script `javascript.SFGetChildren` provides a way for the developer to customize the listing of the document content bound to the Salesforce object.

{{#> panel type='code' heading='javascript.SFGetChildren'}}

```js
<scriptedOperation id="javascript.SFGetChildren">
  <inputType>document</inputType>
  <outputType>documents</outputType>
  <category>javascript</category>
  <script>
    function run(input, params) {
        return Document.GetChildren(input, {});
    }}]]>
  </script>
</scriptedOperation>
```

{{/panel}}

### Override Example

For instance, the listing execution could be executed in an unrestricted session to list "unauthorized" documents only for title viewing (Salesforce or Nuxeo rights are not affected).

{{#> panel type='code' heading='javascript.SFGetChildren'}}

```js
function run(input, params) {
  Auth.LoginAs(null, {});
  var children =  Document.GetChildren(input, {});
  Auth.Logout(null, {});
  return children;
}
```

{{/panel}} {{#> callout type='warning' heading='Studio'}}

Those two operations can be overridden inside a Nuxeo Studio project easily by creating two operations for instance: `SFGetChildren` and `FetchSFObject`.

{{/callout}}
