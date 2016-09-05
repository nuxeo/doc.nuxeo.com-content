---
title: Custom Action Types
labels:
    - action-type
    - action
confluence:
    ajs-parent-page-id: '17334390'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Custom+Action+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Custom+Action+Types'
    page_id: '18449681'
    shortlink: EYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EYUZAQ'
    source_link: /display/NXDOC58/Custom+Action+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:08'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-03-11 12:05'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:27'
        message: ''
        version: '1'

---
{{! excerpt}}

Since 5.8, it is easy to add your own action type to handle its configuration and display, rather than defining an action of type "template" and specifying the template each time it needs to be used.

{{! /excerpt}}

You can take example on the "link" [action type registration](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-actions-jsf/src/main/resources/OSGI-INF/action-widgettypes-contrib.xml) for this. It is actually relying on widget types definition, here is a minimal definition for a custom action type:

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

[Default action templates](https://github.com/nuxeo/nuxeo-jsf/tree/release-5.8/nuxeo-platform-actions-jsf/src/main/resources/web/nuxeo.war/incl/action) can also be browsed for examples.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Standard Action Types]({{page page='standard-action-types'}})
*   [Actions Overview]({{page page='actions-overview'}})
*   [Actions and Filters How-tos]({{page page='actions-and-filters-how-tos'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in Studio documentation'}}

*   [User Actions]({{page space='studio' page='user-actions'}})
*   [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>