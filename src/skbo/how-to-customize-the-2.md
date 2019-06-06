---
title: How to customize the number of documents displayed in a directory in the left tree menu in JSF
description: How to customize the number of documents displayed in a directory in the left tree menu in JSF
review: 
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - jsf-jsfruntime
    - runtime-administration
    - configuration
    - jsf
    - tree

---
# How to customize the number of documents displayed in a directory in the left tree menu in JSF?
## Problem
How to obtain exhaustive requests results in the left tree menu in JSF?  
Currently, the number of entries returned is limited to *50*.
## Solution
You must override the tree_chidren provider where the value 50 is hard coded.  
You can enter the following extension in **Studio > Advanced Settings > XML extension** in changing the **PAGE_SIZE**  value:

      <require>org.nuxeo.ecm.webapp.pageproviders.contrib</require>
      <extension target="org.nuxeo.ecm.platform.query.api.PageProviderService" point="providers">
        <coreQueryPageProvider name="tree_children">
          <property name="maxResults">PAGE_SIZE</property>
          <pattern>
            SELECT * FROM Document WHERE ecm:parentId = ? AND ecm:isProxy = 0 AND
            ecm:mixinType = 'Folderish' AND ecm:mixinType != 'HiddenInNavigation'
            AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted'
          </pattern>
          <sort ascending="true" column="dc:title"/>
          <pageSize>50</pageSize>
        </coreQueryPageProvider>
      </extension>


2019-06-01T17:37:45.977Z
## (c) Nuxeo Support Knowledge Base Outline 2019
