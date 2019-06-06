---
title: How to workaround org.nuxeo.ecm.core.api.validation.DocumentValidationException
description: How to workaround org.nuxeo.ecm.core.api.validation.DocumentValidationException
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - studio-modeler
    - constraint
    - modeler
    - studio

---
# How to workaround org.nuxeo.ecm.core.api.validation.DocumentValidationException?
## Problem
Why do I get such an exception and how to work around it?
## Solution
You get such an exception each time in the definition of the document type (e.g. in Studio) you set a constraint or a required field and when creating a document of such type, you do not satisfy the constraint or do not supply the required field

In order to work around this issue, there is the possibility to specify that there is no validation of such documents in different places, a.k.a. disabling the validation service using the contribution:

    <require>org.nuxeo.ecm.core.api.DocumentValidationService.activations</require>
    <require>org.nuxeo.ecm.platform.ui.web.DocumentValidationService.activations</require>

    <extension point="activations"
               target="org.nuxeo.ecm.core.api.DocumentValidationService">
        <validation activated="false" context="createDocument"/>
        <validation activated="false" context="saveDocument"/>
        <validation activated="false" context="importDocument"/>
        <validation context="jsfValidator" activated="false" />
    </extension>

You can also configure the validation of the fields of the document to happen after the listeners have been triggered:

    <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
      <property name="org.nuxeo.core.validation.after.listeners">true</property>
    </extension>

However, the true fix for this issue is to have thoughts on the fact that the fields are declared as constrained or required: If you enable the creation of “incomplete” documents, then are these fields truly required? Or, you might have to find a way to automatically retrieve the correct values for the constrained or required fields.


2019-06-01T17:38:01.772Z
## (c) Nuxeo Support Knowledge Base Outline 2019
