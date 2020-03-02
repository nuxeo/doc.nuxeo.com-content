---
title: Token Management
description: Tokens need to be used as a replacement for your password in Nuxeo Online Services APIs and our command line tools.
review:
    comment: ''
    date: ''
    status: ok
toc: true
tree_item_index: 100
---

As a commitment to an always improved security, Nuxeo Online Services delegates authentication to Okta. This allows us to secure it in an advanced way, and provide additional security options.

The counterpart is that whenever using commands in our clients and APIs that require authentication, your password can't be used. Nuxeo Online Services needs an alternative way for you to authenticate: that's when you should use a token.

{{#> callout type='warning' heading='Future Change'}}
Tokens will become the mandatory way to authenticate for all our tools and APIs. We strongly recommend doing the switch as soon as possible to prevent any breakage in the future.
{{/callout}}

## What is a Token

{{! multiexcerpt name='what-is-a-token'}}
A token is a randomly generated string that can be used as a replacement for your password when authenticating to our services. It is meant to be used as a replacement for your password in all places where you would need to write down your password, but would rather avoid to disclose it: for instance in configuration files.
{{! /multiexcerpt}}

## When to Use a Token

Tokens need to be used as a replacement for your password in Nuxeo Online Services APIs and our command line tools, whenever you need to authenticate. Some examples:
- In your continuous integration / continuous delivery chain, to have your software authenticate against our [Maven private repository]({{page version='' space='studio' page='maven-integration'}})
- To [trigger a Studio release through the REST API]({{page page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api),
- When using our command line tools with options that require a password to be provided. For example, registering an instance using [nuxeoctl]({{page version='' space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}), linking your Studio project to your Java development project in [Nuxeo CLI]({{page page='nuxeo-cli' space='nxdoc'}})
- When using [Studio Designer Git Access]({{page page='nuxeo-studio-designer-git-access'}}) for faster development
- When mirroring some private artifacts (like a Nuxeo Studio project) using Nexus

For more details on when to use the token, see the <a href="#token-usage">token usage</a> section in this page.

{{#> callout type='info'}}
Tokens are only used for command line tools and APIs. You still need to use your password as usual when you log in to Nuxeo Online Services in your browser, for instance when accessing Nuxeo Studio.
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

<a name="token-usage"></a>
## Using your Tokens

Using your token is exactly the same as using a password. Enter it when prompted, or store it in your configuration when using automated tools. Some examples can be found below:

### Nuxeoctl

When using a command requiring a password, nuxeoctl prompts you for your token. Example:

```
./nuxeoctl register
Username: [enter your NOS username]
Please enter your token: [enter your token here instead of your password]
```

### Nuxeo CLI

Nuxeo CLI prompts for your token when needed. Example:

```
me@my-computer:~/my-java-project$ nuxeo studio

dxxxxxxxxxxc    oxxo       lxxx lkkl       ;kkk
dxxxxxxxxxxxd;  oxxo       lxxx lkkkx:.  ,dkkkx
dxxc       lxxo oxxo       lxxx  "okkkkokkkkd,
dxxc       lxxo oxxo       lxxx    .dkkkkkk.                  Welcome to
dxxc       lxxo oxxo       lxxx   ,dkkkkkkkk,                     Nuxeo CLI
dxxc       lxxo "oxxcccccccdxxx ,kkkkx" "okkkk,
loo;       :ooc   "cooooooooool xkko       ckko

:cc,       ;cc;                 oxxxxxxxxxxxxxo
dxxc       lxxo                 oxxxxxxxxxxxxxo
dxxc       lxxo                 oxxo           
dxxc       lxxo                 oxxxxxxxxxxxxxo
dxxc       lxxo                 oxxo           
"cxxoooooooxxxo                 oxxxxxxxxxxxxxo
   xoooooooxxxo                 oxxxxxxxxxxxxxo

lkkl       ;kkk oxxxxxxxxxxxxxo xooooooooooo,  
lkkkx:.  ,dkkkx oxxxxxxxxxxxxxo lxxxxxxxxxxxxb;
 "okkkkokkkkd,  oxxo            lxxd       :xxx
   .dkkkkkk.    oxxxxxxxxxxxxxo lxxd       :xxx
  ,dkkkkkkkk,   oxxo            cxxd       :xxx
,kkkkx" "okkkk, oxxxxxxxxxxxxxo  "oxxxxxxxxxxxx
xkko       ckko oxxxxxxxxxxxxxo    :xxxxxxxxxxx


     info You are going to link a Studio project to this project.
? NOS Username: [enter your NOS username]
? NOS Token: [input is hidden] [enter your token here instead of your password]
```

### Maven

Your token needs to be stored in your `.m2/settings.xml` file, where you would usually put your password. Details can be found in our [Maven configuration]({{page page='maven-integration'}}#setting-up-the-maven-client) documentation.

### Studio Designer Git Access

{{{multiexcerpt name="cloning-git-studio-project" page="nuxeo-studio-designer-git-access"}}}

Check our [Nuxeo Studio Designer Git access]({{page page='nuxeo-studio-designer-git-access'}}) documentation for more details.

### Nuxeo Online Services REST API

When triggering a [Studio project release through the Nuxeo Online Services REST API]({{page space='studio' page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api), use your Nuxeo Online Services username replace your password with a token.

### Nexus

In your Nexus configuration, use your Nuxeo Online Services username and replace your Nuxeo Online Services password with your token.

### Other Tools

Any other tool behaves the same as above: use your Nuxeo Online Services username and replace your Nuxeo Online Services password with your token.

## Revoking a Token

Tokens have no expiration date or policy. If you ever forget your token, think it may have been compromised or simply wish to change them regularly for increased security:

1. Login to [Nuxeo Online Services](https://connect.nuxeo.com),
1. Visit the **My Tokens** tab,
1. Revoke the appropriate token(s),
1. Generate new token(s) and update any impacted configuration.
