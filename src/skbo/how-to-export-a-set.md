---
title: How to export a set of several thousand documents
description: How to export a set of several thousand documents
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - configuration
    - export
    - studio

---
# How to export a set of several thousand documents?
## Problem
In a directory containing several thousands of documents, how to export in Excel this list of documents? This list seems limited to *1000* entries.
## Solution
Until Nuxeo version **6.0**, you could get rid of this limitation in setting in **nuxeo.conf** the value:  

    nuxeo.pageprovider.default-max-page-size=<desired value>

or even *0* to set no limit.

Since version **LTS 2015 (7.10)**, you will have to use the extension

    <extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
      <property name="nuxeo.pageprovider.default-max-page-size">DESIRED_VALUE</property>
    </extension>

for instance in **Studio > Advanced Settings > XML Extensions**.


2019-06-01T17:37:30.417Z
## (c) Nuxeo Support Knowledge Base Outline 2019
