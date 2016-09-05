---
title: News publishing in workspaces
labels:
    - tutorial
    - studio
confluence:
    ajs-parent-page-id: '22380615'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: News+publishing+in+workspaces
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/News+publishing+in+workspaces'
    page_id: '22380594'
    shortlink: MoBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MoBVAQ'
    source_link: /display/NXDOC60/News+publishing+in+workspaces
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:20'
        message: emove children display macro
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-09-02 17:12'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-01-28 16:27'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-01-28 16:27'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-01-28 14:44'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-01-28 14:43'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-01-28 14:43'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-01-27 19:18'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2011-01-27 00:37'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-01-26 17:53'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-01-26 17:51'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-01-26 17:16'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-01-26 16:50'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-01-19 08:38'
        message: formatting and typos
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-01-18 18:32'
        message: fixed typoes
        version: '3'
    - 
        author: Alain Escaffre
        date: '2011-01-18 08:37'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2011-01-18 08:34'
        message: ''
        version: '1'

---
{{! excerpt}}

In this tutorial, we will add a small "News" feature to Nuxeo DM for enabling News content publishing at workspace level, using only Nuxeo Studio.

{{! /excerpt}}

## Functional requirements

Requirements are:

*   A News is a simple document with a title and a Rich content body, where it is possible to set HTML and pictures.
*   News are stored in a dedicated folder inside the workspace.
*   People having the "Write" permission inside a workspace can create draft News directly from the workspace, by clicking one single button.
*   News will be displayed on a front tab at workspace level.
*   The publishing process will be based on the News lifecycle: if a News is in "approved" state (vs initial "draft" state), then it is automatically displayed in the front tab (the title and the HTML body). To do this publishing action, users having "NewsManagement" role will click on a contextual button, on the News' upper right corner, to approve the News.
*   News will be ordered by descending date of publishing, and we want to see only the first three news.

## Technical analysis

### News document type

The News content type is quite simple to configure: it is composed of a title (using `dc:title` field) and a body (a custom property "body"), that can be edited using a HTML Widget. The HTML widget in Nuxeo applications has the ability to upload pictures for the rich content, providing the target type has the "files" schema: this one will be added to our News type.
When they are published, news must be sorted by their publishing date. Considering what "publishing" means here, the publishing date is the time when it was approved. We will store that information on the default Dublin Core field `dc:valid`, which accepts a date. The News type will use the default Nuxeo lifecycle (project --> approved).

### News tab

To display the published news, we will use a "content view" on a front tab at workspace level. It means that the list of "published news" will be the result of a query. This query looks like "_select all news which are inside this workspace and which are published, ordered by their publishing date_".
Let's translate this natural language query in a NXQL one (query language in Nuxeo).

*   "_all news_" means all documents whose type is of type news, which is translated by "`ecm:primaryType = 'News'`".
*   "_inside this workspace_" means "whose path starts with path of the current workspace". As the current workspace will actually be the current document in the user interface (the content view is displayed on workspace type), it will finally be translated as "whose path starts with path of the current document". In NXQL, this will be something like "`ecm:path STARTSWITH ?`".
    Note the question mark instead of the actual current document's path. This is because current document is a dynamical value: it changes depending on the workspace you are in, it is not known in advance. As a consequence, the content view will operate a dynamical resolution of the value, provided we give the variable expression, here: "`#{currentDocument.path`}".
*   "_which are published_", will be translated here as "whose state is 'approved'". In NXQL, it gives: `ecm:currentLifeCycleState='approved'`
*   "_ordered by their publishing date_": the publishing date is here the date when the news' state was changed to 'approved'. This date will be stored in the field `dc:valid`. However, this criteria will not be in our query filter, but it will be configured in the Results configuration.

In the end, our query filter is "`ecm:currentLifeCycleState = 'approved' AND ecm:primaryType ='News' AND ecm:path STARTSWITH ?`" where "?" will be replaced by the dynamical expression "`#{currentDocument.path`}". We will add the following predicate "`ecm:isCheckedInVersion = 0`" so as to be sure we won't select previous versions of a news but only the current one. The very final NXQL expression is then:
"`ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState = 'approved' AND ecm:primaryType ='News' AND ecm:path STARTSWITH ?`".

Content views configuration allows to define how the result is displayed. The main idea here is to define what information you display for one line of the result. Here we will present the title and the body of the news, one on top of the other, and we will configure the pagination level at 3.
Note that to be able to declare the content view on the Workspace document type, we will have to re-declare the "Workspace" type in Studio.

### NewsManagement permission

To implement the "NewsManagement" role, we will create a new permission called "NewsManagement". It will be bound to the "Workspace" type, so that it is assignable only on workspaces. This NewsManagement permission will be used to "filter" the two buttons that will have to be created: the button to "create the news", and the button to "publish the content".

The "create news" button will be displayed on the "Folder toolbar" category of Workspace type, next to the "New" and "Import a file" buttons. But we want the news to be created in a specific subfolder of the workspace, the "news" folder. To achieve this, we will be using the following operation combo set:

1.  `Fetch>Document ./news`: note the use of relative path, as we are on the workspace.
2.  Navigate to document: that changes the current document to "news" folder.
3.  Show Create Document page, with type "News", that displays the content form.

And to make sure that there is always a folder "news" inside the workspace, we will configure a "content-template", that says that each time a workspace is created, a folder called "news" is created inside it.
Also, as the news are created through this button, we don't want the "News" type to appear in the list of document types that are displayed when clicking on the "New" button in DM.

The "publish news" button is quite simple, just operating a "follow transition" on the document and updating the `dc:valid` date with the current date.

## Step by step implementation

*   [Implement the News document]({{page space='NXDOC60' page='Implement the+News+document'}})
*   [Add a News content view on workspaces]({{page space='NXDOC60' page='Add a+News+content+view+on+workspaces'}})
*   [Implement the News "publishing" process](https://doc.nuxeo.com/pages/viewpage.action?pageId=22380658)