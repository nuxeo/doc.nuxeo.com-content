---
title: How to Add a JSF Form Validation
details:
    howto:
        excerpt: >-
            Learn how to add a JSF form validation to a JSF component to
            validate a field.
        level: Advanced
        tool: Code
        topics: 'Layout, JSF, Validation'
labels:
    - jsf
    - lts2015-ok
    - seam-jsf-component
    - validator
    - howto
confluence:
    ajs-parent-page-id: '28475562'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Add+a+JSF+Form+Validation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/How+to+Add+a+JSF+Form+Validation'
    page_id: '28475772'
    shortlink: fIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fIGyAQ'
    source_link: /display/NXDOC710/How+to+Add+a+JSF+Form+Validation
history:
    - 
        author: Anahide Tchertchian
        date: '2015-12-08 11:24'
        message: pdate topic
        version: '29'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:02'
        message: ''
        version: '28'
    - 
        author: Manon Lumeau
        date: '2014-09-18 11:05'
        message: ''
        version: '27'
    - 
        author: Manon Lumeau
        date: '2014-09-17 17:37'
        message: ''
        version: '26'
    - 
        author: Vincent Dutat
        date: '2014-07-17 00:59'
        message: link to "Cross validation with JSF"
        version: '25'
    - 
        author: Solen Guitter
        date: '2014-02-17 09:35'
        message: ''
        version: '24'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 17:37'
        message: ''
        version: '23'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 16:52'
        message: ''
        version: '22'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 16:52'
        message: ''
        version: '21'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '20'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:09'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 07:55'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 07:54'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 07:53'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
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
        date: '2010-07-21 18:11'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
The document is created and updated using the 'create' or 'update' view. You can check values on this document before it is saved in the repository.

To validate field, you add a JSF validator to the JSF component controlling the field.

If you're using layouts, you can add it as a property to the widget in edit mode.

Without layout:

```
<h:inputText type="text" id="userNo" value="#{NumberBean.guess}" validator="#{NumberBean.validate}"/>

```

Inside a layout:

```xml
<widget name="title" type="text">
  <translated>true</translated>
  <fields>
    <field>dc:title</field>
  </fields>
  <properties mode="edit">
    <property name="validator">#{myValidatorBean.validateTitle}</property>
  </properties>
</widget>

```

The method `#{NumberBean.validate}` method will be called during Process Validations phase to perform correctness checks on the values of this component. The expression must evaluate to a public method that takes FacesContext, UIComponent, and Object parameters, with a return type of void.

If you need to cross validate fields of a document (i.e.: makes sure `dc:title` and `dc:description` are different), refer to the the [Cross validation with JSF](http://blogs.nuxeo.com/development/2009/03/cross-validation-with-jsf/) blog entry.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [JSF and Javascript ]({{page page='jsf-and-javascript'}})
*   [Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})
*   [Ajax Forms and Actions]({{page page='ajax-forms-and-actions'}})
*   [undefined]()
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [JavaScript Client]({{page page='javascript-client'}})
*   [Web UI Framework]({{page page='web-ui-framework'}})
*   [Web UI Framework Overview]({{page page='web-ui-framework-overview'}})
*   [Web UI Limitations]({{page page='web-ui-limitations'}})&nbsp;

{{/panel}}</div></div>