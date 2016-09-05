---
title: Theme
labels:
    - theme
toc: true
confluence:
    ajs-parent-page-id: '17334377'
    ajs-parent-page-title: Customizing the web app
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Theme
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Theme'
    page_id: '17334356'
    shortlink: VIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VIAIAQ'
    source_link: /display/NXDOC58/Theme
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 09:18'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:31'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:30'
        message: 'Formatting, fixed broken related topics'
        version: '30'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:43'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:44'
        message: ''
        version: '28'
    - 
        author: Lise Kemen
        date: '2013-05-03 11:59'
        message: ''
        version: '27'
    - 
        author: Lise Kemen
        date: '2012-12-04 16:34'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2012-12-04 09:33'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2012-09-11 22:27'
        message: Migrated to Confluence 4.0
        version: '24'
    - 
        author: Solen Guitter
        date: '2012-09-11 22:27'
        message: ''
        version: '23'
    - 
        author: Anahide Tchertchian
        date: '2012-08-07 12:16'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:55'
        message: Added related pages
        version: '21'
    - 
        author: Vladimir Pasquier
        date: '2012-01-02 10:40'
        message: ''
        version: '20'
    - 
        author: Lise Kemen
        date: '2011-12-23 18:33'
        message: ''
        version: '19'
    - 
        author: Lise Kemen
        date: '2011-12-23 18:32'
        message: ''
        version: '18'
    - 
        author: Anahide Tchertchian
        date: '2011-12-21 13:42'
        message: ''
        version: '17'
    - 
        author: Florent Guillaume
        date: '2011-12-20 17:01'
        message: ''
        version: '16'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 13:16'
        message: ''
        version: '15'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 13:15'
        message: ult
        version: '14'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 13:13'
        message: ''
        version: '13'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 13:11'
        message: ''
        version: '12'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 13:05'
        message: ''
        version: '11'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 13:03'
        message: ''
        version: '10'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 12:56'
        message: ''
        version: '9'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 12:53'
        message: ''
        version: '8'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 12:37'
        message: ''
        version: '7'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 12:26'
        message: ''
        version: '6'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 11:50'
        message: age
        version: '5'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 11:12'
        message: age
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-12-12 18:00'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-30 10:53'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:50'
        message: ''
        version: '1'

---
{{#> callout type='tip' heading='Online Style Guide'}}

An [online UI Style Guide](http://showcase.nuxeo.com/style) is available to help you design your pages,&nbsp;customize and style them.

{{/callout}}

## Page Layout

The layout for the different theme pages is defined in an XML file with the following structure.
For instance, in 5.5, the default _galaxy_ theme is defined in file `themes/document-management.xml`. It represents the structure displayed when navigating in the _Document Management_ tab of the application (the _galaxy_ name has been kept for compatibility).

```
<theme name="galaxy" template-engines="jsf-facelets">
  <layout>
    <page name="default" class="documentManagement">
      <section class="nxHeader">
        <cell class="logo">
          <!-- logo -->
          <fragment type="generic fragment"/>
        </cell>
        ...
      </section>
      ...
    </page>
  </layout>
  <properties element="page[1]/section[2]/cell[2]/fragment[2]">
    <name>body</name>
    ...
  </properties>
  <formats>
    <widget element="page[1]|page[2]|page[3]">
      <view>page frame</view>
    </widget>
    <widget element="page[1]/section[1]/cell[1]/fragment[1]">
      <view>Nuxeo DM logo (Galaxy Theme)</view>
    </widget>
    ...
  </formats>
</theme>

```

It is now possible to add a class attribute to the `<page>`, `<section>`, `<cell>` and `<fragment>` elements. They will be part of the generated stylesheet.

This structure is declared to the theme service using the following extension point:

```
<extension target="org.nuxeo.theme.services.ThemeService" point="themes">
  <theme>
    <src>themes/document-management.xml</src>
  </theme>
</extension>

```

The file referenced by the "src" tag is looked up in the generated jar.

Views referenced in this layout still need to be defined in separate [extension points]({{page page='extension-points-configuration'}}). For instance here is the logo contribution:

```
<extension target="org.nuxeo.theme.services.ThemeService" point="views">
  <view name="Nuxeo DM logo (Galaxy Theme)" template-engine="jsf-facelets">
    <format-type>widget</format-type>
    <template>incl/logo_DM_galaxy.xhtml</template>
  </view>
</extension>

```

The global application settings still need to be defined on the "applications" extension point:

```
<extension target="org.nuxeo.theme.services.ThemeService" point="applications">
  <application root="${org.nuxeo.ecm.contextPath}"
    template-engine="jsf-facelets">
    <negotiation>
      <strategy>nuxeo5</strategy>
      <default-engine>default</default-engine>
      <default-theme>galaxy/default</default-theme>
      <default-perspective>default</default-perspective>
    </negotiation>
    <!-- Cache control for theme resources (/nxthemes-lib/) -->
    <resource-caching>
      <lifetime>36000</lifetime>
    </resource-caching>
    <!-- Cache control for theme styles (/nxthemes-css/) -->
    <style-caching>
      <lifetime>900</lifetime>
    </style-caching>
    <view id="/editor_link_search_document.xhtml">
      <theme>galaxy/popup</theme>
    </view>
  </application>
</extension>

```

In the above example, you can see that the _galaxy/default_ page is the default page of the application. Other pages like _galaxy/popup_ can also be explicitely set for some specific views.

## Branding: Use Flavors and Styles!

CSS configuration used to be held by the same XML file than the one defining the pages structures. This was a problem for modularity, as some addons needed to add styling to existing pages without changing the global structure of the page.

Since 5.5, extension points have been added to allow style contributions separately from the structure. A new notion of _flavor_ has also been added, to make it possible to switch some elements held by the branding (colors, logo...) without changing the associated styles: the local configuration makes it possible to change this flavor so that branding can be customized when navigating in some parts of the document hierarchy.

### The _pages_ Extension Point

Each theme page needs to have a `themePage` contribution to the [`pages` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.theme.styling.service--pages): this is the main link between the page structure and its branding.
Here is an example of the _galaxy_ theme default page:

```
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
      <style>my_custom_styles<style>
      ...
    </styles>
    <resources>
      <resource>static_styles.css</resource>
      <resource>jquery.fancybox.js</resource>
    </resources>
  </themePage>
  ...
</extension>

```

*   `<defaultFlavor>` refers to the default flavor used for the page. See below for `flavor` definition.
*   `<flavors>` refers to the different flavors available for this page in the Theme local configuration.
*   `<styles>` refers to the dynamic CSS stylesheets that will be embedded in this page. See below for `styles` definition.
*   `<resources>` refers to static resources (CSS stylesheet that do not use variables, and Javascript file). See below for `resources` definition.

{{#> callout type='note' heading='Style order is important!'}}

The theme engine will actually concatenate all the stylesheets defined in the `<styles>` element, in the order of their declaration, to build one big stylesheet named `myCustomTheme-styles.css`.
So if you need to override a CSS class existing in one of the Nuxeo stylesheets, for example `.nxHeader .logo` in `header.css`, you will have to do this in a custom stylesheet declared after the Nuxeo one.
For example `my_custom_styles` should come after `header`.

{{/callout}}

### The _styles_ Extension Point

Each dynamic CSS stylesheet embedded in a theme page needs to have a `style` contribution to the [`styles` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.theme.styling.service--styles).
Here is an example of some of the basic stylesheet contributions:

```
<extension target="org.nuxeo.theme.styling.service" point="styles">
  <!-- Global styles -->
  <style name="breadcrumb">
    <src>themes/css/breadcrumb.css</src>
  </style>
  <style name="buttons_and_actions">
    <src>themes/css/buttons_and_actions.css</src>
  </style>
  <style name="basics">
    <src>themes/css/basics.css</src>
  </style>
  <style name="body">
    <src>themes/css/body.css</src>
  </style>
</extension>

```

The files referenced by the "src" tags are looked up in the generated JAR.

Here is an excerpt of the "buttons_and_actions" CSS file:

```
a.button { text-decoration: none }

.major, input.major {
	background: none repeat scroll 0 0 #0080B0;
	border: 1px solid #014C68;
	color: #fff;
	text-shadow: 1px 1px 0 #000 }

input.button[disabled=disabled], input.button[disabled=disabled]:hover,
input.button[disabled], input.button[disabled]:hover {
	background: none "button.disabled (__FLAVOR__ background)";
	border: 1px solid; border-color: "button.disabled (__FLAVOR__ border)";
	color: "link.disabled (__FLAVOR__ color)";
	cursor: default;
	visibility: hidden }

```

It can mix standard CSS content, and also hold variables that can change depending on the selected flavor (see below).

### The _flavor_ Extension Point

Each flavor needs to have a `flavor` contribution to the [`flavors` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.theme.styling.service--flavors).
Here is an example of the default flavor:

```
<extension target="org.nuxeo.theme.styling.service" point="flavors">
  <flavor name="default">
    <presetsList>
      <presets category="border" src="themes/palettes/default-borders.properties" />
      <presets category="background" src="themes/palettes/default-backgrounds.properties" />
      <presets category="font" src="themes/palettes/default-fonts.properties" />
      <presets category="color" src="themes/palettes/default-colors.properties" />
    </presetsList>
    <label>label.theme.flavor.nuxeo.default</label>
    <palettePreview>
      <colors>
        <color>#cfecff</color>
        <color>#70bbff</color>
        <color>#4e9ae1</color>
        ...
      </colors>
    </palettePreview>
    <logo>
      <path>/img/nuxeo_logo.png</path>
      <previewPath>/img/nuxeo_preview_logo_black.png</previewPath>
      <width>92</width>
      <height>36</height>
      <title>Nuxeo</title>
    </logo>
  </flavor>
</extension>

```

*   `<presets>` contributions define a list of CSS property presets, as it was already the case in the old system. They represent variables that can be reused in several places in the CSS file.
    For example in `themes/palettes/default-borders.properties`we can define:

    ```css
    color.major.medium=#cfecff
    color.major.strong=#70bbff
    color.major.stronger=#4e9ae1

    ```

    A preset can be referenced in a dynamic CSS file, using the pattern "_preset_name_ (___FLAVOR___ _preset_category_)".

    ```
    .button:hover, input.button:hover {
      background: none "color.major.medium (__FLAVOR__ background)";
      border: 1px solid; border-color: "button.hover (__FLAVOR__ border)" }

    ```

*   `<label>` and `<palettePreview>` are used to display the flavor in the Theme local configuration.
*   `<logo>` is used to customize the default logo view `logo_DM_galaxy.xhtml`.

## Theme Static Resources

JS and CSS static files (ie. that don't need to be configured with flavors) should be defined as static resources, using the `resources` extension point as it was the case in the old system.

Note that dynamic CSS files are parsed, and this parsing may not accept CSS properties that are not standard (like CSS3 properties for instance). Placing these properties in static resources is a workaround for this problem if you do not need to make them reference flavors.

Here are sample contributions to this extension point:

```xml
<extension target="org.nuxeo.theme.styling.service" point="resources">
  <resource name="static_styles.css">
    <path>css/static_styles.css</path>
  </resource>
  <resource name="jquery.fancybox.js">
    <path>scripts/jquery/jquery.fancybox.pack.js</path>
  </resource>
</extension>

```

Note that the resource name **must** end by ".css" for CSS files, and ".js" for JavaScript files.

The files referenced by the "path" tags are looked up in the generated war directory (nuxeo.war) after deployment, so you should make sure the `OSGI-INF/deployment-fragment.xml` file of your module copies the files from the JAR there.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [How to Override a Default Style]({{page page='how-to-override-a-default-style'}})
*   [How to Show Theme Fragment Conditionaly]({{page page='how-to-show-theme-fragment-conditionaly'}})
*   [How to Declare the CSS and Javascript Resources Used in Your Templates]({{page page='how-to-declare-the-css-and-javascript-resources-used-in-your-templates'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

*   [Unicolor Flavors Set]({{page space='userdoc58' page='unicolor-flavors-set'}})
*   [Branding]({{page space='studio' page='branding'}})
*   [Applying a Preset Look to a Space]({{page space='userdoc58' page='applying-a-preset-look-to-a-space'}})

{{/panel}}</div></div>