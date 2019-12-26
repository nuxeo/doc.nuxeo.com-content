---
title: Nuxeo Online Services Security Improvements FAQ
description: Learn how NOS will improve your security, how you could be impacted and how to prepare for the change.
review:
  comment: ''
  date: ''
  status: ok
toc: true
tree_item_index: 731
---


Nuxeo Online Services will undergo changes during the next couple of months in order to improve security. This page will detail what changes will happen, when, how you could be impacted and how to prepare for the change.

## Upcoming Changes

### Step 1 - Login Page Update

#### Timeline

TBD

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

When accessing Nuxeo Online Services, a different login page will be displayed, with a new design and a new URL: https://auth.nuxeo.com instead of https://sso.nuxeo.com

#### Preparing for Change

We recommend checking with your system administrator that the new URL is authorized for access.

A simple way to check is to click on the "Login with Okta" button available in the current page, and use it to login with your usual credentials. Note that when using Okta, you will be requested for a security question as a way to recover your password, and optionally to setup multi-factor authentication: see the <a href="#mfa">multi-factor authentication</a> section below for more details.

Your _email address_ will be requested instead of your _username_ in order to login into Nuxeo Online Services.

Command line tools will remain compatible after the change, and no change is needed on this side. In order to provide consistency and allow you to use your email address everywhere if you prefer to, we will also make sure before the update that our tools and APIs can accept either your username or your email address when being requested for a username.

### Step 2 - Tokens to Become Mandatory

#### Timeline

TBD

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

Whenever using command line tools:
- [nuxeoctl]({{page space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}),
- [Nuxeo CLI]({{page space='nxdoc' page='nuxeo-cli'}}),
- Maven,
- the REST API to [trigger Nuxeo Studio releases]({{page space='studio' page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api),

Nuxeo Online Services will request a token instead of your password in order to authenticate.

{{#> callout type='info'}}
This only impacts command line tools and APIs. It doesn't change the way you login to Nuxeo Online Services when using your browser, for instance when accessing Nuxeo Studio.
{{/callout}}

#### Preparing for Change

Tokens work already as of today, and will keep working after the change. Although our client tools have been updated to prompt for a token instead of a password, passwords remain as a compatibility option until the change is effective.

Switching to tokens will help you to prevent any breakage when the change will happen.

See our [token management]({{page page='token-management'}}) documentation for details on how to create and apply your token.

<a name="mfa"></a>
### Multi-Factor Authentication

#### Timeline

TBD

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

When login in to Nuxeo Online Services, you will be prompted to setup a second authentication factor in order to enhance your account security.

These factors can be one of the following:
- Code provided by a smartphone application (most secure)
- Voice call to a phone number
- SMS message sent to a phone number (less secure)

At first optional, this second authentication factor will be made mandatory at a later stage.

#### Preparing for Change

We recommend setting up the multi-factor authentication prior to its enforcement, so that you can get accustomed to it.

## FAQ

### Do I Need a Particular Hotfix for These Changes?

No hotfix is required. Recent hotfixes and tool versions only pack additional help to mention tokens instead of passwords when needed, starting from the following versions:

- 8.10-HF47
- 9.10-HF39
- 10.10-HF19

These changes are only cosmetic ones to clarify how our new authentication system works and have no functional impact.

### I'm Using an Unsupported Nuxeo Server Version. Should I be Concerned?

There is no impact on older Nuxeo Server versions. Changes made in our clients are only cosmetic ones to clarify how our new authentication system works.

## Why These Changes

Nuxeo is partnering with Okta, an industry leader around authentication security to bring these changes. They are made as part of our continuous effort to improve security, and bring several benefits:

- Storage decoupling: Nuxeo Online Services will not store your password anymore, reducing the risk of information leak if a breach were to happen. Furthermore, delegating this storage to our partner Okta ensures your password benefits from <a href="https://www.okta.com/security/" target="_blank">state of the art protection</a>.
- Stronger authentication system: Partnering with Okta allows us to provide new security features in order to secure your account, like multi-factor authentication.
- Single Sign On: Signing into Your Nuxeo Online Services account will allow you to access our different services seamlessly, without being prompted for credentials again.
