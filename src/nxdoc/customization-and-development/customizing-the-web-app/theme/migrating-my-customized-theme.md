---
title: Migrating my Customized Theme
labels:
    - theme
toc: true
confluence:
    ajs-parent-page-id: '17334356'
    ajs-parent-page-title: Theme
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Migrating+my+Customized+Theme
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Migrating+my+Customized+Theme'
    page_id: '17334481'
    shortlink: 0YAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/0YAIAQ'
    source_link: /display/NXDOC58/Migrating+my+Customized+Theme
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:15'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:46'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:46'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:57'
        message: Migrated to Confluence 4.0
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:57'
        message: Added related pages
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2011-12-21 13:54'
        message: ''
        version: '20'
    - 
        author: Florent Guillaume
        date: '2011-12-20 16:47'
        message: typo
        version: '19'
    - 
        author: Antoine Taillefer
        date: '2011-12-20 09:17'
        message: ''
        version: '18'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 18:17'
        message: ''
        version: '17'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 18:14'
        message: ''
        version: '16'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 18:12'
        message: ''
        version: '15'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 17:45'
        message: ''
        version: '14'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 17:41'
        message: ''
        version: '13'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 17:36'
        message: ''
        version: '12'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 17:27'
        message: ''
        version: '11'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 17:21'
        message: ''
        version: '10'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 17:09'
        message: ''
        version: '9'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 16:52'
        message: ''
        version: '8'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 16:33'
        message: ''
        version: '7'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 16:22'
        message: ''
        version: '6'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 16:15'
        message: ''
        version: '5'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 16:00'
        message: ''
        version: '4'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 15:47'
        message: ''
        version: '3'
    - 
        author: Antoine Taillefer
        date: '2011-12-19 15:35'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-12-08 18:55'
        message: ''
        version: '1'

---
```
<layout>
  <page name="default">
    <section>
      <cell>
        <fragment type="generic fragment"/>
      </cell>
    </section>
  </page>
  <page name="popup">
    ...
  </page>
</layout>

```

### Page, Section, Cell and Fragment Formats

With the old system, to add a style on one of these elements, you had to use:

```
<formats>
  <layout element="page[1]/section[1]/cell[1]">
    <width>18%</width>
    <text-align>center</text-align>
    <vertical-align>bottom</vertical-align>
  </layout>
  ...
</formats>

```

If you take a look at the new default theme file `document-management.xml`, you will see that a `class` attribute has been added on each `page`, `section`, `cell` and `fragment` element. It references a CSS class in one of the CSS stylesheets declared in the `styles` extension point.
Taking the same example, we now have:

```
<page name="default" class="documentManagement">
  <section class="nxHeader">
    <cell class="logo">

```

And in `themes/css/header.css`:

```
.nxHeader .logo { text-align: center; vertical-align: middle; width: 18% }

```

**Therefore, in order to migrate, you need to:**

*   Remove all `<layout>` elements embedded in `<formats>`.
    Copy/paste them in your favorite text editor since you will need to translate them into CSS later!
*   Add a `class` attribute on each `page`, `section`, `cell` and `fragment` element.
    Here you can take advantage of the classes that exist in the Nuxeo default theme file, especially if you did not customize these elements.
*   Make sure these CSS classes are defined in a CSS stylesheet embedded for each page it should apply to (see below about CSS stylesheets).
    If you use the classes that apply to the Nuxeo default theme (`nxHeader, logo, ...`), they will already be defined!
    Else you will have to define them in a custom CSS file.

### Styles

With the old system, CSS styles were defined in the XML theme file:

```
<style name="header and footer style" inherit="default buttons">
  <selector path="a, a:link, a:visited">
    <text-decoration>none</text-decoration>
  </selector>
</style>

```

With the new system these styles are defined in CSS stylesheets. In this case in `themes/css/basic.css`:

```
a, a:link, a:visited { color: "link (__FLAVOR__ color)"; text-decoration: none }

```

**Therefore, in order to migrate, you need to:**

*   Remove all `<style>` elements embedded in `<formats>`.
    Again, copy/paste them in a text editor since you will need to translate them into CSS later!

## Theme Contributions: Pages, Flavors and Styles

You now have to translate all styles from the old XML format to the new (and nicer) CSS one.
If you take a look at the new theme contribution file `theme-contrib.xml`, you will see that 3 extension points have been added.
For each one, you need to check that the existing contributions match your specific need and if not you will have to add yours.
Lets say you have a customized theme named _myCustomTheme_ with a specific page _myPage_ for which you want to use the _myFlavor_ flavor and the _my_custom_styles.css_ stylesheet.

### Pages

Add a `<themePage>` contribution to the `pages` extension point.

```
<extension target="org.nuxeo.theme.styling.service" point="pages">
  <themePage name="myCustomTheme/myPage">
    <defaultFlavor>myFlavor</defaultFlavor>
    <flavors>
      <flavor>default</flavor>
      <flavor>rainbow</flavor>
    </flavors>
    <styles>
      <style>basics</style>
      <style>buttons_and_actions</style>
      <style>body</style>
      <style>header</style>
      <style>footer</style>
      <style>navigation</style>
      <style>tables</style>
      <style>my_custom_styles<style>
    </styles>
  </themePage>
</extension>

```

{{#> callout type='note' heading='Style order is important!'}}

The theme engine will actually concatenate all the stylesheets defined in the `<styles>` element, in the order of their declaration, to build one big stylesheet named `myCustomTheme-styles.css`.
So if you need to override a CSS class existing in one of the Nuxeo stylesheets, for example `.nxHeader .logo` in `header.css`, you will have to do this in a custom stylesheet declared after the Nuxeo one.
For example `my_custom_styles` should come after `header`.

{{/callout}}

### Flavors

Add a `<flavor>` contribution to the `flavors` extension point.

```
<extension target="org.nuxeo.theme.styling.service" point="flavors">
  <flavor name="myFlavor">
    <label>label.theme.flavor.myFlavor</label>
    <presetsList>
      <presets category="border" src="themes/palettes/myFlavor-borders.properties" />
      <presets category="background" src="themes/palettes/myFlavor-backgrounds.properties" />
      <presets category="font" src="themes/palettes/myFlavor-fonts.properties" />
      <presets category="color" src="themes/palettes/myFlavor-colors.properties" />
    </presetsList>
    <palettePreview>
      <colors>
        <color>#cfecff</color>
        <color>#70bbff</color>
        <color>#4e9ae1</color>
      </colors>
    </palettePreview>
  </flavor>
</extension>

```

Of course you need to create the corresponding file for each preset (in this example in the `themes/palettes/` directory).
You can take example on the Nuxeo default presets.

### Styles

Add a `<style>` contribution to the `styles` extension point.

```
<extension target="org.nuxeo.theme.styling.service" point="styles">
  <style name="my_custom_styles">
    <src>themes/css/my_custom_styles.css</src>
  </style>
</extension>

```

Finally you can take advantage of the flavor system by making your CSS stylesheet dynamic! For example:
In `my_custom_styles.css`:

```
.nxHeader { background-color: "header (__FLAVOR__ background)"; overflow: auto; width:100% }

```

In `myFlavor-backgrounds.properties` :

```
header=#CCCCCC

```

### Old Palette Contributions

Finally, you can get rid of the old `palette` contributions to the `presets` extension point, if you had any. They are not used anymore.

```
<extension target="org.nuxeo.theme.services.ThemeService" point="presets">
  <palette name="Custom borders" src="themes/palettes/custom-borders.properties"
    category="border" />
  ...
</extension>

```

&nbsp;

&nbsp;