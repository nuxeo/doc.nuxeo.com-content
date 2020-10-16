---
title: Theme Upgrade to LTS 2015
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - themes-component
    - theme
    - migration
toc: true
confluence:
    ajs-parent-page-id: '28475535'
    ajs-parent-page-title: Theme
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Theme+Upgrade+to+LTS+2015
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Theme+Upgrade+to+LTS+2015'
    page_id: '28475702'
    shortlink: NoGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NoGyAQ'
    source_link: /display/NXDOC710/Theme+Upgrade+to+LTS+2015
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-02-29 16:20'
        message: ix links to point to LTS 2015 release ta
        version: '30'
    -
        author: Solen Guitter
        date: '2016-02-29 16:15'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2016-02-26 13:08'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2016-02-26 11:02'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2016-02-26 10:50'
        message: ''
        version: '26'
    -
        author: Anahide Tchertchian
        date: '2016-02-25 10:41'
        message: fix workspace xhtml template name
        version: '25'
    -
        author: Solen Guitter
        date: '2015-11-30 09:57'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '24'
    -
        author: Lise Kemen
        date: '2015-10-13 13:35'
        message: ''
        version: '23'
    -
        author: Lise Kemen
        date: '2015-10-13 13:33'
        message: ''
        version: '22'
    -
        author: Lise Kemen
        date: '2015-10-13 13:04'
        message: ''
        version: '21'
    -
        author: Lise Kemen
        date: '2015-10-13 12:57'
        message: ''
        version: '20'
    -
        author: Lise Kemen
        date: '2015-10-13 12:54'
        message: ''
        version: '19'
    -
        author: Lise Kemen
        date: '2015-10-13 12:51'
        message: ''
        version: '18'
    -
        author: Lise Kemen
        date: '2015-10-13 12:50'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2015-10-07 14:01'
        message: fix typo
        version: '16'
    -
        author: Solen Guitter
        date: '2015-08-04 12:36'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-08-04 10:01'
        message: Code blocks formatting
        version: '14'
    -
        author: Solen Guitter
        date: '2015-08-04 09:28'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 12:13'
        message: 'NXDOC-577: cleanup'
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 12:12'
        message: 'NXDOC-577: fix inversed temlates'
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 12:11'
        message: 'NXDOC-577: theme migration doc'
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 11:48'
        message: 'NXDOC-577: wip'
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 11:22'
        message: 'NXDOC-577: wip'
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 11:10'
        message: 'NXDOC-577: wip'
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 10:12'
        message: 'NXDOC-577: wip'
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 10:03'
        message: 'NXDOC-577: wip'
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 09:27'
        message: 'NXDOC-577: wip'
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 09:12'
        message: 'NXDOC-577: theme migration doc toc'
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2015-07-30 13:09'
        message: 'NXDOC-577: theme migration notes (WIP)'
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2015-07-30 11:16'
        message: ''
        version: '1'

---
{{! multiexcerpt name='theme_upgrade_7.4_page'}}{{! excerpt}}

The theme configuration has changed on the Nuxeo Platform for the 7.4 version. This page provides information to help you migrate your custom Nuxeo themes to this version or above.

To get a presentation of how to handle pages and resources, please refer to the [Theme]({{page page='theme'}}) documentation page.

{{! /excerpt}}

## Module Changes

The following modules have been removed from the default distribution:

*   _nuxeo-theme-bank_
*   _nuxeo-theme-core_
*   nuxeo-theme-fragments
*   _nuxeo-theme-html_
*   _nuxeo-theme-jsf_
*   _nuxeo-theme-webengine_

Also, the following addons have been deprecated:

*   _nuxeo-platform-splitpane_
*   _nuxeo-webengine-sites_
*   _nuxeo-webengine-blogs_

Two new compatibility modules have been added:

*   _nuxeo-theme-migration_, present in the default distribution
*   _nuxeo-theme-webapp-compat_, not present in the default distribution

Migration is very easy with JSF pages, and has not been provided for WebEngine modules.

If you'd like to get back the old behavior for the 7.4 version, you should:

*   add back old theme modules
*   remove the `nuxeo-theme-migration` module

This will be simplified when a compatibility Nuxeo Package is made available, see [NXP-17562](https://jira.nuxeo.com/browse/NXP-17562).

## Runtime Bundle and Component Changes

The following runtime bundles have been removed from the default distribution:

*   `org.nuxeo.theme.bank`
*   `org.nuxeo.theme.core`
*   `org.nuxeo.theme.fragments`
*   `org.nuxeo.theme.html`
*   `org.nuxeo.theme.jsf`
*   `org.nuxeo.theme.webengine`

The runtime component `org.nuxeo.theme.nuxeo.default`, holding the default web application main contributions, has been renamed to `org.nuxeo.theme.nuxeo.webapp`: update your files requirements when overriding or contributing to its resources.

{{#> callout type='tip' }}

Setup dev mode by adding `org.nuxeo.dev=true` to your `nuxeo.conf` file: deprecation logs will help you migrate.

{{/callout}}

## Migrating Page Layouts

### Previous Page Layout Definition

Page layouts used to be defined through contributions to the `themes` extension point like:

```xml
<extension target="org.nuxeo.theme.services.ThemeService" point="themes">
  <theme>
    <src>themes/document-management.xml</src>
  </theme>
</extension>
```

Fragments on the pages defined inside the theme were included through contributions to the `views` extension point, sometimes referencing resources like:

```xml
<extension target="org.nuxeo.theme.services.ThemeService" point="views">
  <view name="Nuxeo header" template-engine="jsf-facelets">
    <format-type>widget</format-type>
    <template>incl/nuxeo_header.xhtml</template>
    <resource>screen.css</resource>
  </view>
</extension>
```

Then, the tag `nxthemes:composition` allowed using the theme pages on a given page, using negotiators or other contributions to the `applications` extension point like:

```xml
<extension target="org.nuxeo.theme.services.ThemeService" point="applications">
  <application root="${org.nuxeo.ecm.contextPath}"
    template-engine="jsf-facelets">
    <negotiation>
      <strategy>nuxeo5</strategy>
      <default-engine>default</default-engine>
      <default-theme>galaxy/default</default-theme>
      <default-perspective>default</default-perspective>
    </negotiation>
[...]
    <view id="/info_view.xhtml">
      <theme>galaxy/popup</theme>
    </view>
  </application>
</extension>
```

### New Page Layout Definition

Now the page layout is handled completely by the XHTML template defining the page: instead of defining fragments and referencing them in the theme XML definition, fragments are included using standard facelets. Some default templates have been designed to help you include JavaScript and CSS resources that are still contributed to runtime extension points.

Here is an example of the default theme page template [`workspace_page.xhtml`](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/pages/workspace_page.xhtml) , showing a header, a footer, and a left column, after migration:

```xml
<ui:composition template="/pages/basic_page.xhtml"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets">
  <ui:param name="pageName" value="#{themeActions.currentPage}" />
  <ui:param name="pageFlavor" value="#{themeActions.currentFlavor}" />

  <ui:define name="basic body includes">
    <ui:include src="/incl/includes.xhtml" />
  </ui:define>

  <ui:define name="basic body">

    <ui:decorate template="/pages/header_footer_template.xhtml">
      <ui:define name="main content">

<div class="column">
          <ui:include src="/incl/import.xhtml" />
          <ui:include src="/incl/multi_tree_explorer.xhtml" />
          <ui:include src="/incl/user_clipboard.xhtml" />
        </div>

<div class="content">
          <ui:include src="/incl/breadcrumb.xhtml" />
          <ui:insert name="body" />
        </div>

<div class="clear" />
      </ui:define>
    </ui:decorate>

  </ui:define>

</ui:composition>
```

Then this template can be used similarly to the `nxthemes:composition` tag:

{{#> panel type='code' heading='Before migration'}}

```xml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<nxthemes:composition xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:nxthemes="http://nuxeo.org/nxthemes"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:nxd="http://nuxeo.org/nxweb/document"
  xmlns:nxl="http://nuxeo.org/nxforms/layout"
  xmlns:nxu="http://nuxeo.org/nxweb/util">

  <ui:define name="page title">
    <h:outputText value="#{nuxeoApplicationName} - #{nxd:titleOrId(currentDocument)}"/>
  </ui:define>

  <ui:define name="bookmark">
    <link rel="bookmark" href="#{navigationContext.currentDocumentFullUrl}"/>
  </ui:define>

  <ui:define name="body">

<div>

      <h:form id="document_header_layout_form" class="titleBlock">
        <nxl:documentLayout documentMode="header" mode="view"
          value="#{currentDocument}" defaultLayout="document_header"
          includeAnyMode="false" />
      </h:form>

      <ui:include src="/incl/document_actions_upperbuttons.xhtml"/>
      <ui:include src="/incl/message_banner.xhtml"/>
      <nxl:widget name="documentTabs" mode="view" value="#{currentDocument}" />

    </div>
  </ui:define>
</nxthemes:composition>

```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
<ui:composition template="/pages/workspace_page.xhtml"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:nxd="http://nuxeo.org/nxweb/document"
  xmlns:nxl="http://nuxeo.org/nxforms/layout"
  xmlns:nxu="http://nuxeo.org/nxweb/util">

  <ui:define name="page title">
    <h:outputText value="#{nuxeoApplicationName} - #{nxd:titleOrId(currentDocument)}"/>
  </ui:define>

  <ui:define name="bookmark">
    <link rel="bookmark" href="#{navigationContext.currentDocumentFullUrl}"/>
  </ui:define>

  <ui:define name="body">

<div class="mainFragment">
      <h:form id="document_header_layout_form" class="titleBlock">
        <nxl:documentLayout documentMode="header" mode="view"
          value="#{currentDocument}" defaultLayout="document_header"
          includeAnyMode="false" />
      </h:form>
      <ui:include src="/incl/document_actions_upperbuttons.xhtml"/>
      <ui:include src="/incl/message_banner.xhtml"/>
      <nxl:widget name="documentTabs" mode="view" value="#{currentDocument}" />
    </div>
  </ui:define>

</ui:composition>
```

{{/panel}}

The [`basic_page.xhtml`](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/pages/basic_page.xhtml) template allows to include some resources on this page. It needs a page name and a flavor name, provided through the `themeActions` Seam component logics, relying on negotiators (see below).

## Migrating Resources

Resources have been included to the page using different means in the past. They can be migrated to use the WebResources extension point (available since 7.3).

### Generic Resources to Include

#### Override of the includes.xhtml Template

The template at [`/incl/includes.xhtml`](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-dm/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/incl/includes.xhtml) used to gather a lot of resources to include on all pages. Now it only holds resources that should go to the page body (as of 7.4, only Drag&Drop resources, that cannot be included in the page head, are handled by this template).

You can keep your override (adapting it to the file current content) if you need to insert resources to the page body. If you need to insert resources to the page head, you can contribute to the `nuxeo_includes` resource bundle (see below).

### Contributions to All Pages

Contributions that were needed on all pages used to be added to the `nuxeo5 includes` view by runtime extension point contributions. This view was included in all theme page layouts. Now the default resource bundle named `nuxeo_includes` is taking up this new role:

{{#> panel type='code' heading='Before migration'}}

```xml
<require>org.nuxeo.theme.nuxeo.default</require>
<extension target="org.nuxeo.theme.services.ThemeService" point="views">
  <view name="nuxeo5 includes" template-engine="jsf-facelets" merge="true">
    <format-type>widget</format-type>
    <resource>seamjsf-monitor.js</resource>
  </view>
</extension>
<extension target="org.nuxeo.theme.services.ThemeService" point="resources">
  <resource name="seamjsf-monitor.js">
    <path>scripts/seamjsf-monitor.js</path>
  </resource>
</extension>
```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
<require>org.nuxeo.theme.nuxeo.webapp</require>
<extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
  <bundle name="nuxeo_includes">
    <resources append="true">
      <resource>seamjsf-monitor.js</resource>
    </resources>
  </bundle>
</extension>
<extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
  <resource name="seamjsf-monitor.js">
    <path>scripts/seamjsf-monitor.js</path>
  </resource>
</extension>
```

{{/panel}}

&nbsp;

### Theme Page Definition With Styles Holding Flavor Variables

A theme page definition does not change much: it now accepts a charset and links definitions, but its style, referencing flavor variables, has been migrated to use resources and resources bundles contributed to the WebResources service.

{{#> panel type='code' heading='Before migration'}}

```xml
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <themePage name="galaxy/default">
    <defaultFlavor>default</defaultFlavor>
    <flavors>
      <flavor>default</flavor>
      <flavor>rainbow</flavor>
    </flavors>
    <styles>
      <style>basics</style>
      <style>buttons_and_actions</style>
      <style>header</style>
      <style>body</style>
      <style>footer</style>
      <style>grids_and_widgets</style>
      <style>navigation</style>
      <style>tables</style>
      <style>forms</style>
      <style>popups</style>
      <style>breadcrumb</style>
      <style>messages_and_tooltips</style>
      <style>foldable_boxes</style>
      <style>drag_and_drop</style>
      <style>richfaces_components</style>
      <style>tabs_content</style>
      <style>helpers</style>
      <style>nuxeo_dm_specific</style>
    </styles>
  </themePage>
</extension>
```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <page name="galaxy/default" charset="utf-8">
    <favorites>
      <icon name="icon">/icons/favicon.png</icon>
      <icon name="shortcut icon">/icons/favicon.ico</icon>
    </favorites>
    <defaultFlavor>default</defaultFlavor>
    <flavors>
      <flavor>default</flavor>
      <flavor>rainbow</flavor>
    </flavors>
    <resources>
      <bundle>nuxeo_includes</bundle>
      <bundle>nuxeo_base</bundle>
      <bundle>nuxeo_dm</bundle>
    </resources>
  </page>
</extension>
```

{{/panel}}

&nbsp;

The style registration has changed too: styles holding flavor variables used to be defined on the page directly, they can now be defined as standard resources, declaring the `flavor` processor:

&nbsp;

{{#> panel type='code' heading='Before migration'}}

```xml
<extension target="org.nuxeo.theme.styling.service" point="styles">
  <style name="breadcrumb">
    <src>themes/css/breadcrumb.css</src>
  </style>
</extension>
```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
<extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
  <resource name="breadcrumb.css">
    <path>themes/css/breadcrumb.css</path>
    <processors>
      <processor>flavor</processor>
    </processors>
  </resource>
</extension>
```

{{/panel}}

&nbsp;

## Migrating resources

Several kinds of resources can now contributed to the WebResources service:

*   Theme service `resources` contributions

    &nbsp;

    {{#> panel type='code' heading='Before migration'}}

    ```xml
    <extension target="org.nuxeo.theme.services.ThemeService" point="resources">
      <resource name="static-styles.css">
        <path>css/static-styles.css</path>
      </resource>
    </extension>
    ```

    {{/panel}}{{#> panel type='code' heading='After migration'}}

    ```xml
    <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
      <resource name="static-styles.css">
        <uri>/css/static-styles.css</uri>
      </resource>
    </extension>
    ```

    {{/panel}}
*   Theme styling `resources` contributions

    &nbsp;

    {{#> panel type='code' heading='Before migration'}}

    ```xml
    <extension target="org.nuxeo.theme.styling.service" point="resources">
      <resource name="static-styles.css">
        <path>css/static-styles.css</path>
      </resource>
    </extension>
    ```

    {{/panel}}{{#> panel type='code' heading='After migration'}}

    ```xml
    <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
      <resource name="static-styles.css">
        <uri>/css/static-styles.css</uri>
      </resource>
    </extension>
    ```

    {{/panel}}
*   Theme styling `styles` contributions

    {{#> panel type='code' heading='Before migration'}}

    ```xml
     <extension target="org.nuxeo.theme.styling.service" point="styles">
      <style name="breadcrumb">
        <src>themes/css/breadcrumb.css</src>
      </style>
    </extension>
    ```

    {{/panel}}{{#> panel type='code' heading='After migration'}}

    ```xml
    <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
      <resource name="breadcrumb.css">
        <path>themes/css/breadcrumb.css</path>
        <processors>
          <processor>flavor</processor>
        </processors>
      </resource>
    </extension>
    ```

    {{/panel}}

    &nbsp;

    &nbsp;

When migrating resources to the WebResources service, the following rule can be observed:

*   When the resource is deployed to the WAR directory, the absolute file path (starting with a slash `/` character) can be used as an **URL** like `/style/my_style.css`.
*   When the resource is kept in the JAR contributing to the service, the local **path** to the resource can be used like `style/my_style.css`.
*   Old style resources contributed to the theme styling service used the `src` attribute now renamed to `path`. Note that styles referencing flavor variables could not be placed in the WAR directory before, otherwise flavor replacement could not be done correctly. This restriction is not valid anymore.

For more details, check out the [`resources` extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/7.10/viewExtensionPoint/org.nuxeo.ecm.platform.WebResources--resources) documentation.

### SASS Styles Definition

The styles of the Platform are now written in .scss thanks to [Sass](http://sass-lang.com/) and [its variables](https://github.com/nuxeo/nuxeo/blob/release-7.10/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/themes/palettes/common_variables.scss). The styles still rely on flavors to use the relevant variables.

Here is an example of how you can declare your own .scss file to use the common variables.

{{#> panel type='code' heading='Before migration'}}

```xml
 <extension target="org.nuxeo.theme.styling.service" point="styles">
  <style name="my-styles">
    <src>themes/css/my-styles.css</src>
  </style>
</extension>

<extension target="org.nuxeo.theme.styling.service" point="pages">
  <themePage name="*">
    <styles append="true">
      <style>my-styles.css</style>
    </styles>
  </themePage>
</extension>
```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
<extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
  <resource name="my-styles.scss" type="css">
    <path>themes/sass/my-styles.scss</path>
    <processors>
      <processor>sassCss</processor>
    </processors>
  </resource>
</extension>

<extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
  <bundle name="nuxeo_sassCss">
    <resources append="true">
      <resource>my-styles.scss</resource>
    </resources>
  </bundle>
</extension>
```

{{/panel}}

&nbsp;

### Example of Styles & Variables Migration

Update your style sheet in Sass and update your old presets files to use a one single variable file. To define your colors & font in a variable file, you can rely on the file we use to define [the default colors of the platform](https://github.com/nuxeo/nuxeo/blob/7.10/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/themes/palettes/default_variables.scss), update the values, then add yours. If you were using old presets in your style sheet, don't forget to update them.

&nbsp;

{{#> panel type='code' heading='Before migration'}}

```xml
<-- Old Logo Declaration -->
<extension target="org.nuxeo.ecm.platform.WebResources"  point="views">
  <view name="my logo" template-engine="jsf-facelets">
    <format-type>widget</format-type>
    <template>incl/my-logo.xhtml</template>
  </view>
</extension>

<-- Old Styles Declaration -->
<extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
  <resource name="my_static_styles.css">
    <path>themes/css/my_static_styles.css</path>
  </resource>
</extension>

<-- Old Styles Definitions -->
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <themePage name="galaxy/default">
    <styles append="true">
      <style>my_styles</style>
    </styles>
  </themePage>
  <themePage name="admin/default">
    <styles append="true">
      <style>my_styles</style>
    </styles>
  </themePage>
  <themePage name="userCenter/default">
    <styles append="true">
      <style>my_styles</style>
    </styles>
  </themePage>
</extension>

<-- Old Presets Definition -->
<extension target="org.nuxeo.theme.services.ThemeService" point="presets">
  <palette name="my borders" category="border" src="themes/palettes/my-borders.properties" />
  <palette name="my backgrounds" category="background" src="themes/palettes/my-backgrounds.properties" />
  <palette name="my fonts" category="font"src="themes/palettes/my-fonts.properties" />
  <palette name="my colors" category="color" src="themes/palettes/my-colors.properties" />
</extension>
```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
<!-- 1\. Define the default flavor the application will use -->
<extension target="org.nuxeo.theme.styling.service" point="flavors">
  <flavor name="my_theme" extends="default">
    <!-- define your logo here if necessary -->
    <logo>
      <path>/img/my_logo.png</path>
      <previewPath>/img/my_logo.png</previewPath>
      <width>120px</width>
      <height>40px</height>
      <title>My Logotype</title>
    </logo>
    <sass append="true">
      <!-- call the nuxeo default variables, common_variables -->
      <import src="themes/palettes/common_variables.scss"/>
	  <!-- and add yours -->
      <import src="themes/palettes/my_variables.scss"/>
    </sass>
  </flavor>
</extension>

<!-- 2\. Declare your Sass and / or CSS styles -->
<extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
  <resource name="my_static_styles.css">
    <uri>/css/my_static_styles.css</uri>
  </resource>
  <resource name="my_sass_styles.scss" type="css">
    <path>themes/sass/my_sass_styles.scss</path>
    <processors>
      <processor>sassCss</processor>
    </processors>
  </resource>
</extension>

<!-- 3\. Then, add your styles to the default app styles -->
<extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
  <bundle name="nuxeo_sassCss">
    <resources append="true">
      <resource>my_sass_styles.scss</resource>
      <resource>my_static_styles.css</resource>
    </resources>
  </bundle>
</extension>
```

{{/panel}}

&nbsp;

## Migrating Negotiations

[Theme negotiators]({{page page='theme#negociations'}}) can be used to define the page and flavor that will be applied to the current page.

Since the page layout is not defined by the page anymore, this cannot be changed by negotiators anymore. Simlarly, prespectives cannot be handled by the theme feature anymore, and now need to now be implemented by the facelet template logics.

The current flavor negotiation has been migrated to handle local configuration of the flavor (handling logo, CSS variables, etc...), on a new extension point:

{{#> panel type='code' heading='Before migration'}}

```xml
 <extension target="org.nuxeo.theme.services.ThemeService" point="negotiations">
  <negotiation object="collection" strategy="nuxeo5">
    <scheme>
      org.nuxeo.theme.jsf.negotiation.collection.RequestParameter
    </scheme>
    <scheme>
      org.nuxeo.theme.jsf.negotiation.collection.CookieValue
    </scheme>
    <scheme>
      org.nuxeo.theme.jsf.negotiation.collection.RequestAttribute
    </scheme>
    <scheme>
      org.nuxeo.theme.jsf.negotiation.collection.ViewId
    </scheme>
    <!-- local flavor/collection (specific to nuxeo5) -->
    <scheme>
      org.nuxeo.ecm.localconf.LocalThemeFlavor
    </scheme>
    <!-- default flavor/collection (specific to nuxeo5) -->
    <scheme>
      org.nuxeo.ecm.webapp.webcontainer.DefaultThemeFlavor
    </scheme>
    <scheme>
      org.nuxeo.theme.jsf.negotiation.collection.UnspecifiedCollection
    </scheme>
  </negotiation>
</extension>
```

{{/panel}}{{#> panel type='code' heading='After migration'}}

```xml
 <extension target="org.nuxeo.theme.styling.service" point="negotiations">
  <negotiation target="jsfDefaultPage">
    <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.DefaultPage"
      order="100">
      <property name="jsfDefaultPage">galaxy/default</property>
    </negotiator>
  </negotiation>
  <negotiation target="jsfPage">
    <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.RequestParameter"
      order="10">
      <property name="param">page</property>
    </negotiator>
    <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.RequestAttribute"
      order="10">
      <property name="param">page</property>
    </negotiator>
    <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.DefaultPage"
      order="100">
      <property name="jsfPage">galaxy/default</property>
    </negotiator>
  </negotiation>
  <negotiation target="jsfFlavor">
    <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.RequestParameter"
      order="10">
      <property name="param">flavor</property>
    </negotiator>
    <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.RequestAttribute"
      order="20">
      <property name="param">flavor</property>
    </negotiator>
    <negotiator class="org.nuxeo.ecm.localconf.LocalThemeFlavor"
      order="30">
      <property name="negotiatedPageVariable">jsfPage</property>
    </negotiator>
    <negotiator
      class="org.nuxeo.ecm.web.resources.jsf.negotiators.DefaultPageFlavor"
      order="100">
      <property name="negotiatedPageVariable">jsfPage</property>
    </negotiator>
  </negotiation>
</extension>
```

{{/panel}}

The new negotiators handle fallback on default page and flavor using explicit properties and variables. The negotiation element does not handle merge.

## Troubleshoot

Here is an explanation for error and warn logs that you can run into while migrating themes.

*   Resource registration error:

    ```
    Resource 'automation.js' on component service:org.nuxeo.document.routing.web.themes should now be contributed to extension point 'org.nuxeo.ecm.platform.WebResources': a compatibility registration was performed but it may not be accurate.
    ```

    Just change the extension point for this resource contribution, and use the **uri** or **path** element depending on whether the resource is deployed to the WAR directory or not.

*   Theme style registration error:

    ```
    Style 'nuxeo_usercenter_specific' on component service:org.nuxeo.ecm.user.center.theme should now be contributed to extension point 'org.nuxeo.ecm.platform.WebResources': a compatibility registration was performed but it may not be accurate. Note that the 'flavor' processor should be used with this resource.
    ```

    Just change the extension point for this resource contribution, and use the **path** element instead of **src**, since this resource was probably not deployed to the WAR directory, to handle flavor variables replacement.

*   Startup warnings about unknow extension points on component `org.nuxeo.theme.services.ThemeService`:

    ```
      * Warning: target extension point 'themes' of 'org.nuxeo.theme.services.ThemeService' is unknown. Check your extension in component service:org.nuxeo.ecm.user.center.theme
      * Warning: target extension point 'applications' of 'org.nuxeo.theme.services.ThemeService' is unknown. Check your extension in component service:org.nuxeo.ecm.user.center.theme
      * Warning: target extension point 'views' of 'org.nuxeo.theme.services.ThemeService' is unknown. Check your extension in component service:org.nuxeo.ecm.user.center.oauth.themes
    ```

    These extension points are not used anymore: the theme definition should be replaced by a standard JSF facelet template (see above), views should be included directly in it, and resources should be contributed to pages or resource bundles defined for the corresponding page.

*   Warnings during navigation when dev mode is enabled:

    ```
    14:07:19,483 WARN  [DeprecationLogger] Since version 7.4: Tag nxthemes:composition is deprecated, will use a composition of template at /pages/workspace_page.xhtml for /view_documents.xhtml @12,43
    ```

    The template `/view_documents.xhtml` is still using a `nxthemes:composition` tag: this will use the template at `/pages/workspace_page.xhtml` instead to handle compatibility.

    {{#> callout type='tip' }}

    If you cannot migrate all your pages at once, and would like to use another default template than `/pages/workspace_page.xhtml`, the following contribution can be added to use the template at `/pages/my_default_page_template.xhtml` instead:

    ```xml
    <require>org.nuxeo.theme.services.ThemeService</require>
    <extension target="org.nuxeo.theme.styling.service" point="negotiations">
      <negotiation target="jsfThemeCompatTemplate">
        <negotiator class="org.nuxeo.ecm.web.resources.jsf.negotiators.DefaultPage"
          order="100">
          <property name="jsfThemeCompatTemplate">/pages/my_default_page_template.xhtml</property>
        </negotiator>
      </negotiation>
    </extension>
    ```

    {{/callout}}

{{! /multiexcerpt}}

{{! Don't put anything here. }}

* * *
