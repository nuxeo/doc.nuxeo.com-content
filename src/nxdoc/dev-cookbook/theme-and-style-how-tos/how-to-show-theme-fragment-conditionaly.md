---
title: How to Show Theme Fragment Conditionaly
labels:
    - theme
    - fragment
    - perspective
confluence:
    ajs-parent-page-id: '17334301'
    ajs-parent-page-title: Theme and Style How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Show+Theme+Fragment+Conditionaly
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Show+Theme+Fragment+Conditionaly
    page_id: '18449705'
    shortlink: KYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KYUZAQ'
    source_link: /display/NXDOC58/How+to+Show+Theme+Fragment+Conditionaly
history:
    - 
        author: Solen Guitter
        date: '2014-01-22 17:41'
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