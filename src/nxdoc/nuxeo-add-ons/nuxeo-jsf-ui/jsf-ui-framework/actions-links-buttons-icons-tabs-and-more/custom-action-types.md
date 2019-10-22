---
title: Custom Action Types
review:
    comment: ''
    date: '2019-10-21'
    status: ok
labels:
    - content-review-lts2016
    - action-type
    - action
    - atchertchian
    - actions-filters-component
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '950289'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Custom+Action+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Custom+Action+Types'
    page_id: '17795132'
    shortlink: PIgPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PIgPAQ'
    source_link: /display/NXDOC/Custom+Action+Types
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:09'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-03-10 18:28'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-03-10 18:28'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-22 17:27'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-20 15:27'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2014-01-10 11:58'
        message: typo
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 18:19'
        message: add excerpt
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 18:18'
        message: explain how to define a custom action type
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 17:54'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
Since 5.8, it is easy to add your own action type to handle its configuration and display, rather than defining an action of type "template" and specifying the template each time it needs to be used.
{{! /excerpt}}

You can take example on the "link" [action type registration](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-actions-jsf/src/main/resources/OSGI-INF/action-widgettypes-contrib.xml) for this. It is actually relying on widget types definition, here is a minimal definition for a custom action type:

```xml
<extension target="org.nuxeo.ecm.platform.forms.layout.LayoutStore"
  point="widgettypes">

  <widgetType name="my_link">
    <categories>
      <category>jsfAction</category>
    </categories>
    <configuration>
      <properties>
        <defaultValues mode="any">
          <property name="discardSurroundingForm">false</property>
          <property name="supportAjax">#{canUseAjaxTabs}</property>
        </defaultValues>
      </properties>
    </configuration>
    <handler-class>
      org.nuxeo.ecm.platform.forms.layout.facelets.plugins.TemplateWidgetTypeHandler
    </handler-class>
    <property name="template">
      /incl/action/my_link_action_template.xhtml
    </property>
  </widgetType>

</extension>
```

The category `jsfAction` is used to filter this widget type from other widget types and make this one specific to actions display.

The configuration can hold default values to control default behavior:

*   `discardSurroundingForm`: makes it possible to avoid adding a form around an action that does not need it anyway (like a RESTful link).

*   `supportAjax`: makes it possible to avoid stating this property in all actions of this type (if Ajax is always supported, for instance).

The action template at "/incl/action/my_link_action_template.xhtml" may need to handle two modes specific to actions:

*   `tab_content`: used to define what should be displayed in the content of a tab for this action type.
*   `after_view`: used to define what should be displayed after the main rendering (e.g the action button), because that's useful to include content after the main form displaying an action bar, for instance. This mode is currently useful when defining fancyboxes that include a form.

[Default action templates](https://github.com/nuxeo/nuxeo-jsf/tree/master/nuxeo-platform-actions-jsf/src/main/resources/web/nuxeo.war/incl/action) can also be browsed for examples.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Standard Action Types]({{page page='standard-action-types'}})
*   [Actions Overview]({{page page='actions-overview'}})
*   [Action How-To Index]({{page page='action-how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

*   [User Actions]({{page space='studio' page='user-actions'}})
*   [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>
