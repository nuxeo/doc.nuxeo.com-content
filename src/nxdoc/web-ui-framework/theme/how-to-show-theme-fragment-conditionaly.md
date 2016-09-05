---
title: How to Show Theme Fragment Conditionaly
details:
    howto:
        excerpt: >-
            Learn how to show theme fragment depending on some condition using
            perspective.
        level: Advanced
        tool: XML extensions
        topics: Theme
labels:
    - howto
    - theme
    - perspective
    - fragment
confluence:
    ajs-parent-page-id: '22380895'
    ajs-parent-page-title: Theme
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Show+Theme+Fragment+Conditionaly
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Show+Theme+Fragment+Conditionaly
    page_id: '22380677'
    shortlink: hYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hYBVAQ'
    source_link: /display/NXDOC60/How+to+Show+Theme+Fragment+Conditionaly
history:
    - 
        author: Manon Lumeau
        date: '2016-02-09 15:32'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-10-03 15:23'
        message: ''
        version: '27'
    - 
        author: Manon Lumeau
        date: '2014-09-17 12:16'
        message: ''
        version: '26'
    - 
        author: Manon Lumeau
        date: '2014-09-16 17:30'
        message: ''
        version: '25'
    - 
        author: Manon Lumeau
        date: '2014-09-16 16:46'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2014-01-06 17:18'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-01-06 15:23'
        message: ''
        version: '22'
    - 
        author: Thibaud Arguillere
        date: '2013-02-19 16:31'
        message: ''
        version: '21'
    - 
        author: Stéfane Fermigier
        date: '2010-12-04 11:38'
        message: Migrated to Confluence 4.0
        version: '20'
    - 
        author: Stéfane Fermigier
        date: '2010-12-04 11:38'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:05'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:28'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:15'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:15'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
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
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:02'
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
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:01'
        message: ''
        version: '1'

---
{{! excerpt}}

A theme describes what you show and how you show it in your application. It is a set of pages, sections, cells and fragments. It is possible to show some fragment depending on some condition using perspective. A perspective is an attribute of the fragment element. If there is no perspective attribute, the fragment will be shown in all perspective. In a default Nuxeo Platform instance, there is only one perspective named `default`.

{{! /excerpt}}

1.  First you need to register the perspective with:

    ```
    <extension target="org.nuxeo.theme.services.ThemeService"
        point="perspectives">
      <perspective name="myperspective">
        <title>perspective not to be shown all the time</title>
      </perspective>
    </extension>

    ```

    A perspective is just a name.

2.  then you add a perspective attribute to your fragment in the theme configuration:

    ```
    <!--this shows the fragment only in myperspective perspective.-->
    <fragment perspectives="myperspective" type="generic fragment"/>
    <!--this shows the fragment in myperspective and the default perspective. -->
    <fragment perspectives="myperspective,default" type="generic fragment"/>

    ```

3.  Finally, you add your own scheme&nbsp;to the perspective negociator to resolve the perspective:

    ```
    <extension target="org.nuxeo.theme.services.ThemeService" point="negotiations">
      <negotiation object="perspective" strategy="web"> <!--strategy is web for webengine and default for jsf-->
        <scheme>
          com.mycompany.mMnegociator  <!--here is you class-->
        </scheme>
      <!--don't forget to add the other perspective negociators -->
    </extension>

    ```

    Your class should implement the `Scheme` interface. The `getOutcome` method is passed a `WebContext` or a `FacesContext`. If you can't decide which perspective it is, return null, the query will be passed to the next negociator.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Declare the CSS and Javascript Resources Used in Your Templates]({{page page='how-to-declare-the-css-and-javascript-resources-used-in-your-templates'}})
*   [How to Customize the Login Page]({{page page='how-to-customize-the-login-page'}})
*   [undefined]()
*   [How to Add a New Style to Default Pages]({{page page='how-to-add-a-new-style-to-default-pages'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Theme in Developer Documentation]({{page page='theme'}})
*   [Branding in Studio Documentation]({{page space='studio' page='branding'}})
*   [Runtime and Component Model]({{page page='runtime-and-component-model'}})
*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/panel}}</div></div>