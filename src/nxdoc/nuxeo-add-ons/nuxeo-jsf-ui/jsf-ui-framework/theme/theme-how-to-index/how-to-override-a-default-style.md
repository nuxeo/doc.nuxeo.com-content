---
title: 'HOWTO: Override a Default Style - JSF UI'
review:
    comment: ''
    date: '2016-12-06'
    status: ok
details:
    howto:
        excerpt: "Learn how to override a default style. Here's an how-to taking as example the override of the \"feedback message\" styling."
        level: Advanced
        tool: Code editor
        topics: 'Theme, Style'
labels:
    - lts2016-ok
    - theme
    - atchertchian
    - style
    - howto
    - style-css-component
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '19235625'
    ajs-parent-page-title: Theme How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Override+a+Default+Style
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Override+a+Default+Style'
    page_id: '17794322'
    shortlink: EoUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EoUPAQ'
    source_link: /display/NXDOC/How+to+Override+a+Default+Style
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-02-09 15:11'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-10-15 13:47'
        message: ''
        version: '15'
    -
        author: Lise Kemen
        date: '2015-10-13 13:24'
        message: ''
        version: '14'
    -
        author: Lise Kemen
        date: '2015-10-13 13:23'
        message: ''
        version: '13'
    -
        author: Lise Kemen
        date: '2015-10-13 13:23'
        message: ''
        version: '12'
    -
        author: Lise Kemen
        date: '2015-10-13 13:11'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2015-08-03 12:18'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-07-31 09:29'
        message: ''
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2015-07-30 12:01'
        message: 'NXDOC-577: fix alternative example'
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2015-07-30 12:00'
        message: 'NXDOC-577: upgrade how to after theme removal'
        version: '7'
    -
        author: Solen Guitter
        date: '2014-10-03 15:38'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-09-17 12:21'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-09-16 17:27'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-06 15:17'
        message: Formatting
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 18:45'
        message: remove list of how tos
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:30'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

Most of the default application styling is done using "dynamic" SCSS files referring to variables and flavors. These styles can be browsed [on GitHub](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/themes/sass).

{{! excerpt}}

If you'd like to override a default style, here's an how-to, taking as example the override of the "feedback message" styling. Find out how it's styled by default, in case the style is using flavors and you would like to keep this feature (as variables are resolved at display time, you may not be aware that some variables are used).

{{! /excerpt}}

For instance, here's the default styling for the class&nbsp;`facesStatusMessage` defined in `messages_and_tooltips.scss`:

```css
.facesStatusMessage {
  position: fixed;
  right: 1em;
  top: 1em;
  z-index: 10000; }
```

Here's another example, showing a style using Sass variables:

```css
.warningFeedback,
.ambiance-warn {
  background-color: $warning-background;
  color: $warning-label; }
```

**To override the "feedback message" styling:**

1.  Create a local copy of this style so that you can change it.
2.  Create an XML extension point to declare it and attach it to theme pages.
    Here's a sample structure:

    ```
    ├── pom.xml
    └── src
        └── main
            └── resources
                ├── META-INF
                │   └── MANIFEST.MF
                ├── OSGI-INF
                │   └── theme-contrib.xml
                └── themes
                    └── sass
                        └── my-project.scss

    ```

    The MANIFEST.MF file must reference the `theme-contrib.xml` file for it to be taken into account at deployment.
    Here's an excerpt:

    ```
    Nuxeo-Component: OSGI-INF/theme-contrib.xml

    ```

    {{#> callout type='note' }}

    Do not forget to add a new line at the end of this file, otherwise manifest parsing may fail.

    {{/callout}}
3.  Fill the theme contribution to declare your own CSS file.
    Here's an example:

    ```html/xml
    <?xml version="1.0"?>

    <component name="com.my.application.theme">

      <!-- require this contribution as it's the one declaring the original styles to override -->
      <require>org.nuxeo.theme.nuxeo.webapp</require>

      <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
        <resource name="my-project.scss" type="css">
          <path>themes/sass/my-project.scss</path>
          <processors>
            <processor>sassCss</processor>
          </processors>
        </resource>
      </extension>

      <extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
        <bundle name="nuxeo_sassCss">
          <resources append="true">
            <resource>my-project.scss</resource>
          </resources>
        </bundle>
      </extension>

    </component>

    ```

    {{#> panel heading='Theme pages'}}

    Here you can see that styling is added to the nuxeo_sassCss , which contains all the default styles of Nuxeo Platform.

    Note also that a static .css file can be added in resource if the CSS file does not hold any variables to replace at runtime.

    {{/panel}} {{#> callout type='info' }}

    An alternative way to proceed, when adding a CSS file to all pages, is to contribute the CSS file to the `nuxeo_includes` default resource bundle, already gathering common CSS and JS resources for all Nuxeo pages (and referenced on all default pages):

    ```html/xml
    <?xml version="1.0"?>

    <component name="com.my.application.theme">

      <!-- require this contribution as it's the one declaring the original styles to override -->
      <require>org.nuxeo.theme.nuxeo.webapp</require>

      <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
        <resource name="my-project.scss" type="css">
          <path>themes/sass/my-project.scss</path>
          <processors>
            <processor>sassCss</processor>
          </processors>
        </resource>
      </extension>

      <extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
        <bundle name="nuxeo_includes">
          <resources append="true">
            <resource>my-project.scss</resource>
          </resources>
        </bundle>
      </extension>

    </component>

    ```

    {{/callout}}
4.  Fill the CSS file.

    Here's an example contribution to put the feedback message at the center of the screen (instead of top right, as done by the original default style):

    ```css
    .facesStatusMessage {
      left: 40%;
      position: absolute;
      right: 40%;
      text-align: center;
      top: 40%;
      z-index: 1000; }

    ```

    This file can also reuse existing variables for colors, fonts, borders, backgrounds, etc.

5.  Make sure your Nuxeo plugin is correctly deployed, and your new styles will take effect.

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Declare the CSS and JavaScript Resources Used in Your Templates]({{page page='how-to-declare-the-css-and-javascript-resources-used-in-your-templates'}})
- [How to Customize the Login Page]({{page page='how-to-customize-the-login-page'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Theme in Developer Documentation]({{page page='theme'}})
- [Branding in Studio Documentation]({{page space='studio' page='branding'}})
- [Runtime and Component Model]({{page page='runtime-and-component-model'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div></div>
