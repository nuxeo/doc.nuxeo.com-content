---
title: How to Debug Slow Page Rendering
review:
    comment: ''
    date: '2019-02-13'
    status: ok
details:
    howto:
        excerpt: |-

            Learn how to debug slow page rendering.
        level: Advanced
        tool: Code
        topics: JSF UI
labels:
    - content-review-lts2016
    - howto
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Debug+Slow+Page+Rendering
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Debug+Slow+Page+Rendering'
    page_id: '31686883'
    shortlink: 44DjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/44DjAQ'
    source_link: /display/NXDOC/How+to+Debug+Slow+Page+Rendering
tree_item_index: 1700
history:
    -
        author: Solen Guitter
        date: '2016-09-05 09:42'
        message: pdate how-to topic
        version: '4'
    -
        author: Solen Guitter
        date: '2016-07-12 08:35'
        message: Format
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 17:05'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 15:18'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

Several timers are available to debug slow JSF pages rendering.

# Debug Phase Listener Timer

This listener will log on the server time spent for each JSF phase processing.

{{#> callout type='warning' }}

This listener is not thread-safe: timing will be meaningful only in a controlled environment (e.g. only one user displaying pages of a given application)

{{/callout}}

To activate it, add the following configuration to the `$SERVER/lib/log4j.xml` configuration:

```xml
<category name="org.nuxeo.ecm.platform.ui.web.rest.JSFDebugPhaseListener">
  <priority value="DEBUG" />
</category>
```

Sample output:

```
18:16:21,457 DEBUG [JSFDebugPhaseListener] RESTORE_VIEW 1: 60 ms
18:16:25,030 DEBUG [JSFDebugPhaseListener] RENDER_RESPONSE 6: 3378 ms
```

# JSF Tags and Layout/Widget Timer

Some additional timers have been defined on Nuxeo custom tags and tag handlers. This can help understanding which parts of a given page are heavy to process and render.

{{#> callout type='warning' }}

Tags are included inside each other: a given tag timing will show this tag processing timing, **added** to all of its children tags timings.

{{/callout}}

To activate it, add the following configuration to the `$SERVER/lib/log4j.xml` configuration:

```xml
<category name="org.nuxeo.ecm.platform.ui.web.util.FaceletDebugTracer">
  <priority value="DEBUG" />
</category>
```

Also, you have to specify some minimal threshold for this timer to show a log on the server, so that it is easier to show debug logs for the slowest rendering. The following contribution, named `enable-debug-jsf-tags-config.xml`, can be placed inside the `$SERVER/nxserver/config` directory:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.enable.jsf.debug.tags.config">

  <require>org.nuxeo.ecm.platform.ui.web.configuration.default</require>

  <extension target="org.nuxeo.runtime.ConfigurationService"
    point="configuration">
    <property name="nuxeo.jsf.debug.log_min_duration_ms">20</property>
  </extension>

</component>
```

This will log only rendering that take more than 20 milliseconds.

Sample output:

```
8:16:23,490 DEBUG [FaceletDebugTracer] 'alias' at '/incl/action/generic_mode_action_template.xhtml @58,31 <nxl:widgetType>' took: 53 ms.
18:16:23,490 DEBUG [FaceletDebugTracer] 'defActionWidgetName' at '/incl/action/generic_mode_action_template.xhtml @22,116 <nxu:set>' took: 54 ms.
18:16:23,492 DEBUG [FaceletDebugTracer] 'nxuRepeat_items' at '/widgets/actions/actions_widget_template.xhtml @150,66 <nxu:repeat>' took: 152 ms.
18:16:23,492 DEBUG [FaceletDebugTracer] 'clickedActionId' at '/widgets/actions/actions_widget_template.xhtml @26,27 <nxu:valueHolder>' took: 170 ms.
18:16:23,492 DEBUG [FaceletDebugTracer] 'actionStyleClass' at '/widgets/actions/actions_widget_template.xhtml @14,16 <nxu:set>' took: 170 ms.
18:16:23,492 DEBUG [FaceletDebugTracer] 'actionContextDocument' at '/widgets/actions/document_actions_with_forms_widget_template.xhtml @11,16
```

Note that the timer is displayed after the rendering: included tags timings are printed before their parents.

# Action Service Timers

Slow page rendering can be linked to heavy filtering processing on actions and/or linked filters.

To activate it, add the following configuration to the `$SERVER/lib/log4j.xml` configuration:

```xml
<category name="org.nuxeo.ecm.platform.actions.ActionService">
  <priority value="DEBUG" />
</category>
```

Also, you have to specify some minimal threshold for this timer to show a log on the server, so that it is easier to show debug logs for the slowest rendering. The following contribution, named `enable-debug-jsf-actions-config.xml`, can be placed inside the `$SERVER/nxserver/config` directory:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.enable.jsf.debug.actions.config">

  <require>org.nuxeo.ecm.platform.actions.ActionService.properties</require>

  <extension target="org.nuxeo.runtime.ConfigurationService"
    point="configuration">
    <property name="nuxeo.actions.debug.log_min_duration_ms">5</property>
  </extension>

</component>
```

This will log only rendering that take more than 5 milliseconds.

Sample output:

```
8:16:23,159 DEBUG [ActionService] Resolving actions for category 'LIVEEDIT_CREATE_ACTIONS' took: 6.30 ms
18:16:23,222 DEBUG [FaceletDebugTracer] '[document_header]' at '/view_documents.xhtml @25,36 <nxl:documentLayout>' took: 26 ms.
18:16:23,243 DEBUG [ActionService] Resolving filters [canRemoveFromFavorites] took: 10.55 ms
18:16:23,258 DEBUG [ActionService] Resolving filters [mutable_document, can_lock] took: 15.02 ms
18:16:23,267 DEBUG [ActionService] Resolving filters [hasNoSubscriptions, canSubscribe, isNotVersion] took: 7.80 ms
18:16:23,288 DEBUG [ActionService] Resolving filters [view_preview, not_folder, not_anonymous] took: 18.47 ms
18:16:23,321 DEBUG [ActionService] Resolving filters [hasVisibleRenditions] took: 33.26 ms
18:16:23,321 DEBUG [ActionService] Resolving actions for category 'DOCUMENT_UPPER_ACTION' took: 90.95 ms
```
