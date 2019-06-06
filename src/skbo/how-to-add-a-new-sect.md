---
title: How to add a new SectionRoot
description: How to add a new SectionRoot
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - jsf-jsfdevelopment
    - configuration
    - jsf
    - sectionroot

---
# How to add a new SectionRoot?
## Problem
You have added a new SectionRoot tree branch under /default-domain but it is not displayed as a publication target. Is there a way to add a new SectionRoot object?
## Solution
In order to configure a new SectionRoot object as a publication target, you have to add a contribution under **NXHOME/nxserver/config/sectionroot-config.xml** (the filename must end in *-config.xml*) resembling:

    <?xml version="1.0"?>
    <component name="org.nuxeo.ecm.platform.publisher.task.contrib.SectionRoot2">

     <require>org.nuxeo.ecm.platform.publisher.contrib</require>
     <!--require>org.nuxeo.ecm.platform.publisher.task.contrib</require-->

      <extension
          target="org.nuxeo.ecm.platform.publisher.impl.service.PublisherServiceImpl"
          point="treeInstance">

        <publicationTreeConfig name="DefaultSectionsTree" tree="RootSectionsCoreTree"
                               factory="CoreProxy" localSectionTree="true"
                               title="SectionRoot2">
          <parameters>
            <parameter name="RootPath">default-domain/SectionRoot2</parameter>
            <!-- parameter name="RelativeRootPath">/SectionRoot2</parameter -->
            <parameter name="enableSnapshot">true</parameter>
            <parameter name="iconExpanded">/icons/folder_open.gif</parameter>
            <parameter name="iconCollapsed">/icons/folder.gif</parameter>
          </parameters>
        </publicationTreeConfig>

      </extension>
    </component>

In a document, you are then offered the choice of this SectionRoot object.  

In a Workspace, as an optional feature, in the tab “**Administration > Publication**” , you have also the possibility to specify or limit which SectionRoot object you can target in this workspace.


2019-06-01T17:37:41.182Z
## (c) Nuxeo Support Knowledge Base Outline 2019
