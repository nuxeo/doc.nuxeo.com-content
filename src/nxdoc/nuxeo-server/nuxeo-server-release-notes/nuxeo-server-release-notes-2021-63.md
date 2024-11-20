---
title: LTS 2021.63 / LTS 2021-HF63
description: Discover what's new in LTS 2021.63 / LTS 2021-HF63
review:
   comment: ''
   date: '2024-11-20'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-63'}}
# What's New in LTS 2021.63 / LTS 2021-HF63

## Remove Mobile Banner From Login Page


The mobile banner has been removed from the login page and all the JSF UI pages, since the mobile apps are no more maintained.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32958](https://hyland.atlassian.net/browse/NXP-32958)

## Catch ArithmeticException in Video Converter


Video conversion is now skipped if the height of the video is not known

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32939](https://hyland.atlassian.net/browse/NXP-32939)

## CSP Errors Shows on Login Page


There are no more Content Security Policy (CSP) errors on the login page with a stricter CSP not allowing inline scripts.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32937](https://hyland.atlassian.net/browse/NXP-32937)

## Fix Being Able to Create User With Empty Password


The REST API doesn't allow anymore to create a user with an empty password.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32928](https://hyland.atlassian.net/browse/NXP-32928)

## Page Provider Does Not Escape Quote in Term Aggregate Value


Quotes are now escaped when running bulk action on term aggregate value that contain them

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32905](https://hyland.atlassian.net/browse/NXP-32905)


# Learn More

[More information about released changes and fixed bugs](https://hyland.atlassian.net/secure/ReleaseNote.jspa?projectId=14958&version=33654) is available in our bug tracking tool.

{{! /multiexcerpt}}
