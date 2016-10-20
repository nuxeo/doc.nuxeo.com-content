---
title: >-
    How to develop new document types management as web engine module based on
    nuxeo-webengine-sites
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto
    - webengine
confluence:
    ajs-parent-page-id: '22380575'
    ajs-parent-page-title: WebEngine Tutorials
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: >-
        How+to+develop+new+document+types+management+as+web+engine+module+based+on+nuxeo-webengine-sites
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+develop+new+document+types+management+as+web+engine+module+based+on+nuxeo-webengine-sites
    page_id: '22380550'
    shortlink: BoBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BoBVAQ'
    source_link: >-
        /display/NXDOC60/How+to+develop+new+document+types+management+as+web+engine+module+based+on+nuxeo-webengine-sites
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2012-05-16 17:07'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2012-05-16 17:07'
        message: ''
        version: '25'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 12:26'
        message: ''
        version: '24'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 12:26'
        message: ''
        version: '23'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 12:25'
        message: ''
        version: '22'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 12:22'
        message: ''
        version: '21'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 12:19'
        message: ''
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 16:48'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 16:44'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:09'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

For a introduction on the WebEngine framework, see the complete documentation at: [WebEngine (JAX-RS)]({{page page='webengine-jax-rs'}}).

{{/callout}}

Developing a new web engine module is entirely free of constraints. Any module can be extended or not, existing WebObjects can be used or not, the new document types can be added through web engine module or through others DM modules, the UI can be managed in various ways: simple FreeMarker files, themes, JSF, etc.

Further we'll try to give hints how to develop such module based on `nuxeo-webengine-sites`. It is Client choice to use such approach. The advantages are:

*   easy to develop (reusing much of the code)
*   quick to develop (little code to write)
*   easy to understand (nuxeo-webengine-blogs module it's a good example to follow)
*   easy to test (`nuxeo-webengine-blogs` and `nuxeo-webengine-sites` modules have Selenium integrated, it should be easy follow the same example)

The new module extends the module `nuxeo-webengine-base` and also Java extends WebObjects from `nuxeo-webengine-sites`.

The document schemes and contributions can be added inside the new module, in a second "core" module like `nuxeo-webengine-sites-core` or can be left for another module, if they are already contributed by a DM module for instance.

The most powerful choice for UI would be to use themes.

Furthermore, we just consider as an example creating a web engine module for a new document type: `Faq` and its subtype document: `Question`.

## Module configuration

In order to declare the root-type for this module as "faqs" add the following in your "module.xml":

```

<module name="module" root-type="faqs" path="/faqs" extends="base" />

```

The main impacts are:

*   the web objects and adapters are available from base
*   the path in address bar is prefixed by the base path
*   traverse methods first looks in base module

## Theme definition

A theme defines all the look and feel of your webapp. Concerning a web application this means: design the pages, create layouts, define styles, colors, palettes, define visibility rules, perspectives, define target areas (web widgets, facelet areas, FreeMarker blocks), insert UI content (fragments, web widgets, etc). A theme can be defined and customized using Nuxeo Theme Editor. An existing theme, like sites one, can be used as base and modified it if new fragments are needed.

Is easy to add dynamic content on site pages using an "Action fragment". An action fragment returns a model to be displayed into the corresponding widget. The model and listed items are managed through Java code, so it is easy to initiate and fill them with meaningful data. The models are immediately available in the widget.

The fragment can also receive a perspective attribute that specifies in which perspective it will be displayed. "All WebPages" view can be a good example to follow. The perspectives act like the Eclipse perspective. The fragments can be managed individually through perspectives. The current perspective are attributes in HTTP requests.

The steps to add and use a new action fragment are:

*   define and create a new model based on an `AbstractModel` (in the `theme-contrib` setup file)
*   register a new fragment based on the previous defined model and specifying the `<dynamic>true</dynamic>` attribute.
*   define a view to be used for this fragment a (in the `theme-setup` file) and associate the view with the widget that refers to the fragment that needs to be added.

The great power of fragment actions is that they are reusable as they are. For instance, the "All WebPages" fragments can be reused as fragments for a new theme as they are, in this model all children are WebObjects which can be extended, if on the main page of the Faqs module the last faqs have to be displayed.

When registering the theme it's also important to add a new contribution to ThemesService for "applications" point to specify the module entry point.

## Templates

A template model based on Freemarker is used to build responses in webengine. The view definition must always specify the underlying template. In this context, the templates from sites can be access or override (add a template with the same name) because templates are resolved in the context of the current module. This way, if a module is extending another module, a template will be first looked up into the derived module, then in its super modules until a template it&rsquo;s found or no more parent modules exists.

## Doctype definitions

When defining new core document types there are some existing schemes that can be reused like "webcontainer.xsd" for Faq document type and "webpage.xsd" for the Question document. These schemas include already common fields needed in a web perspective, "url" for example. The specific fields of the new document can be added as custom schema.

## WebObject definitions

Nuxeo Documents are transparently mapped to WebObjects so that you can easily access your documents through WebEngine. New WebObjects have to be defined for the existing core types documents. It could be more suitable to inherit the corresponding WebObjects from the sites module as a lot of the functionality can be reused if a Faq is regarded as a Site and the Question as the Webpage within. (See nuxeo-webengine-blogs )
If a custom theme needs to be used all the theme specific methods should be overridden. Each time when a resource is displayed these theme information are used for UI.

## WebAdapter definitions

These resources extend Object Resources with new functionalities without modifying the resources themselves. For example, in sites modules an adapter allows to add comments on a web site and on a web page too. But if these functionalities are needed from this new module, note that the adapters from site module can't be accessed directly, but they can be extended. WebCommentsService is a good example.

CHECKME
