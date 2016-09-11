---
title: Starting your project with Nuxeo Studio
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '17334418'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Starting+your+project+with+Nuxeo+Studio
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Starting+your+project+with+Nuxeo+Studio
    page_id: '17334409'
    shortlink: iYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iYAIAQ'
    source_link: /display/NXDOC58/Starting+your+project+with+Nuxeo+Studio
history:
    - 
        author: Manon Lumeau
        date: '2016-03-21 10:29'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2015-08-28 13:59'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-01-26 15:25'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-07-16 09:52'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:00'
        message: Updated link to not use 5.6 documentation
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-07-15 13:58'
        message: ''
        version: '1'

---
&nbsp;

In this section, we will start customizing the Nuxeo Platform. The first customizations occur in Nuxeo Studio, where you can easily create new document types, content views, etc. Here, we will use an application template to quickly have a working set of customizations. Then we will add some more customization to this basis.

## Quick start your Nuxeo project using a template

We will use the Custom Doc ID Generation template.

{{#> accordian heading='Customization set of the application template' closed='true'}}

*   a new document type called "Sample", with:

    *   an associated schema holding one metadata "type",
    *   a new view, creation and header layouts
*   an automation chain called "UIDUpdateChain"
*   an event listener called "UIDUpdateListener"
*   two vocabularies, called "TypeLabelVocabulary" and "TypePrefixVocabulary".

More information about this application template [in the Studio documentation]({{page space='studio' page='using-application-templates'}}).

{{/accordian}}

**To import the Custom Doc ID Generation template:**

1.  In Nuxeo Studio, in the **Settings and versioning** menu, click on **Application templates**.
2.  Click on the **Import this package** link of the template "Custom Doc ID Generation".
3.  On the confirmation popup window, click on OK to reload your project with the application template.
    You now have the elements of the template in your project.

![]({{file name='CustomIdStdProject.png'}} ?w=650,border=true)

You should now test that the template customization works nicely on your Nuxeo instance.

1.  [Update your Nuxeo instance with your Studio configuration.]({{page space='studio' page='deploying-your-project-in-dev-mode'}})
2.  Create a "Sample" document.
3.  Check that it has the defined layouts and that it has a UID generated.

&nbsp;

## Edit the template

### Add a new metadata

First, we'll add a new metadata for the "Sample" document type.

**To do that, let's edit the "Sample" document type:**

1.  In the Schema tab, add a new field with the properties below:

    *   Name: `RandomField`
    *   Type: String
        ![]({{file name='AddRandomField.png'}} ?w=650,h=232,border=true)
2.  Edit the View layout to add the&nbsp;`RandomField` field in a new row at the end of the layout. Leave the default properties.

![]({{file name='AddRandomFieldWidget.png'}} ?w=650,h=304,border=true)

### Edit the automation chain

Now we want to fill the `RandomField` metadata with a random alphanumeric generated string. Unfortunately there is no operation that will let us do that. But fear not, we're going to make our own. This will require using Nuxeo IDE.

![]({{file name='modifyChain.png'}} ?w=650,h=249,border=true)