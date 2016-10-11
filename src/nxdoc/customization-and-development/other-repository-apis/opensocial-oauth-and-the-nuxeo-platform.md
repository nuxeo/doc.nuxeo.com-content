---
title: 'OpenSocial, OAuth and the Nuxeo Platform'
review:
    comment: ''
    date: ''
    status: ok
labels:
    - opensocial
    - gadget
    - oauth
toc: true
confluence:
    ajs-parent-page-id: '17334379'
    ajs-parent-page-title: Other Repository APIs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: OpenSocial%2C+OAuth+and+the+Nuxeo+Platform
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/OpenSocial%2C+OAuth+and+the+Nuxeo+Platform
    page_id: '17334425'
    shortlink: mYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mYAIAQ'
    source_link: /display/NXDOC58/OpenSocial%2C+OAuth+and+the+Nuxeo+Platform
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:37'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-01-24 11:35'
        message: Fixed some TOC links
        version: '27'
    - 
        author: Solen Guitter
        date: '2013-11-13 15:48'
        message: link update
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-09-23 12:27'
        message: Added OAuth related documentation
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-09-23 12:25'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-09-23 12:24'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-09-14 11:15'
        message: Migrated to Confluence 4.0
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-09-14 11:15'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2012-05-21 14:39'
        message: Updated link to 5.6
        version: '20'
    - 
        author: Antoine Taillefer
        date: '2011-11-17 19:03'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-11-17 18:43'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-11-17 18:41'
        message: Fixed brocken links
        version: '17'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: formatting
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-02-23 18:23'
        message: formatting
        version: '15'
    - 
        author: Thierry Delprat
        date: '2011-02-07 15:17'
        message: ''
        version: '14'
    - 
        author: Thierry Delprat
        date: '2011-02-07 15:16'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2011-02-07 15:13'
        message: ''
        version: '12'
    - 
        author: Thierry Delprat
        date: '2011-02-07 15:12'
        message: ''
        version: '11'
    - 
        author: Thierry Delprat
        date: '2011-02-07 15:01'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2011-02-07 14:58'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2011-02-07 14:21'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2011-02-07 14:08'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2011-02-07 12:38'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2011-02-07 12:28'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2011-02-07 12:18'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2011-02-07 12:14'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-02-07 12:06'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-02-07 11:40'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## About Opensocial

OpenSocial is a community standard managed by the [OpenSocial foundation](http://www.opensocial.org/). Several major companies (Google, IBM, SAP, Atlassian ...) are involved in the OpenSocial standard.
You can consult the full [OpenSocial specification here](http://docs.opensocial.org/display/OSD/Specs), but at a glance OpenSocial scope includes:

### JavaScript and HTML gadgets

OpenSocial gadgets are small HTML/JavaScript applications that consume data using REST WebServices.

The idea is similar to the JSR 168 portlet with some differences:

*   Rendering is mainly done on the client side (Browser side),
*   OpenSocial gadgets are independent of the server side technology (Java, PHP, Python, .Net ...),
*   Deploying a new gadget is simply referencing a URL that contains the XML gadget spec.

Gadgets are run in a container that is responsible for providing the gadget with the rendering environment and needed JavaScript APIs.

### REST Web Services

OpenSocial defines a set of REST web services that must be implemented by compliant container.

The main services are:

*   App Data service: Service to store user specific data for each gadget / app;
*   Groups service: Manages relationship between users. (Each user has the ability to manage his own groups: friends, coworkers, ...);
*   Activity service: Tracks user activity;
*   Person service: Standard access to the users of the system;
*   Message service: Simple messaging system.

These web services provide the "social part" of the OpenSocial technology.

### Managing Authentication and Security of Data Accesses

In OpenSocial there are usually three actors:

*   The user: The human looking at the gadget inside his browser;
*   The container: The "server" providing the container page where the gadgets are rendered;
*   The service provider: The server providing the REST service accessed by the gadget.

Additionally, the AppId (i.e. the gadget) may be taken into account.

Also, OpenSocial differentiate two types of user identify:

*   The viewer: The user in front of the browser;
*   The owner: The user owning the page that contains the gadget.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

If you take the example of a gadget that displays your emails from Gmail inside Nuxeo:

*   You are the user (OpenSocial viewer and OpenSocial owner),
*   Nuxeo is the container,
*   Gmail is the service provider,
*   the Gmail gadget is the AppId.

Because gadgets are HTML/JavaScript, the gadget can not call Gmail&nbsp;directly (Cross site scripting issue), so the container will proxy all calls from to gadget to Gmail.

So, the container (here Nuxeo) will manage REST call proxying:

*   Handling caching if needed,
*   Handling security.

The security part is not trivial because there are three constraints&nbsp;in OpenSocial context:

*   You need to delegate authentication to a server (i.e. let Nuxeo connect to Gmail on behalf of me);
*   Your Gmail and Nuxeo account may be completely unrelated (not the same login for example);
*   You may not want to let Nuxeo access all your Gmail data, but only a subset.

In order to manage theses requirements OpenSocial relies on [OAuth](http://oauth.net/). The Nuxeo Platform server can be used both as an OAuth Service consumer or as an OAuth Service provider.

You can find more details about OAuth and its integration in Nuxeo later in this page.

## OpenSocial in the Nuxeo Platform Use Cases

### Dashboard and Portal Use Case

The most direct use cases is to use OpenSocial gadgets to address dashboard / portal use case. This is currently the default usage of OpenSocial within the Nuxeo Platform.

For that, we have created some simple and extensible gadgets:

*   My recent documents,
*   My Workspaces,
*   My Tasks,
*   ...

The user can then use Nuxeo's dashboard to have a quick overview of his activity inside the Nuxeo Platform.

Using OpenSocial gadgets to do so is interesting for the following reasons.

#### Letting Users Control Their Dashboards

Depending on the security policy, the user is able to customize his dashboard:

*   adding / removing gadgets,
*   changing gadgets configurations.

#### Leveraging an Open Standard

Gadgets can come from several different services providers:

*   My Tasks on Nuxeo,
*   My Task on JIRA,
*   My Google calendar events.

More and more application are supporting OpenSocial:

*   Google Apps (also provides an OpenSocial container in Gmail and iGoogle),
*   Atlassian Jira and Confluence (that are also OpenSocial container),
*   SAP,
*   SalesForce.com,
*   Social Oriented services like LinkedIn, MySpace, Hi5, Orkut, etc.
*   ...

So you can add external gadgets to Nuxeo's dashboard, but you can also use an external OpenSocial dashboard provided by an other application and use Nuxeo's gadgets from inside this container.

#### Managing User Identity

Because OpenSocial relies on OAuth you can have a narrow control of what service may be used and what scope of data you accept to share between the applications.

#### Simple Deployment

Deploying an OpenSocial gadget in a container is as simple as giving a new URL.

### Easy Contextual Information Integration

OpenSocial gadgets can also be used to provide a simple and light integration solution between two applications.

For example, you can:

*   Display some informations comming from SAP next to the Invoice Document in Nuxeo,
*   Diplay links to related Nuxeo documents from within a Confluence wiki page,
*   Display specification documents (stored in Nuxeo) from withing the JIRA Issue.

An more generally, if you have enterprise wide REST web service (like Contacts managements, Calendar management ...) you can expose them via OpenSocial gadgets so that theses services are accessible to users of all OpenSocial aware applications.

### Social Network Management

Because OpenSocial standardizes a set of social oriented services, you can easily leverage the data from all OpenSocial aware applications. For example you can have an aggregated view on the activity stream.

In the context of Document Management, Collaboration and KM, social APIs really make sense to:

*   manage communities,
*   manage activity,
*   manage user skils,
*   ...

## OAuth in the Nuxeo Platform

The Nuxeo Platform provides full support for OAuth.

### Nuxeo as a Service Provider

You may want to use Nuxeo as an OAuth Service provider:

*   If you have an OpenSocial gadget that uses a REST service from Nuxeo,
*   If you have a external application that uses a REST service from Nuxeo.

Unless the service consumer is a gadget directly hosted inside Nuxeo, you will need to do some configuration at Nuxeo level to define how you want the external consumer to have access to Nuxeo.

### Nuxeo as a Service Consumer

If you need to access an external REST service from within Nuxeo, you may want to use OAuth to manage the authentication.

If you use this external service from within an OpenSocial gadget, you will need to use OAuth.

Unless the service you want to consume is hosted by your Nuxeo instance, you will need to do some configuration do define how Nuxeo must access this external service. For more details about OAuth support in Nuxeo, please see the [OAuth dedicated section]({{page space='admindoc58' page='using-oauth'}}).

## Nuxeo Automation REST Services

OpenSocial gadgets typically use REST services to fetch the data from the service provider. When Nuxeo is the service provider, the recommended target API is [Nuxeo Automation]({{page page='content-automation'}}). Nuxeo Automation presents the following advantages:

*   It provides a solution to easily have custom REST APIs without having to write code (using Nuxeo Studio),
*   It is a common access point for all REST services (all operations and chains can be called the same way),
*   It has a native support for JSON marshaling (which means easy integration in the Gadget JS),
*   There are built-in samples in Nuxeo Gadget (see below).

If you have already built custom automation chains to expose a high level API on top of Nuxeo, you can easily expose theses services via an OpenSocial gadget.

## Gadgets in the Nuxeo Platform

### Apache Shindig, GWT and WebEngine

OpenSocial integration in Nuxeo is based on [Apache Shindig](http://shindig.apache.org/) project. Nuxeo OpenSocial modules were originally contributed by Leroy Merlin and include:

*   Shindig integration,
*   A WebEngine based gadget spec webapp ( `/nuxeo/site/gadgets/` ),
*   A GWT based gadget container,
*   A service to contribute new gadgets.

### Gadget Spec Generation

[Gadget Spec](http://opensocial-resources.googlecode.com/svn/spec/1.0/Core-Gadget.xml) is the XML file defining the gadget.

It's a static XML file that:

*   Describes the gadget,
*   Lists the required features of the gadget,
*   Contains the translation resources,
*   Contains the authentication information,
*   Contains the JavaScript files and HTML content,
*   ...

Inside Nuxeo, the gadget spec is dynamically generated from a FreeMarker template using WebEngine.

Using WebEngine and Freemarker to generate the spec adds more flexibility and power.

#### Better Reusability&nbsp;

Most of you gadgets will share some common content. For JavaScript it's easy to manage, but for HTML and XML content it not that simple.

In order to avoid that issue, when writing a gadget spec in Nuxeo, you can use FreeMarker includes that will be resolved:

*   locally to the gadget directory,
*   globally in the `webengine-gadget` bundle (in&nbsp;`skin/resources/ftl`).

The same logic applies for JS et CSS resources that will be resolved:

*   locally to the gadget directory,
*   in the gadget bundle,
*   globally in the `webengine-gadget` bundle (in `skin/resources/scripts` or&nbsp;`skin/resources/css`).

#### Better Context Management

When generating the gadget spec you need to take into account several parameters:

*   URLs: Resources URLs may be dependent of your config:
    *   Nuxeo host name may change,
    *   Some resources are accessed from the client side (from the browser),
    *   Some resources are accessed from the server side (Server to Server communication);
*   Authentication: Depending on the target host of the gadget authentication config may change:
    *   You want to use 2 legged integrated authentication when the gadget is inside Nuxeo,
    *   You want to use 3 legged authentication when gadget is hosted inside an external application.

In order to address these problems the Freemarker template is rendered against the following context:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Variable name

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

`spec`

</td><td colspan="1">

Gives access to the&nbsp;[InternalGadgetDescriptor](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/opensocial/gadgets/service/InternalGadgetDescriptor.html) object.

</td></tr><tr><td colspan="1">

`serverSideBaseUrl`

</td><td colspan="1">

Server side URL used to access the Nuxeo server.

</td></tr><tr><td colspan="1">

`clientSideBaseUrl`

</td><td colspan="1">

Client side URL used to access the Nuxeo server.

</td></tr><tr><td colspan="1">

`contextPath`

</td><td colspan="1">

Context path of the Nuxeo WebApp (i.e. Nuxeo).

</td></tr><tr><td colspan="1">

`insideNuxeo`

</td><td colspan="1">

Boolean flag used to tell if the gadget will be renderd inside Nuxeo or in an external application.

</td></tr><tr><td colspan="1">

`jsContext`

</td><td colspan="1">

Automatically generated a string that can be used to dump the FreeMarker context in JavaScript.

</td></tr><tr><td colspan="1">

`i18n`

</td><td colspan="1">

Access to a Java Helper class to manage i18n (see later).

</td></tr><tr><td colspan="1">

`specDirectoryUrl`

</td><td colspan="1">

Base URL for accessing the gadget virtual directory.

</td></tr><tr><td colspan="1">

`contextHelper`

</td><td colspan="1">

Access to a Java Helper class to manage the "Nuxeo context" of the gadget if needed: Repository name, domain path ...

</td></tr></tbody></table></div>

The inside flag is "automatically" determined by Nuxeo, but in case the consumer application and Nuxeo are on the same host (i.e. communication via localhost or 127.0.0.1), you may force the external mode by adding&nbsp;`external=true` to the gadget spec URL:

```
http://127.0.0.1:8080/nuxeo/site/gadgets/userworkspaces/userworkspaces.xml?external=true

```

All request parameters you may pass in the gadget spec URL will also be available at the root of the FreeMarker context.

#### Integrated Internationalization

Gadget spec needs to provide XML files for all translations.

```xml
<Locale lang="fr" messages="/nuxeo/site/gadgets/automation/messages_fr.xml"/>
<Locale lang="de" messages="/nuxeo/site/gadgets/automation/messages_de.xml"/>
<Locale lang="it" messages="/nuxeo/site/gadgets/automation/messages_it.xml"/>
<Locale lang="es" messages="/nuxeo/site/gadgets/automation/messages_es.xml"/>
<Locale lang="pt" messages="/nuxeo/site/gadgets/automation/messages_pt.xml"/>
<Locale lang="pl" messages="/nuxeo/site/gadgets/automation/messages_pl.xml"/>

```

So, of course you can use static resources for these translation files. The main problem is that in this case you can not leverage the existing translations in Nuxeo and it's hard to contribute new translations. In order to avoid that, Nuxeo proposes a dynamic translation mode, where messages files are dynamically generated based on the standard messages files used in the JSF webapp.

To activate the dynamic i18n features you need:

*   To provide a&nbsp;`dynamic_messages.properties` file that will list the needed label codes and associated default values;
*   To use the include that will automatically generate the needed translation files and associated entries in the XML spec.

    ```
    <#include "dynamic-translations.ftl"/>

    ```

#### Dynamic Management of Authentication

As explained earlier, depending of the target context, the spec needs to define OAuth 3 legged or 2 legged. You can do it by hand, or you can use the OAuth include:

```
 <#include "default-oauth-prefs.ftl"/>

```

### Gadget Toolbox

In order to make gadget creation easier, Nuxeo provides some building blocks for common features:

*   Context management,
*   Automation REST calls,
*   Documents list display.

These building blocks are composed of FreeMarker includes, JavaScripts files and CSS files.

Thanks to these building blocks, writing full featured gadgets based on Automation API is very simple.

```xml
<Module>
  <ModulePrefs title="Nuxeo Automation"
    description="Simple gadget that uses Nuxeo REST Automation API "
    author="tdeprat" author_email="tdelprat@nuxeo.com"
    height="420">
    <#include "dynamic-translations.ftl"/>
    <Require feature="dynamic-height" />
    <#include "default-oauth-prefs.ftl"/>
  </ModulePrefs>
  <Content type="html">

<html>
  <head>
  <link rel="stylesheet" type="text/css" href="${specDirectoryUrl}documentlists.css"/>
  <!- insert JS Context ->
  ${jsContext}
  <!-- insert JS Automation script -->
  <script src="${specDirectoryUrl}default-automation-request.js"></script>
  <!-- insert default document list display script -->
  <script src="${specDirectoryUrl}default-documentlist-display.js"></script>
  <script>
   var prefs = new _IG_Prefs(_MODULE_ID_);
   // configure Automation REST call
   var NXRequestParams={ operationId : 'Document.PageProvider',            // id of operation or chain to execute
     operationParams : { query : "Select * from Document", pageSize : 5},  // parameters for the chain or operation
     operationContext : {},                                                // context
     operationDocumentProperties : "common,dublincore",                    // schema that must be fetched from resulting documents
     entityType : 'documents',                                             // result type : only document is supported for now
     usePagination : true,                                                 // manage pagination or not
     displayMethod : displayDocumentList,                                  // js method used to display the result
     displayColumns : [{ type: 'builtin', field: 'icon'},                 // minimalist layout listing                      
                      { type: 'builtin', field: 'titleWithLink', label: '__MSG_label.dublincore.title__'},
                      { type: 'date', field: 'dc:modified', label: '__MSG_label.dublincore.modified__'},
                      { type: 'text', field: 'dc:creator', label: '__MSG_label.dublincore.creator__'}
                      ]
   };
   // execute automation request onload
   gadgets.util.registerOnLoadHandler(function(){doAutomationRequest(NXRequestParams);});
  </script>
  </head>
   <body>
   <#include "default-documentlist-layout.ftl"/>
   <#include "default-request-controls.ftl"/>
  </body>
</html>
]]>
  </Content>
</Module>

```

&nbsp;