---
title: How to customize the navigation tree
description: How to customize the navigation tree
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - configuration
    - jsf
    - tree

---
# How to customize the navigation tree?
## Problem
I want to customize the JSF left navigation tree or the default WebUI navigation tree. How to perform this customization?
## Solution
Add a file **NX_HOME/nxserver/config/tree-children-config.xml** (the file name must end in *-config.xml*) containing the following:

    <component name="my-tree-children-config">
     <require>org.nuxeo.ecm.webapp.pageproviders.contrib</require>
     <extension target="org.nuxeo.ecm.platform.query.api.PageProviderService"
            point="providers">
        <coreQueryPageProvider name="tree_children">
          <property name="maxResults">YOUR MAXIMUM RESULTS</property>
          <pattern>
            SELECT * FROM Document WHERE YOUR NXQL QUERY HERE
          </pattern>
          <sort column="dc:title" ascending="true" />
          <pageSize>YOUR PAGE SIZE</pageSize>
        </coreQueryPageProvider>
      </extension>
    </component>

Reference : <https://doc.nuxeo.com/nxdoc/how-to-display-non-folderish-documents-files-note-in-the-left-tree/>


2019-06-01T17:37:54.529Z
## (c) Nuxeo Support Knowledge Base Outline 2019
