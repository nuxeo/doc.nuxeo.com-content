---
title: Upgrade to JSF2
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '950313'
    ajs-parent-page-title: Nuxeo JSF UI
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+to+JSF2
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+to+JSF2'
    page_id: '22904940'
    shortlink: bIBdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/bIBdAQ'
    source_link: /display/NXDOC/Upgrade+to+JSF2
tree_item_index: 400
history:
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:26'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:01'
        message: 'NXDOC-363: rename chapter to avoid bug on anchor'
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:00'
        message: 'NXDOC-362: remove doc unrelated to JSF2 migration'
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 14:22'
        message: 'NXDOC-363: document low level changes'
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 14:05'
        message: 'NXDOC-363: document changes on ajax status'
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2014-12-05 18:17'
        message: move JSF2 upgrade page to NXDOC
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2014-12-05 18:17'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}The Nuxeo Platform has been upgraded to JSF 2 for the 6.0 version. This page provides tools and notes to help you migrate your custom Nuxeo projects to this version.{{! /excerpt}}

Content Application Platform (CAP) and its plug-ins have been migrated JSF 2 for 6.0\. This can have a big impact on custom XHTML templates, so a migration tool has been implemented to help you to migrate your custom code base. Here you will find additional notes and instructions about this migration.

# Nuxeo Helper Tools

## Development Mode

Setting up the development mode can help you hot reload your files. An Ant file is also available to help you synchronize your project XHTML templates with your server, while you are working. Please refer to the page [Hot Reloading XHTML templates]({{page space='corg' page='hot-reloading-xhtml-templates'}}).

## Migration Tool

Using this migration module might be useful when upgrading a Nuxeo application to 6.0\. The last released version of the tool can be found in the Nuxeo Maven repository at [https://maven.nuxeo.org/nexus/content/groups/public/org/nuxeo/jsf2/nuxeo-jsf2-migration/1.3-6033/](https://maven.nuxeo.org/nexus/content/groups/public/org/nuxeo/jsf2/nuxeo-jsf2-migration/1.3-6033/).

The [README file on the GitHub project](https://github.com/nuxeo-archives/nuxeo-jsf2-migration/tree/release-1.3-6033) describes how to use the tool and how to create new rules (if you find it useful for your own migration).

{{#> callout type='note' heading='Migrated files'}}

When the automatic migration is set in the parameters of the tool, the migrated files will be created in the same directory as the original ones but with a .migrated extension. This allows the user to compare the migrations that have been done and to avoid overriding the JSF1.2 compliant files.

Also, the migrated files will be formatted. So using the parameter `format` to true is advised, in order to have an easier comparison between the original and the migrated file.

{{/callout}}

This tool will generate a report about your project XHTML templates, and will mainly report:

*   Warnings or errors when parsing XHTML templates, due to missing migration steps
*   Warnings or errors when detecting override of a Nuxeo default template

# Dependency Changes

## Version Changes

The main dependency changes are:

*   Upgrade from JSF Mojarra 1.2.12 to 2.2.6 (including a small patch on jsf-impl, see [VEND-18](https://jira.nuxeo.com/browse/VEND-18))
*   Removal of JSF Facelets 1.1.15.B1 as features are now included in JSF 2.
*   Upgrade from RichFaces 3.3.1.GA-NX9.04 to 4.5.0.Alpha3 (patched, [list of patches available on JIRA](https://jira.nuxeo.com/issues/?jql=component%20%3D%20RichFaces%20AND%20project%20%3D%20VEND))
*   Upgrade from Seam 2.1.0.SP1 to 2.3.1.Final (patched, [list of patches available on JIRA](https://jira.nuxeo.com/issues/?jql=component%20%3D%20Seam%20AND%20project%20%3D%20VEND))
*   Removal of old patched Tomahawk libraries 1.1.5, as well as commons-el 1.0
*   Upgrade from jboss-el 1.0_02.CR2 to 1.0_02.CR6

## Maven Changes

Here is a list of maven dependency changes:

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

As of 5.8 (hot-fixed)

```xml
properties>
  ...
  <nuxeo.richfaces.version>3.3.1.GA-NX9.04</nuxeo.richfaces.version>
  <seam.version>2.1.0.SP1</seam.version>
  <nxseam.version>2.1.0.SP1-NX3</nxseam.version>
</properties>
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>javax.faces</groupId>
      <artifactId>jsf-api</artifactId>
      <version>1.2_12</version>
    </dependency>
    <dependency>
      <groupId>javax.faces</groupId>
      <artifactId>jsf-impl</artifactId>
      <version>1.2_12</version>
    </dependency>
    <dependency>
      <groupId>com.sun.facelets</groupId>
      <artifactId>jsf-facelets</artifactId>
      <version>1.1.15.B1</version>
    </dependency>
    <dependency>
      <groupId>org.richfaces.framework</groupId>
      <artifactId>richfaces-api</artifactId>
      <version>3.3.1.GA</version>
    </dependency>
    <dependency>
      <groupId>org.richfaces.framework</groupId>
      <artifactId>richfaces-impl</artifactId>
      <version>${nuxeo.richfaces.version}</version>
    </dependency>
    <dependency>
      <groupId>org.richfaces.ui</groupId>
      <artifactId>richfaces-ui</artifactId>
      <version>${nuxeo.richfaces.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam</artifactId>
      <version>${nxseam.version}</version>
      <exclusions>
        <exclusion>
          <groupId>javax.el</groupId>
          <artifactId>el-api</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-remoting</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-ui</artifactId>
      <version>${seam.version}</version>
      <exclusions>
        <exclusion>
          <groupId>com.google.code.guice</groupId>
          <artifactId>guice</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-mail</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-pdf</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-rss</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>net.sourceforge.yarfraw</groupId>
      <artifactId>yarfraw</artifactId>
      <version>0.92</version>
      <exclusions>
        <exclusion>
          <groupId>javax.xml</groupId>
          <artifactId>jaxb-api</artifactId>
        </exclusion>
        <exclusion>
          <groupId>apache-httpclient</groupId>
          <artifactId>commons-httpclient</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-excel</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>net.sourceforge.jexcelapi</groupId>
      <artifactId>jxl</artifactId>
      <version>2.6.12</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-debug</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.el</groupId>
      <artifactId>jboss-el</artifactId>
      <version>1.0_02.CR2</version>
    </dependency>
  </dependencies>
</dependencyManagement>
```

</div><div class="column medium-6">

As of 6.0

```xml
<properties>
  ...
  <jsf.version>2.2.6</jsf.version>
  <nxjsf.version>2.2.6-NX01</nxjsf.version>
  <richfaces.version>4.5.0.Alpha3</richfaces.version>
  <seam.version>2.3.1.Final</seam.version>
  <nxseam.version>2.3.1.Final.NX01</nxseam.version>
</properties>
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.sun.faces</groupId>
      <artifactId>jsf-api</artifactId>
      <version>${jsf.version}</version>
    </dependency>
    <dependency>
      <groupId>com.sun.faces</groupId>
      <artifactId>jsf-impl</artifactId>
      <version>${nxjsf.version}</version>
    </dependency>
    <dependency>
      <groupId>javax.validation</groupId>
      <artifactId>validation-api</artifactId>
      <version>1.0.0.GA</version>
    </dependency>
    <dependency>
      <groupId>org.richfaces</groupId>
      <artifactId>richfaces</artifactId>
      <version>${richfaces.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam</artifactId>
      <version>${nxseam.version}</version>
      <exclusions>
        <exclusion>
          <groupId>javax.el</groupId>
          <artifactId>el-api</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-remoting</artifactId>
      <version>${nxseam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-ui</artifactId>
      <version>${seam.version}</version>
      <exclusions>
        <exclusion>
          <groupId>com.google.code.guice</groupId>
          <artifactId>guice</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-mail</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-pdf</artifactId>
      <version>${seam.version}</version>
      <exclusions>
        <!-- dep conflicting with JSF2 -->
        <exclusion>
          <groupId>org.jboss.spec.javax.faces</groupId>
          <artifactId>jboss-jsf-api_2.1_spec</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-rss</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>net.sourceforge.yarfraw</groupId>
      <artifactId>yarfraw</artifactId>
      <version>0.92</version>
      <exclusions>
        <exclusion>
          <groupId>javax.xml</groupId>
          <artifactId>jaxb-api</artifactId>
        </exclusion>
        <exclusion>
          <groupId>javax.xml.bind</groupId>
          <artifactId>jsr173_api</artifactId>
        </exclusion>
        <exclusion>
          <groupId>apache-httpclient</groupId>
          <artifactId>commons-httpclient</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-excel</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <!-- NXP-11018 -->
    <dependency>
      <groupId>net.sourceforge.jexcelapi</groupId>
      <artifactId>jxl</artifactId>
      <version>2.6.12</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.seam</groupId>
      <artifactId>jboss-seam-debug</artifactId>
      <version>${seam.version}</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.el</groupId>
      <artifactId>jboss-el</artifactId>
      <version>1.0_02.CR6</version>
    </dependency>
  </dependencies>
</dependencyManagement>
```

</div></div> {{#> callout type='warning' }}

Note that versions stated above may vary depending on your hot-fix version.

{{/callout}}

&nbsp;

# Changes on JSF Tag Libraries

This chapter lists changes on JSF tag libraries that are used in default Nuxeo pages. If you have been using these libraries to implement custom templates, you might want to look for additional migration documentation directly on these libraries documentation. Richfaces provides a [guide](https://developer.jboss.org/wiki/RichFaces33-4xMigrationGuideUnleashed) about migrating components from 3.3.x to 4.x version.

## Migration for `faces-config.xml` configuration files

If you defined a `faces-config.xml` configuration file in your module, this file namespaces should be upgraded to JSF 2 standards:

```
<faces-config xmlns="http://java.sun.com/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-facesconfig_2_0.xsd"
  version="2.0">
...
</faces-config>

```

## Migration for A4J

_namespace_

*   The namespace for the prefix `a4j` changed. The new value is `<span class="nolink">http://richfaces.org/a4j</span>` .

_a4j:form_

*   The component `a4j:form` does not exist anymore in the RichFaces library. It must be replaced with a `h:form` element. Ajaxified behavior is supported simply by using ajaxified commands.

_a4j:actionParam_

*   The component `a4j:actionParam` does not exist anymore in the RichFaces library. It must be replaced with an `a4j:param` element.

_a4j:ajaxListener_

*   The component `a4j:ajaxListener` does not exist anymore in the RichFaces library.

_a4j:support_

*   The component `a4j:support` does not exist anymore in the RichFaces library. It must be replaced by an `a4j:ajax` element. Attributes `requestDelay` and `ignoreDupResponses` should be moved to a sub element `a4j:attachQueue`.
*   Sample migration: [https://github.com/nuxeo/nuxeo-platform-login/commit/bc33ae59fd968a896ac76ec7b32409b321089faf](https://github.com/nuxeo/nuxeo-platform-login/commit/bc33ae59fd968a896ac76ec7b32409b321089faf)

attribute _reRender_

*   The name of the parameter `reRender` in a4j tags changed to `render`.
*   The separation character is no longer a comma but it is replaced by a space.
*   You can use helper JSF function `nxu:joinRender(String, String)` to join several render ids.
*   Render ids sometimes need to be made absolute, the helper JSF function `nxu:componentAbsoluteId(component, localId)` can be helpful. The component variable is the current component in the JSF tree and is used as an anchor to browse the tree.

attribute _ajaxSingle_

*   The attribute `ajaxSingle="true"` must be replaced by the attribute `execute="@this"`.

attribute _event_ and corresponding event name

*   The attribute `event="onclick"` must be replaced by the attribute `event="click"`.
*   Generally, all event names starting with "on" must be replaced, for instance `event="onchange"` must be replaced by the attribute `event="change"`.

## Migration for RichFaces

_rich:suggestbox_

*   The tag `rich:suggestbox` does not exist anymore in the RichFaces library. It must be replaced by a `select2` or a`rich:autocomplete` element.

_rich:fileUpload_

*   The `uploadData` attrbute is not used anymore, use `fileUploadListener` instead (see [http://docs.jboss.org/richfaces/4.5.X/4.5.0.Beta2/vdldoc/rich/fileUpload.html](http://docs.jboss.org/richfaces/4.5.X/4.5.0.Beta2/vdldoc/rich/fileUpload.html)).
*   The `listWidth` attribute does not exist anymore, use `style` instead.
*   Sample migration: [https://github.com/nuxeo/nuxeo-dam/commit/9ab3620742e833df446960d4fe3c6eb82073296d](https://github.com/nuxeo/nuxeo-dam/commit/9ab3620742e833df446960d4fe3c6eb82073296d)

_rich:tree_

*   The `var` attribute should be moved from tag `rich:treeModelRecursiveAdaptor` to the upper tag `rich:tree`.
*   The `roots` attribute should resolve to a list (a single element will not be taken into account anymore, silently)
*   Sample migrations:
    *   [https://github.com/nuxeo/nuxeo-features/commit/378ee12ad0c814e4522e903acb50a767ff3d8ac0](https://github.com/nuxeo/nuxeo-features/commit/378ee12ad0c814e4522e903acb50a767ff3d8ac0)
    *   [https://github.com/nuxeo/nuxeo-features/commit/21a27b523a263f515d93c377e92c8efe9b8027a7](https://github.com/nuxeo/nuxeo-features/commit/21a27b523a263f515d93c377e92c8efe9b8027a7)
    *   [https://github.com/nuxeo/nuxeo-dm/commit/7e6d30156f2ed4c4d496804596d8e5bb8ff7e131](https://github.com/nuxeo/nuxeo-dm/commit/7e6d30156f2ed4c4d496804596d8e5bb8ff7e131)

_rich:recursiveTreeNodesAdaptor_

*   This tag has been replaced by `rich:treeModelRecursiveAdaptor`.

_rich:modalPanel_

*   The tag has been replaced by rich:popupPanel

## Migration for Seam JSF Tag Libraries

_namespace_

*   The namespace for the prefix `s` changed. The new value is `<span class="nolink">http://jboss.org/schema/seam/taglib</span>` .

## Migration for Nuxeo JSF Tag Libraries

_nxu:dataList_

*   This tag was previously relying on the t:dataList tag from tomahawk library, and now relies on the `rich:dataList` tag that does not handle the same attributes. As this tag is quite rare in the application, attributes migration is not handled, resulting in minor display changes (using a table or a menu instead of listing iteration elements in span tags, for instance), that can easily be migrated using a `c:forEach` or `ui:repeat` tag.

_<span class="pl-ent">nxdir:chainSelect*</span>_

*   This tag (and related subtags) behaviour has changed a little, please read [How to Create a N-Level Select Widget]({{page page='how-to-create-a-n-level-select-widget'}}) again to adapt your custom templates if you defined chain select widget templates for more than two levels. The modification should be simple:

    ```diff
     <nxdir:chainSelectListbox index="0" size="1"
       directoryName="#{widgetProperty_parentDirectory}"
       localize="#{widgetProperty_localize}"
       id="#{widget.id}_parent"
       ordering="#{empty widgetProperty_ordering?'label':widgetProperty_ordering}">
       <a4j:ajax event="change"
    -    render="#{widget.id}_child,#{widget.id}_message"
    -    immediate="true">
    -    <a4j:ajaxListener type="org.ajax4jsf.ajax.ForceRender" />
    -  </a4j:ajax>
    +    render="#{widget.id}_child #{widget.id}_message"
    +    immediate="true" />
     </nxdir:chainSelectListbox>
    ```

## Migration for Core Tag Libraries

_c:set_ tag scope

*   The `page` scope does not exist in JSF2, use `view` instead.

# Miscellaneous Changes

_h:form_ tag `onsubmit` attribute

*   The `onsubmit` attribute can refer to javascript functions, but they are not currenlty triggered anymore, so the corresponding Javascript code should be moved to the submission button(s)

## Usage of `selectionActions` Seam Component

The `selectionActions` Seam component has been used to impact other components in the JSF tree when selecting or clicking on some elements in the page.

Since version 6.0, lookups on other components have changed_:
_

*   The call to the method `selectionActions.onClick` must be replaced.

*   The call to the method `selectionActions.selectedValue` must be replaced.
*   Follow the documentation at [How to Impact Another JSF Component from a Command or Select]({{page page='how-to-impact-another-jsf-component-from-a-command-or-select'}}).
*   Sample migration: [https://github.com/nuxeo/nuxeo-features/commit/0d76ae012408951a7f6f2b17787c4bf926918132](https://github.com/nuxeo/nuxeo-features/commit/0d76ae012408951a7f6f2b17787c4bf926918132)

## Fancy Boxes and Ajax Actions

*   In fancyboxes (aka Javascript modal panels), an explicit subtag `<f:ajax event="click" execute="@this" render="...">` may be needed on `a4j:commandButton` components and such. By default, they must execute `@form` but since the fancybox moves them out of the form, this trick is needed for the request to be correctly triggered.

## Trigger of Javascript Methods on Ajax Requests

Some Javascript methods may need to be triggered again on ajax render. One possibility is to surround them by a tag `a4j:outputPanel` with attribute `ajaxRendered="true"`, but it's actually easier to register an Ajax callback.

Here is an example to trigger again the tipsy tooltip library on Ajax render:

```xml
<ui:composition
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:a4j="http://richfaces.org/a4j">

  <script type="text/javascript" src="scripts/jquery.nuxeo.tipsy.js">
  </script>

  <script>
    jQuery(document).ready(function() {
      jQuery('.tipsyShow').initTipsy(500, 5000);
    });
    jsf.ajax.addOnEvent(function(data) {
      var ajaxstatus = data.status;
      if (ajaxstatus == "success") {
        // remove all existing tipsy
        jQuery('.tipsy').remove();
        jQuery('.tipsyShow').initTipsy(500, 5000);
      }
    });
  </script>

</ui:composition>
```

Here is an example to show errors on Ajax requests:

```xml
<script type="text/javascript">
  jsf.ajax.addOnError(function(data) {
    jQuery.ambiance({
      title: data.description,
      type: "error",
      className: "errorFeedback",
      timeout: 0
    });
  });
</script>
```

Also, note that inline scripts that are part of the DOM updated by the Ajax render will be evaluated again.

## Ajax Regions and Status

Ajax request status can be made visible to the user by using the following code:

```
<a4j:status>
  <f:facet name="start">
    <h:graphicImage value="/img/standart_waiter.gif"/>
  </f:facet>
</a4j:status>
```

The corresponding icon used to be associated to an ajax region. It is not the case anymore, so multiple status icons could in theory be visible on the page, but all these statuses are now displayed on the top right corner of the page (using global CSS positioning) so these changes should not be visible to the end user.

# Changes on Seam Components Implementation

With JSF2 new logics, the restore view phase is processed entirely again on a post, which can result in Seam factories being processed earlier than before, and not reset according to further logics. The symptom of this change results in a factory variable that's not updated correctly.

In this case, variables need to be explicitely removed from the corresponding Seam context map, so that factory is called again.

Sample fix for [NXP-15566](https://jira.nuxeo.com/browse/NXP-15566) for instance: [https://github.com/nuxeo/nuxeo-features/commit/c22fcbd86a5220becf6820174ca1449f8c09cb21.](https://github.com/nuxeo/nuxeo-features/commit/c22fcbd86a5220becf6820174ca1449f8c09cb21)

# Changes on Javascript Resources

*   The order of default resources has changed, so custom resources inclusion might need to be done differently to ensure proper ordering.
*   Inline scripts sometimes need to be changed to be properly escaped, see for instance changes for the following scripts inclusion: [https://github.com/nuxeo/nuxeo-features/commit/f3454b0e6647733f0d78c5504c6dbf21bbbd1ae5](https://github.com/nuxeo/nuxeo-features/commit/f3454b0e6647733f0d78c5504c6dbf21bbbd1ae5)
*   The `jquery.js` theme resource is not used anymore on JSF pages, as it is already provided by RichFaces

# Advanced Low Level Changes

*   JSF2 expects ajaxified actions performed inside a multipart for to be done in a frame. This behaviour has been patched to get back the old behaviour, see [fixmultipartajax.js](https://github.com/nuxeo/nuxeo-dm/blob/master/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/scripts/fixmultipartajax.js).
*   Nuxeo is shipped with [OmniFaces' view state patch](http://showcase.omnifaces.org/scripts/FixViewState) for [JAVASERVERFACES_SPEC_PUBLIC-790](https://java.net/jira/browse/JAVASERVERFACES_SPEC_PUBLIC-790), see [fixviewstate.unminified.js](https://github.com/nuxeo/nuxeo-dm/blob/master/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/resources/js/fixviewstate.unminified.js).
*   Nuxeo is using a specific [URL management]({{page page='navigation-urls'}}) system. JSF2 changes now require resources corresponding to the view id to exist (even if a specific treatment or a redirection are handled afterwards).
*   The `document` variable, that used to be exposed by layout system as an alias to the `value` variable, is not exposed anymore.
