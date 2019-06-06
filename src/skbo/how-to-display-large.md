---
title: How to display large floating points as expected in financial figures
description: How to display large floating points as expected in financial figures
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - jsf-jsfdevelopment
    - studio-customization
    - configuration
    - jsf
    - studio

---
# How to display large floating points as expected in financial figures?
## Problem
When using Floating Points widgets in dematerialized billing applications to display floating point schema fields, the numbers appear as **1.23456E7** instead of **12 345 678**.  
How to get the display of floating point values as **12 345 678**?
## Solution
If the default widgets do not fit your needs, you always have the possibility to define your own widget. To this aim, you will have to go in the **Studio > … > Layout View** of your document type, and select a widget of type **“template”**, then to upload a “.xhtml” file to display using the correct format. An example of such custom widget template is:

    <div
      xmlns:f="http://java.sun.com/jsf/core"
      xmlns:h="http://java.sun.com/jsf/html">
      <h:outputText value="#{currentDocument.salescommon.amount}">
          <f:convertNumber pattern="#0.00" locale="fr_FR"/>
      </h:outputText>
    </div>


2019-06-01T17:37:29.258Z
## (c) Nuxeo Support Knowledge Base Outline 2019
