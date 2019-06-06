---
title: Displaying the path of documents in thumbnail in search results
description: How to display the path of documents in thumbnails?
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - jsf-jsfdevelopment
    - jsf
    - path
    - thumbnail

---
# How to display the path of documents in thumbnails in search screen results in JSF?

## The Problem
I have many documents with the same name in the results of my searches. I would like to help my users to discriminate these documents by path. For this, I want to display in JSF in the thumbnails the path of the documents retrieved. How to perform this operation?

## The Solution


In Studio, add in the **Resources &gt; Widget Templates** section a widget (here named **MyWidget**) which reads:

    <c:if test="true"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:c="http://java.sun.com/jstl/core"
      xmlns:f="http://java.sun.com/jsf/core"
      xmlns:nxu="http://nuxeo.org/nxweb/util"
      xmlns:nxd="http://nuxeo.org/nxweb/document"
      xmlns:nxh="http://nuxeo.org/nxweb/html"
      xmlns:nxl="http://nuxeo.org/nxforms/layout"
      xmlns:h="http://java.sun.com/jsf/html"
      xmlns:nxp="http://nuxeo.org/nxweb/pdf">

      #{field.getPath()}
    </c:if>

and refer to it in a Studio **template advanced widget** and pass **data** as argument of the template.

This part of the solution is enough to be able to display the path in a listing view: in the search content view, add a column and goto **More Widgets &gt; Advanced Widget &gt; Template**, refer to **MyWidget** as a template and add **data** as a field. Then, change the title of the column from *Template* to *Path* for instance.

To add the path in thumbnails, you must in addition modify the default configuration of the display of thumbnails. For this, in **Configuration &gt; Advanced Settings &gt; XML extensions**, copy and paste the following:

    <require>org.nuxeo.search.ui.contentviews</require>
    <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
      point="widgets">

      <widget name="listing_size_and_format" type="container">
        <labels>
          <label mode="any">label.search.size_and_format</label>
        </labels>
        <properties widgetMode="view">
          <property name="display">inline</property>
          <property name="hideSubLabels">true</property>
        </properties>
        <subWidgetRefs>
          <widget>listing_size</widget>
          <widget>MyTemplate</widget>
          <widget>listing_main_file_format</widget>
        </subWidgetRefs>
      </widget>

      <widget name="MyTemplate" type="template">
            <labels>
              <label mode="any">Path</label>
            </labels>
            <translated>false</translated>
            <fields>
              <field>data</field>
            </fields>
            <properties widgetMode="view">
              <property name="template">/widgets/MyWidget.xhtml</property>
            </properties>
            <properties mode="any">
              <property name="template">/widgets/MyWidget.xhtml</property>
            </properties>
        </widget>

    </extension>

This redefines all thumbnails to add the path between the size and the type of the documents
This is valid for all displayed thumbnails.


2019-06-01T15:00:50.360Z
## (c) Nuxeo Support Knowledge Base Outline 2019
