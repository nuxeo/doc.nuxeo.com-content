---
title: Nuxeo Salesforce Connector
review:
    comment: ''
    date: '2021-01-14'
    status: ok
labels:
    - lts2020-ok
    - salesforce
toc: true
confluence:
tree_item_index: 2510
history:
    -
        author: Solen Guitter
        date: '2016-07-11 15:26'
        message: ix format and lin
        version: '40'
    -
        author: Anne Jubert
        date: '2016-07-11 15:21'
        message: ''
        version: '39'
    -
        author: Anne Jubert
        date: '2016-06-29 09:41'
        message: ''
        version: '38'
    -
        author: Anne Jubert
        date: '2016-06-29 08:03'
        message: ''
        version: '37'
    -
        author: Anne Jubert
        date: '2016-06-28 19:41'
        message: ''
        version: '36'
    -
        author: Anne Jubert
        date: '2016-06-28 19:39'
        message: ''
        version: '35'
    -
        author: Anne Jubert
        date: '2016-06-28 15:36'
        message: ''
        version: '34'
    -
        author: Anne Jubert
        date: '2016-06-28 15:34'
        message: ''
        version: '33'
    -
        author: Anne Jubert
        date: '2016-06-28 15:21'
        message: ''
        version: '32'
    -
        author: Vladimir Pasquier
        date: '2016-06-16 15:30'
        message: ''
        version: '31'
    -
        author: Joshua Fletcher
        date: '2016-02-05 00:35'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-01-04 09:43'
        message: ''
        version: '29'
    -
        author: Joshua Fletcher
        date: '2015-12-30 22:48'
        message: Improve SFDC docs.
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
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages, format'
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

{{#> callout type='info' heading='University'}}
Watch the related course on Nuxeo University:</br>
[Nuxeo Salesforce Connector](https://university.nuxeo.com/learn/course/external/view/elearning/221/salesforce-connector)
![]({{file name='nuxeo-salesforce-connector.png'}} ?w=350)
{{/callout}}

The [Nuxeo Salesforce connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-salesforce) covers several use cases of integration between the Nuxeo Repository and Salesforce:
- binding a folder in Nuxeo and an object (opportunity, case, account, etc.) in Salesforce, for object-level document/media library
- presenting to salesforce users object-contextual lists of documents based on custom metadata queries
- general search across the Nuxeo repository

See [GitHub Readme](https://github.com/nuxeo/nuxeo-salesforce) for the Dev project description.

## Installation

### Architecture

The Nuxeo Salesforce connector is made of:

- a server part, made available as a [Nuxeo marketplace package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-salesforce) `nuxeo-salesforce` that installs a Nuxeo Platform addon.
- a Salesforce unlocked package that installs some Salesforce lightning components and a few more Salesforce resources

### Nuxeo Marketplace Package Installation

The Nuxeo Marketplace package can be found [here](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-salesforce).

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

Server requirements:
- You must be on HF-34 at least to benefit from all required bugfixes for an optimal experience with the Salesforce connector.
- You also must set `sameSite` cookie policy in `nuxeo.conf`:
`nuxeo.server.cookies.sameSite=none`.
- Server must always be accessed in HTTPS.
- If you deploy with direct download enabled, you will have to deploy a CORS configuration on the S3 bucket to allow downloads from  *force.com* type of URLs.

### Salesforce Package Installation

Prerequisites:

- You must have installed the [Salesforce CLI](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_cli) and have it authenticated against your Salesforce organization.
- Your Salesforce organization must be on Salesforce lightning, Salesforce Aurora is not supported.

The Nuxeo Salesforce package is currently made available as an [unlocked package](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm). Nuxeo will, longer-term, publish it as a managed package on Salesforce marketplace.

To install the version of the unlocked salesforce package, that has been validated with the version of the Nuxeo marketplace package installed on your pre-production Nuxeo server instance, using `sfdx` client:

```
sfdx force:package:install -p 04t7R000001WYVjQAO -k nxapp@sfdc
```

`04t7R000001WYVjQAO` is the version id of the salesforce package for 10.10.14 version of the Nuxeo Marketplace package. We will let on the Nuxeo Package description on the Nuxeo Marketplace the right Salesforce package version id to use for a given Nuxeo package version.  

### Post Installation Setup

After installing the package, you need to configure Salesforce to be able to use the Nuxeo application.

#### Define the Nuxeo Application Administrators

Add the `Nuxeo_Admins` permission set to the Salesforce user(s) that are allowed to configure the Nuxeo application (user bound to `sfdx` authentication already has the permission set so this is an optional step):

1. Go to **Setup** > **Users**,
1. Click on the name of the target user,
1. Then go to the `Permission Sets` section to add the permission set,
1. Choose "Permission Set Assignments",
1. Then select `Nuxeo_Admins`.

This can also be done from command-line using the command:
```
sfdx force:user:permset:assign
```

#### Define the Nuxeo Application Users

Add the `Nuxeo_Users` permission set to the Salesforce users allowed to use the Nuxeo application, as we explained above. You can also use **Permission Set Groups** to easily assign permission groups to multiple users.</br>
Currently, Salesforce doesn't support assigning permission sets to **Public Groups**.

#### Add the Target Nuxeo Domain URL to CSP Trusted Sites

1. Go to **Setup** > **CSP Trusted Sites**.
1. Create a new **Trusted Site** using the base HTTPS URL of the target Nuxeo server, without the trailing `/nuxeo` path. </br>
    Example: `https://your.nuxeo-instance.com`.
1. Make sure to select all the sources.

{{#> callout type='note' }}
The CSP policy is not always taken into account immediately. To avoid some cache issues, we recommend that you log out and log in again.
{{/callout}}

#### Create a Nuxeo Connection

As a `Nuxeo_admins` user open the **Nuxeo** tab (this tab is only visible for Nuxeo_Admins) and follow the connection setup wizard. Don't forget to set the right username/password for the cURL call.  

{{#> callout type='note' }}
You will need Nuxeo instance admin credentials.
{{/callout}}

You can detect a cache issue when validating your connection if you don't get the confirmation of the correct configuration. Opening the dev console you will see some errors related to content policy on CMIS endpoint.

### Validate Your Setup

You can validate that your setup is correct by using the Nuxeo Salesforce lightning component on a given SF object's page (ex: an Opportunity record):

1. Browse an opportunity record (or create one if you have none).
1. Click on **Edit page** with an admin user of the organization.
1. On the Layout design page of the record view, drop the Nuxeo component somewhere inside the layout.
1. Activate the configuration (select Desktop).
1. Save.
1. Go back to the record screen.

If all previous steps went ok, you should be able to click on a **Log in** button, that will open a pop up asking for authentication against the Nuxeo server if the user is not already authenticated in there.

You can then drop a document in the library, it will be created in the Nuxeo repository: everything is working!

### Next Steps

You will see below that there are three modes for the Nuxeo component. You can use all of the modes in various places of your salesforce application, as many time as you need. We advise you to get familiar functionally with the various modes and their goals reading the generic functional documentation,  and then to focus on configuring each component you need in regards to your business requirements, reading the configuration/ customization documentation.

## Functional Overview

The Nuxeo Salesforce lightning component can behave in three different ways depending on its configuration:

- **Library**: this mode exposes a content library browser with the ability for the user to drag and drop documents and create folders.

- **Content list**: this mode exposes the result of a query in the Nuxeo repository matching the list of content required for a given business context, with an option for searching for additional documents to add to that list.

- **Search**: this mode displays a simple search user interface to look for documents across all the Nuxeo repository, with respect to security.

In all of those modes, the user can open a given document and see many details on it. We will start by documented that "document view", and then review each of the modes to provide functional help on using them.

### Document Panel

The Nuxeo connector for Salesforce provides a way to access lists of documents, related to a search or the content of a folder. When clicking on the document title in the result, it opens a document panel organized by tabs and with some actions bars.

User can find the following fields in the document panel:

- **Document actions**, all grouped on the top right of the panel.</br>
  By order:
   - **Edit with Nuxeo Drive**: displayed when the user has the permission Write on the document, it allows to open the document for editing it with its native editor, like MS Word, or MS Excel.
   - **Open in Nuxeo**: open the document in the Web UI user interface.
   - **Download**: performs a download of the main file (stored under the document property `file:content`).
   - **Upload file**: available when the user has the Write permission on the document, to replace the main file (stored under the document property `file:content`)
   - **Lock**: available when the user has the Write permission on the document, allows locking the document. See [user documentation about locking]({{page space='userdoc' page='content-lock'}}).
   - **Maximise**: maximize the document panel, usually for having more space to preview the open content.
   - **Close**: closes the document panel.

- **Preview tab**: opens a preview of the document. Office documents are rendered in PDF, images are displayed as they are and videos are displayed with a player, using a smaller rendition than the original file.

- **Data tab**: displays generic metadata of the document (version label, state, list of tags, date of creation and modification and creator), a list of renditions available on the doc (PDF, thumbnail, ...), additional attachments (as they can be attached from Web UI).

- **History**: displays the last five audit entries on the document. The audit tracks all events happening on a document (modifications, creation, move, copy, ...).

### Content Library

The Content library mode is ideal when you want to offer a minimalistic document management system for each Salesforce objects. A typical use case can be when you want to manage the documents you exchange both ways with a prospect or a customer, on an opportunity or a case.

When the Nuxeo component is configured on a record page for the content library use case, the first time a user drops content on a Salesforce record instance, the Nuxeo component will create a folder in the Nuxeo repository with the same name and title as the record title, and create the dropped file underneath. From there a user can create a set of folders and subfolders to organize the content the way he needs.

On the content library component, the user can:

- Create folders, clicking on **New Folder**.
- Upload new files, either by drag and drop (it supports multiple files at once) or using the "Upload files" action.
- Browse the hierarchy using the breadcrumb.
- Search within the folder. The executed search looks for content starting from the currently opened folder.
- On each listed documents, the user has a set of actions: main file download, Open in Nuxeo, Edit with Nuxeo Drive, Delete.
- Clicking on the document name opens the Document panel described in the [previous section](#document-panel).

The created folder in Web UI holds a `salesforce` facet and some metadata are set automatically on the associated salesforce schema. By default, `sf:objectId`,`sf:objectType`, `sf:objectAmount`. See the configuration section to change that behavior.

### Content List

The Content list mode is ideal when you want to display to the user a specific list of content that comes from the Nuxeo repository. A typical use case is for instance to display a list of relevant knowledge articles based on the context defined by the metadata of your open case. The list of content is specified by configuration in Nuxeo Studio with a Page provider, the same way all documents lists and searches are specified in your customized Nuxeo Web UI. In the default behavior without customization, the query made lists all documents for which the `dc:source` metadata of the document contains the current Salesforce object record id.

**Link content** button on top of the documents list allows to search for some content within the whole Nuxeo repository, and then to "link" it. In the standard configuration, clicking on **Link** on a given document will set the `dc:source` value of the document equal to the current Salesforce record ID. It is possible to adapt what it does by using Nuxeo Studio configuration, see section after.

Without any configuration, you can use the Content list mode as a way for the user to search for a document in the repository and "bookmark" it on the object. The current implementation requires to have the Write permission on the document and is limited to attach a document to one record only, but both of those limitations will be removed in the next version. Also, note that it is not possible to bookmark a proxy (= a published document).

### Search

The Search mode provides a simple search interface with a search input field that performs a full-text search across the whole repository and returns documents the user has access to. The search result is made of tiles that display:

- the title of the document,
- modification date,
- text extract of the match of the search input, in the title, the description of the binary content, with highlight of the searched term.

{{#> callout type='note' }}
The search mode can be added on a Salesforce object layout as well as a menu action on the general top bar. To do so, you can search for "Nuxeo" on the left launcher and select **Nuxeo Search** to add it for all users.
{{/callout}}

## Configuration / Customization

### Salesforce UI Configuration

The Nuxeo Lightning Network component is available for being integrated into customized Salesforce UIs. You can drop it inside any Salesforce lightning container component (tabs, sections, panels, etc.). You can entitle it to Salesforce permission framework.

Once you dropped the component, you must choose the behavior type among:

- **Library**: this will expose a library browser with the ability to drag and drop documents.
- **Content list**: this will expose the result of a query, with the ability to do a mapping between the salesforce current record and the documents.
- **Search**: this will display a global search component.

You can also specify a custom configuration, see [Nuxeo Salesforce service extension point](#nuxeo-salesforce-service-extension-point) in the section after.

Note that you can drop the Nuxeo component as many time as you need on a given page, and on as many different pages/Salesforce objects you need, there is no limitation.

{{#> callout type='warning' }}
The component cannot be activated on the Salesforce mobile view.
{{/callout}}

### Nuxeo Salesforce Service Extension Point

The Nuxeo Salesforce connector addon installed via the Nuxeo Salesforce connector marketplace package deploys a new "Salesforce configuration" service in the Nuxeo Platform with an extension point that allows to contribute various configurations.

When dropping the Nuxeo component on the page layout in the Lightning app builder, a `configuration` attribute allows to specify a configuration id (as a string). The lightning component, when being loaded, queries the configured configuration to Nuxeo server via an automation operation, which then asks the Salesforce configuration service for the specified configuration and returns it to the Salesforce lightning component.

This configuration object is used to configure several behaviors of the component: used page providers, custom salesforce properties/nuxeo properties mappings, enablement/disablement of some user actions, etc.

We provide below an example of such a configuration. You can [contribute this extension from Nuxeo Studio]({{page page='how-to-contribute-to-an-extension'}}).

```
<extension target="org.nuxeo.salesforce.SalesforceComponent"
      point="config">

      <library name="my">
        <title>My Library</title>
      	<root>/default-domain/workspaces/salesforce</root>
      	<nuxeo-drive>false</nuxeo-drive>
      	<sobject type='Opportunity'>Name,Description,Amount</sobject>
      </library>
      <listing name="my">
      	<title>My Listing</title>
      	<upload>false</upload>
      	<link-operation>Salesforce.MyLink</link-operation>
      	<link-test>function(doc, recordId) { return doc.properties['dc:source'] === recordId }</link-test>
      	<nuxeo-drive>true</nuxeo-drive>
      	<sobject type='Opportunity'>Name,Description,Amount</sobject>
      	<query>
      	function(context, params) {
      		params.pageProvider = "my-second-page-provider";
      		params.customerName = context.record.Name;
      	}
      	</query>
      </listing>
      <search name="my">
      	<title>My Search</title>
        <nuxeo-drive>true</nuxeo-drive>
      	<page-provider>advanced_search</page-provider>
      </search>

  </extension>
```

{{#> callout type='note' }}
You can contribute as many configurations as needed, there is no limitation.
{{/callout}}

### Configuration Use Cases

#### Disabling Nuxeo Drive Direct Edit action

You may want to disable the **Edit** user action if your users do not use Nuxeo Drive, to avoid confusing them. You can do so with the following element under the root configuration element:
```
<nuxeo-drive>true</nuxeo-drive>
```

#### Changing the Root Path Where the Folders Are Created for the Library Behavior

When using the Content library mode, a folder will be created for each Salesforce object. It is possible to configure the Nuxeo repository path under which the folders will be created under the `<library>` element with the element:
```
<root>/default-domain/workspaces/salesforce</root>
```

### Changing the Document Type of the Folder Created for the Library Behavior or More

The folder is creating calling an automation script named `Salesforce.TouchSFLibrary`. It is possible to override this automation script. See [the source](https://github.com/nuxeo/nuxeo-salesforce/blob/lts-2021/nuxeo-salesforce-core/src/main/resources/OSGI-INF/automation-contrib.xml) of the script for a better understanding of its behavior.

#### Changing Labels

The Nuxeo components is implemented using the internationalization framework of Salesforce. As a consequence by enabling the translation workbench, it is possible to change the label of any of the displayed labels in the component and translate it to any language.

The only label that is not translated with the Salesforce framework is the title of the component, that displays "Content Library" and "Content list". You can contribute another label using the element:

```
<title></title>
```

The string provided will also be looked up as a key in the translation workbench.

#### Updating the Page Provider and Properties Mapping for the Content List Behavior

The content list is designed for being able to configure the query used to fetch the documents it displays and allows to do a mapping between some of the properties of the Salesforce record and the parameters expected by the Nuxeo query. The following part of the configuration under the `<listing>` element does exactly this:

```
<query>
      	function(context, params) {
      		params.pageProvider = "list-of-procedures-provider";
      		params.customerName = context.record.Name;
      	}
</query>
```

In this example, the developer must have configured the `list-of-procedures-provider` page provider initially in Nuxeo Studio. Then the "record" object inside the "context" map is used to get access to the properties of the current salesforce object, while the page providers parameters are under the "params" map.

#### Defining a New Link Operation for the Content List Behavior

The **Link Content** action  provides to the users the ability to click on a Link button on each document of the search result. The behavior associated to the Link/Unlink buttons can be changed by configuring another operation to call, the default one is `Salesforce.LinkAsSource`.

See [the source](https://github.com/nuxeo/nuxeo-salesforce/blob/lts-2021/nuxeo-salesforce-core/src/main/resources/OSGI-INF/automation-contrib.xml) of the operation.

There is also a configurable test made to know when to display the **Link** or the **Unlink** button, see the following contribution:
```
<link-test>function(doc, recordId) { return doc.properties['dc:source'] === recordId }</link-test>
```

## Upcoming Evolutions in the Next Version

Next version of the addon is targeted for the end of February and will include:

- New JWT Exchange authentication scheme, with the removal of the **Login** button.

- All actions and data sections displayed are configurable (to be able to remove any unwanted section)

- Business metadata section for custom metadata in the data tab, with the use of FreeMarker template authored in Nuxeo Studio for rendering the section.

- The rendition used for the preview tab is configurable through an automation script.

- Ability to attach the Nuxeo component into the utility bar and detach it into a separate screen for co-display of the Salesforce object and contextual documents type of use case

- Adding document actions on all document listings consistently (search, library and listing modes)

- A full-text search input on top of the document list

- Two place holder actions are added for more custom actions, plugged to some automation scripts.

- Default behavior of the liking script is improved to support multiple attachments to the same document and for being able to link even without the Write permission on the document.
