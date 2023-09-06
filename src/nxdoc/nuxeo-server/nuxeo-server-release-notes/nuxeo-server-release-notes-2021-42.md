---
title: LTS 2021.42 / LTS 2021-HF42
description: Discover what's new in LTS 2021.42 / LTS 2021-HF42
review:
  comment: ''
  date: '2023-08-17'
  status: ok
labels:
  - release-notes
toc: true
tree_item_index: 1910
---

{{! multiexcerpt name='nuxeo-server-updates-2021-42'}}

# What's New in LTS 2021.42 / LTS 2021-HF42

## Fix Inconsistency With the Dates Used by the Date-Based ACEs

Take into account the server timezone when updating ACEs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32013](https://jira.nuxeo.com/browse/NXP-32013)

## Preview Adapter Should Process Rendition on Worker Nodes

Preview are now more scalable

The preview adapter is now processed by worker nodes within a managed thread pools instead of being done on front nodes, the preview is cached and shared between all front nodes.
This feature is activated by default on LTS 2023.
On LTS 2021 it can be activated by setting nuxeo.preview.legacy.enabled=false in the nuxeo.conf file.
The number of threads per worker nodes executing PreviewWork can be tuned with nuxeo.work.queue.renditionBuilder.threads=2, default being 2 threads per node, with a max concurrency of 6.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31979](https://jira.nuxeo.com/browse/NXP-31979)

## Produce addNotNullViolation for '[Null]' for Multivalued String Properties

You can now make the elements of a multi-valued property non nullable by putting `\{{nxsv:nillable="false"}}` onto the `\{{xs:list}}` xml element.

To configure the elements of a multi-valued scalar property non nullable you can do:

```Java
<?xml version=1.0?>
<xs:schema xmlns:xs=http://www.w3.org/2001/XMLSchema
           targetNamespace=http://nuxeo.com/schemas/validationSample
           xmlns:nxv=http://nuxeo.com/schemas/validationSample
           xmlns:nxsv=http://www.nuxeo.org/ecm/schemas/core/validation/>

  <xs:element name=arrayOfStrings>
    <xs:simpleType>
      <xs:list nxsv:nillable=false>
        <xs:simpleType>
          <xs:restriction base=xs:string>
            <xs:pattern value=[a-zA-Z0-9]*></xs:pattern>
          </xs:restriction>
        </xs:simpleType>
      </xs:list>
    </xs:simpleType>
  </xs:element>

</xs:schema>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31918](https://jira.nuxeo.com/browse/NXP-31918)

## Skip handleLogin When HTTP Response Has Already Been Commited

The Keycloak module delegates the redirect after auth failure to the default authentication mechanism.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30507](https://jira.nuxeo.com/browse/NXP-30507)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22410) is available in our bug tracking tool.

{{! /multiexcerpt}}
