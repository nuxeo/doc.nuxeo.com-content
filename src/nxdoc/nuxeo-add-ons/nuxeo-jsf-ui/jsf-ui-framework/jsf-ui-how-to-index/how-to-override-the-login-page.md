---
title: 'HOWTO: Override the Login Page - JSF UI'
review:
    comment: ''
    date: '2017-12-11'
    status: ok
details:
    howto:
        excerpt: Learn how to override the login page.
        level: Advanced
        tool: Code editor
        topics: 'Theme, JSF UI'
labels:
    - content-review-lts2016
    - howto
    - login-page
    - akervern
    - theme
    - login-page-component
    - lts2017-ok
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Override+the+Login+Page
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Override+the+Login+Page'
    page_id: '20517994'
    shortlink: ahQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/ahQ5AQ'
    source_link: /display/NXDOC/How+to+Override+the+Login+Page
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:07'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-09-05 10:03'
        message: Update how-to topics
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-10-14 15:36'
        message: ''
        version: '9'
    -
        author: Arnaud Kervern
        date: '2015-10-13 09:16'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:32'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:05'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-11-06 11:09'
        message: ''
        version: '5'
    -
        author: Gildas Lefevre
        date: '2014-11-05 17:22'
        message: ''
        version: '4'
    -
        author: Gildas Lefevre
        date: '2014-11-05 16:48'
        message: ''
        version: '3'
    -
        author: Gildas Lefevre
        date: '2014-11-05 16:46'
        message: 'NXDOC-363: How to override the login page'
        version: '2'
    -
        author: Gildas Lefevre
        date: '2014-11-05 16:23'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

## Login Page

The Login Page when the server is deployed is located at `<nuxeo_server>/nxserver/nuxeo.war/login.jsp`. In the source code, this page is located at `nuxeo-platform-webapp/src/main/resources/nuxeo.war/login.jsp`.

The easiest way to override it is to create a new JSP page with the exact same name and put it in at the root of the directory `nuxeo.war` of your bundle.

You will find more information related to the authentication here: [Authentication]({{page page='authentication-and-user-management'}}).

An helper class will help you to access configuration for the login page, like the image to display on the background for example. The class is `org.nuxeo.ecm.platform.ui.web.auth.LoginScreenHelper`.

Here is an example getting few configuration data:

{{#> panel type='code' heading='login.jsp'}}

```java
<%@ page import="org.nuxeo.ecm.platform.ui.web.auth.LoginScreenHelper"%>
<%
LoginScreenConfig screenConfig = LoginScreenHelper.getConfig();
// fetch Login Screen config and manage default
boolean showNews = screenConfig.getDisplayNews();
String iframeUrl = screenConfig.getNewsIframeUrl();
String bodyBackgroundStyle = LoginScreenHelper.getValueWithDefault(screenConfig.getBodyBackgroundStyle(), "url('" + context + "/img/login_bg.jpg') no-repeat center center fixed #333");
String headerStyle = LoginScreenHelper.getValueWithDefault(screenConfig.getHeaderStyle(), "");
String loginBoxBackgroundStyle = LoginScreenHelper.getValueWithDefault(screenConfig.getLoginBoxBackgroundStyle(), "none repeat scroll 0 0 #fff");
String footerStyle = LoginScreenHelper.getValueWithDefault(screenConfig.getFooterStyle(), "");
boolean disableBackgroundSizeCover = Boolean.TRUE.equals(screenConfig.getDisableBackgroundSizeCover());
String logoWidth = LoginScreenHelper.getValueWithDefault(screenConfig.getLogoWidth(), "113");
String logoHeight = LoginScreenHelper.getValueWithDefault(screenConfig.getLogoHeight(), "20");
String logoAlt = LoginScreenHelper.getValueWithDefault(screenConfig.getLogoAlt(), "Nuxeo");
String logoUrl = LoginScreenHelper.getValueWithDefault(screenConfig.getLogoUrl(), context + "/img/nuxeo_logo.png");
%>
```

{{/panel}}

## Deployment

In order to be sure that your JSP page will override the default one, a modification must be added in the&nbsp;`deployment-fragment.xml` file of your bundle. In Nuxeo Platform, the module containing the login page is `nuxeo-platform-webapp`.

We want our bundle to be loaded after this module because our custom login page will override the default login page. To achieve this, add the following requirement in the `deployment-fragment.xml`, at the top of the file, just after the `<fragment>` tag.

```
<require>org.nuxeo.ecm.platform.web.common</require>

```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Customize the Error Pages]({{page page='how-to-customize-the-error-pages'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [Theme in Developer Documentation]({{page page='theme'}})
- [Branding in Studio Documentation]({{page space='Studio' page='Branding'}})
- [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div></div>
