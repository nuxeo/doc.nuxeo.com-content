---
title: LTS 2021.43 / LTS 2021-HF43
description: Discover what's new in LTS 2021.43 / LTS 2021-HF43
review:
   comment: ''
   date: '2023-09-06'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1900
---

{{! multiexcerpt name='nuxeo-server-updates-2021-43'}}
# What's New in LTS 2021.43 / LTS 2021-HF43

## Fix DocumentSecurityException When Turning a Retained Flexible Record to Enforced Record


Retained flexible records documents can be turned into enforced records

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32040](https://jira.nuxeo.com/browse/NXP-32040)

## Prevent Flexible Record Creation if Server Is Running in Strict (Aka Old Compliance Mode)


Flexible Records are not possible when running retention in strict mode

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32028](https://jira.nuxeo.com/browse/NXP-32028)

## Provide Session Attribute to Hold the Username


The http session now contains the "user_name" attribute. Tomcat access log pattern can now be changed through the "nuxeo.server.tomcat_access_log.pattern" nuxeo conf property.

In order to change the tomcat access log pattern, use the **nuxeo.server.tomcat_access_log.pattern** nuxeo.conf property e.g.
```Java
nuxeo.server.tomcat_access_log.pattern=%h %t %{user_name}s '%r' %s %b (processed in %D ms)
```

The default value is **combined** see https://tomcat.apache.org/tomcat-9.0-doc/config/valve.html

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32019](https://jira.nuxeo.com/browse/NXP-32019)

## Escape Dash in the Automation Operation Category


Dashes in Automation operation categories are now escaped.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32011](https://jira.nuxeo.com/browse/NXP-32011)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22430) is available in our bug tracking tool.

{{! /multiexcerpt}}
