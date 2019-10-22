---
title: 'HOWTO: Override a Seam Component - JSF UI'
review:
    comment: ''
    date: '2019-10-21'
    status: ok
details:
    howto:
        excerpt: Learn how to override a seam component.
        level: Advanced
        tool: 'Nuxeo CLI, code'
        topics: 'JSF UI, Seam JSF Webapp'
labels:
    - content-review-lts2016
    - seam
    - howto
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '19235681'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Override+a+Seam+Component
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Override+a+Seam+Component'
    page_id: '19236447'
    shortlink: X4YlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/X4YlAQ'
    source_link: /display/NXDOC/How+to+Override+a+Seam+Component
tree_item_index: 1100
history:
    -
        author: Anahide Tchertchian
        date: '2015-12-08 11:16'
        message: ''
        version: '9'
    -
        author: Gildas Lefevre
        date: '2014-11-04 18:15'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-09-19 15:58'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-09-19 15:57'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-09-18 17:21'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-06-27 15:06'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-06-27 12:09'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2014-05-26 17:59'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2014-05-26 17:50'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
This how-to considers you master the creation of the Java plug-in, and you know where to create a Java class. Otherwise please refer to the page [How to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}}) or use [Nuxeo CLI]({{page page='nuxeo-cli'}}).
{{! /excerpt}}

The main steps to override a Seam component are:

1.  Look for the name of the Seam component you want to override. The name is the value of the annotation `@name`.
2.  Add an empty file named `seam.properties` under the folder `src/main/resources` of your plug-in.
3.  Create a Java class in your plug-in. It's recommended to use a custom name for your own classes, to avoid having duplicated files in your IDE for instance. But it's not mandatory providing the package containing your class is different from the default one.
4.  Overriding the default Seam component now implies three actions:

    *   Reuse the same `name` you found in the `@name` annotation,
    *   Reuse the same `scope`, unless you know what you are doing,
    *   Indicate that your component will be loaded after the default one: this is done with the annotation `@Install` and the value `Install.DEPLOYMENT` (because the default component should have no value for this annotation, or value `Install.FRAMEWORK`).

    You should get a class structured like below:

    ```java
    package org.nuxeo.sample.howto;

    import org.jboss.seam.annotations.Install;
    import org.jboss.seam.annotations.Name;
    import org.nuxeo.ecm.core.api.ClientException;
    import org.nuxeo.ecm.webapp.helpers.StartupHelper;

    @Name("startupHelper")
    @Scope(SESSION)
    @Install(precedence = Install.DEPLOYMENT)
    public class MyStartupHelper extends StartupHelper {
        private static final long serialVersionUID = 1L;
        @Override
        public String initServerAndFindStartupPage() throws ClientException {
            return super.initServerAndFindStartupPage();
        }
    }
    ```

In this example, we overrode the [startupHelper](https://github.com/nuxeo/nuxeo-dm/blob/master/nuxeo-platform-webapp-core/src/main/java/org/nuxeo/ecm/webapp/helpers/StartupHelper.java) component to write our own version of the method `initServerAndFindStartupPage`.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}

- [How-To Index]({{page page='how-to-index'}})

{{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [JSF UI Limitations]({{page page='jsf-ui-limitations'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
{{/panel}}
</div>
</div>
