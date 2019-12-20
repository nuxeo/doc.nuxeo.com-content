---
title: Token Management
description: Tokens need to be used as a replacement for your password in Nuxeo Online Services APIs and our command line tools.
review:
    comment: ''
    date: ''
    status: ok
toc: true
---

As a commitment to an always improved security, Nuxeo Online Services delegates authentication to Okta. This allows us to secure it in an advanced way, and provide additional security options.

The counterpart is that whenever using commands in our clients and APIs that require authentication, your password can't be used. Nuxeo Online Services needs an alternative way for you to authenticate: that's when you should use a token.

{{#> callout type='warning' heading='Future Change'}}
Tokens will become the mandatory way to authenticate for all our tools and APIs. We strongly recommend doing the switch as soon as possible to prevent any breakage in the future.
{{/callout}}

## When to Use a Token

Tokens need to be used as a replacement for your password in Nuxeo Online Services APIs and our command line tools:
- In your continuous integration / continuous delivery chain, to have your software authenticate against our [Maven private repository]({{page version='' space='studio' page='maven-integration'}}),
- To [trigger a Studio release through the REST API]({{page page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api),
- When using our command line tools with options that require a password to be provided. For example, registering an instance using [nuxeoctl]({{page version='' space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}), linking your Studio project to your Java development project in [Nuxeo CLI]({{page page='nuxeo-cli' space='nxdoc'}}).

{{#> callout type='info'}}
Tokens are only used for command-line tools and APIs. You still need to use your password as usual when you log in to Nuxeo Online Services in your browser, for instance when accessing Nuxeo Studio.
{{/callout}}

## Creating a Token

To generate a token:
1. Login to [Nuxeo Online Services](https://connect.nuxeo.com),
1. Visit the **My Tokens** tab,
1. Create your token using the corresponding button and provide a clear name for it (ex: "CI Chain"). The name has no impact; it is only meant for you to remember where / how you plan to use it, that's very important in case you need to revoke it later.
![]({{file name='token-management.png'}} ?border=true,w=650)

Your token will only be shown once; be sure to save it in a secure place, for instance a password management tool.

{{#> callout type='info'}}
We recommend using a different token for every tool or service you plan to use: this lessens the impact if you need to revoke it at some point.
{{/callout}}

## Using your Tokens

Using your token consists in entering it when prompted.

In some cases, configuration can help you skip this prompt to make your flow faster:
- [Storing Git credentials]({{page page='nuxeo-studio-designer-git-access'}}#cloning-your-project) when using Git access
- [Storing the token in your Maven configuration]({{page page='maven-integration'}}#setting-up-the-maven-client) for your CI chain needs

{{#> callout type='info'}}
Tokens are only used for command-line tools and APIs. You still need to use your password as usual when you log in to Nuxeo Online Services in your browser, for instance when accessing Nuxeo Studio.
{{/callout}}

## Revoking a Token

Tokens have no expiration date or policy. If you ever forget your token, think it may have been compromised or simply wish to change them regularly for increased security:

1. Login to [Nuxeo Online Services](https://connect.nuxeo.com),
1. Visit the **My Tokens** tab,
1. Revoke the appropriate token(s),
1. Generate new token(s) and update any impacted configuration.
