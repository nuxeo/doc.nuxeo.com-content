---
title: LTS 2025.5 / LTS 2025-HF05
description: Discover what's new in LTS 2025.5 / LTS 2025-HF05
review:
   comment: ''
   date: '2025-07-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2025-5'}}
# What's New in LTS 2025.5 / LTS 2025-HF05

## Support Kafka in KRaft Mode

Kafka in KRaft mode is now supported.

## Remove the SAML ID From the URL After an Other Authentication When a Session Already Exists

Nuxeo now re-authenticate the user on a second SAML authentication flow.

## Upgrade DuoWeb SDK to the Latest Version

Duo Web Nuxeo addon now leverages the Web SDK 4 Universal Prompt 

## Fix JSF 2023 Functional Tests Failing on Document Update

Tomcat Connector's maxPartCount and maxPartHeaderSize attributes can now be configured.

## Need API Changes to Display the Status of the Instance (e.g., Registered, End Date) in the Admin Console UI

A new management endpoint is available to get Connect registration status

See [https://doc.nuxeo.com/rest-api/1/connect-endpoint](https://doc.nuxeo.com/rest-api/1/connect-endpoint)

## Need API Support for Functionality to Check All Probes at Once in Admin Console UI

A new management endpoint is available to run all probes

See [https://doc.nuxeo.com/rest-api/1/probes-endpoint/#run-all-probes](https://doc.nuxeo.com/rest-api/1/probes-endpoint/#run-a-probes) 


{{! /multiexcerpt}}
