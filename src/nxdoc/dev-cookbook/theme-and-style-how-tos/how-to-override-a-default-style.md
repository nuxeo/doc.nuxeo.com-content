---
title: How to Override a Default Style
labels:
    - theme
    - style
confluence:
    ajs-parent-page-id: '17334301'
    ajs-parent-page-title: Theme and Style How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Override+a+Default+Style
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+Override+a+Default+Style'
    page_id: '18449697'
    shortlink: IYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IYUZAQ'
    source_link: /display/NXDOC58/How+to+Override+a+Default+Style
history:
    - 
        author: Solen Guitter
        date: '2014-01-22 17:37'
        message: ''
        version: '1'

---
Most of the default application styling is done using "dynamic" CSS files, sometimes referring to flavor variables. These styles can be browsed [on GitHub](https://github.com/nuxeo/nuxeo-dm/tree/release-5.8/nuxeo-platform-webapp-core/src/main/resources/themes/css).

{{! excerpt}}

If you'd like to override a default dynamic style, here's an how-to, taking as example the override of the "feedback message" styling. Find out how it's styled by default, in case the style is using flavors and you would like to keep this feature (as flavor variables are resolved at display time, you may not be aware that some variables are used).

{{! /excerpt}}

For instance, here's the default styling for the class&nbsp;`facesStatusMessage` defined in `messages_and_tooltips.css`:

```css
.facesStatusMessage { top: 1em; right: 1em; position: fixed; z-index: 10000 }

```

Here's another example, showing a style using flavor variables:

```css
.errorMessage, .errorFeedback { background-color:"warning (__FLAVOR__ background)"; border-color:"error (__FLAVOR__ border)" }

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
                    └── css
                        └── my_project_css.css

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
      <require>org.nuxeo.theme.nuxeo.default</require>

      <extension target="org.nuxeo.theme.styling.service" point="pages">
        <themePage name="galaxy/default">
          <styles append="true">
            <style>my_project_css</style>
          </styles>
        </themePage>
      </extension>

      <extension target="org.nuxeo.theme.styling.service" point="styles">
        <style name="my_project_css">
          <src>themes/css/my_project_css.css</src>
        </style>
      </extension>

    </component>

    ```

    {{#> panel heading='Theme pages'}}

    Here you can see that styling is added to the "galaxy/default" theme page, which is the legacy name for the default Nuxeo theme page.

    Depending on what modules or addons you install, you may want to add the given styles to other pages like "userCenter/default" (theme page for the Home tab) and "admin/default" (theme page for the Admin Center). You might want to add it to other pages of the default theme too, like "galaxy/print" or "galaxy/popup".

    So you can add as many `themePage` tags as needed taking example on this one.

    {{/panel}}
4.  Fill the CSS file.

    Here's an example contribution to put the feedback message at the center of the screen (instead of top right, as done by the original default style):

    ```css
    .facesStatusMessage {
      left: 40%;
      position: absolute;
      right: 40%;
      text-align: center;
      top: 40%;
      z-index: 1000
    }

    ```

    This file can also reuse existing flavor variables.

5.  Make sure your Nuxeo plugin is correctly deployed, and your new styles will take effect!