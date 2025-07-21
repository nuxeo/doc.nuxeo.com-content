---
title: LTS 2023.33 / LTS 2023-HF33
description: Discover what's new in LTS 2023.33 / LTS 2023-HF33
review:
   comment: ''
   date: '2025-07-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-33'}}
# What's New in LTS 2023.33 / LTS 2023-HF33

## Remove Dependency on `commons-lang` libraries

We removed the following dependencies from the root POM’s dependencyManagement section. If your project depends on the Nuxeo parent POM and relies on these libraries, you’ll have to upgrade your project to not depend on these libraries anymore.

* `net.sf.json-lib:json-lib`
* `commons-lang:commons-lang`

Also, we removed the following library from the Nuxeo Docker image and Tomcat server ZIP: `$NUXEO_HOME/lib/commons-lang-2.6.jar`.

## Support Kafka in KRaft Mode

Kafka in KRaft mode is now supported.

## Remove the SAML ID From the URL After an Other Authentication When a Session Already Exists

Nuxeo now re-authenticate the user on a second SAML authentication flow.

## Upgrade DuoWeb SDK to the Latest Version

Duo Web Nuxeo addon now leverages the Web SDK 4 Universal Prompt 

## Accessibility : Login Page

Login page accessibility has been improved

## Fix JSF 2023 Functional Tests Failing on Document Update

Tomcat Connector's maxPartCount and maxPartHeaderSize attributes can now be configured.

## Need API Changes to Display the Status of the Instance (e.g., Registered, End Date) in the Admin Console UI

A new management endpoint is available to get Connect registration status

See [https://doc.nuxeo.com/rest-api/1/connect-endpoint](https://doc.nuxeo.com/rest-api/1/connect-endpoint)

## Need API Support for Functionality to Check All Probes at Once in Admin Console UI

A new management endpoint is available to run all probes

See [https://doc.nuxeo.com/rest-api/1/probes-endpoint/#run-all-probes](https://doc.nuxeo.com/rest-api/1/probes-endpoint/#run-a-probes) 


{{! /multiexcerpt}}
