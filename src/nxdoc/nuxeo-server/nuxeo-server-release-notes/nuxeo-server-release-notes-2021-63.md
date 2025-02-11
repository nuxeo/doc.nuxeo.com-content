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
tree_item_index: 1700
---

{{! multiexcerpt name='nuxeo-server-updates-2021-63'}}
# What's New in LTS 2021.63 / LTS 2021-HF63

## Remove Mobile Banner From Login Page

The mobile banner has been removed from the login page and all the JSF UI pages, since the mobile apps are no more maintained.


## Catch ArithmeticException in Video Converter

Video conversion is now skipped if the height of the video is not known


## CSP Errors Shows on Login Page

There are no more Content Security Policy (CSP) errors on the login page with a stricter CSP not allowing inline scripts.


## Fix Being Able to Create User With Empty Password

The REST API doesn't allow anymore to create a user with an empty password.


## Page Provider Does Not Escape Quote in Term Aggregate Value

Quotes are now escaped when running bulk action on term aggregate value that contain them


{{! /multiexcerpt}}
