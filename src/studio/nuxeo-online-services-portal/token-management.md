---
title: Token Management
description: Personal authentication tokens can be generated from the Nuxeo Online Services portal.
review:
    comment: ''
    date: ''
    status: ok
toc: true
---

## Token Generation
Personal authentication tokens can be generated from the Nuxeo Online Services portal.

Tokens can be used as a replacement for a password and can be revoked anytime. Here are a few situations where they can be useful:
- In your continuous integration / continuous delivery chain, to have your software authenticate against our Maven private repository,
- When you authenticate using a third party provider (Google or Okta) and need to use our command line tools with options that require a password to be provided, for example, registering an instance using nuxeoctl, linking your Studio project to your Java development project in Nuxeo CLI.

To generate a token:
1. Login to [Nuxeo Online Services](https://connect.nuxeo.com)
1. Visit the **My Tokens** tab
1. Create your token using the corresponding button and provide a clear name for it (ex: "CI Chain")
![]({{file name='token-management.png'}} ?border=true,w=650)

Your token will only be shown once, so be sure to save it in a secure place. If you ever forget it or think it may have been compromised, you can revoke it anytime and generate a new one.
