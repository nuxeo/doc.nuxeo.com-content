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

## In a Nutshell
Changes will be made in 3 steps:
- <a href="#login-page">Login page update</a>: will change its URL, its design, and will ask for your email to authenticate instead of your username
- <a href="#token-usage">Token usage</a>: <a href="#what-is-a-token">tokens</a> will be required instead of passwords in our command line tools and APIs.
- <a href="#mfa">Multi-factor authentication</a>: an additional authentication factor will become mandatory to login into Nuxeo Online Services.

## Upcoming Changes

<a name="login-page"></a>
### Step 1 - Login Page Update

#### Timeline

//TBD - Doc won't be merged until dates are known

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

When accessing Nuxeo Online Services, a different login page will be displayed, with a new design and a new URL: https://auth.nuxeo.com instead of https://sso.nuxeo.com

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/auth-nuxeo-com
    name: auth-nuxeo-com.png
    studio_modeler#screenshot#up_to_date
--}}
![auth-nuxeo-com](nx_asset://885d8e2c-1831-4d9d-ac50-6835a7598799 ?border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/okta-login-page
    name: okta-login-page.png
    studio_modeler#screenshot#up_to_date
--}}
![okta-login-page](nx_asset://e2f6e69c-cc13-4b69-ab4d-ed58adea3828 ?w=650,border=true)


#### Preparing for Change

We recommend checking with your system administrator that the new URL is authorized for access.

A simple way to check is to click on the "Login with Okta" button available in the current page, and use it to login with your usual credentials.

Your _email address_ will be requested instead of your _username_ in order to login into Nuxeo Online Services.

Note that when using Okta, you will be requested for a security question as a way to recover your password, and optionally to setup multi-factor authentication. The <a href="#mfa">multi-factor authentication</a> will become mandatory later on.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/account-setup
    name: account-setup.png
    studio_modeler#screenshot#up_to_date
--}}
![account-setup](nx_asset://bc216582-68b8-4858-846d-2bde22123efc ?w=650,border=true)

Command line tools will remain compatible after the change, and no change is needed on this side. In order to provide consistency and allow you to use your email address everywhere if you prefer to, we will also make sure before the update that our tools and APIs can accept either your username or your email address when being requested for a username.

<a name="token-usage"></a>
### Step 2 - Tokens to Become Mandatory

#### Timeline

//TBD - Doc won't be merged until dates are known

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

Whenever using command line tools:
- [nuxeoctl]({{page space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}),
- [Nuxeo CLI]({{page space='nxdoc' page='nuxeo-cli'}}),
- Maven,
- the REST API to [trigger Nuxeo Studio releases]({{page space='studio' page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api),
- [Studio Designer Git Access]({{page space='studio' page='nuxeo-studio-designer-git-access'}})

Nuxeo Online Services will request a token instead of your password in order to authenticate.

{{#> callout type='info'}}
This only impacts command line tools and APIs. It doesn't change the way you login to Nuxeo Online Services when using your browser, for instance when accessing Nuxeo Studio.
{{/callout}}

#### Preparing for Change

Tokens work already as of today, and will keep working after the change. Although our client tools have been updated to prompt for a token instead of a password, passwords remain as a compatibility option until the change is effective.

Switching to tokens will help you to prevent any breakage when the change will happen.

See our [token management]({{page page='token-management'}}) documentation for details on how to create and apply your token.

<a name="mfa"></a>
### Step 3 - Multi-Factor Authentication

#### Timeline

//TBD - Doc won't be merged until dates are known

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

When login in to Nuxeo Online Services, you will be prompted to setup a second authentication factor in order to enhance your account security.

These factors can be one of the following:
- Code provided by a smartphone application (most secure)
- Voice call to a phone number
- SMS message sent to a phone number (less secure)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/mfa-setup
    name: mfa-setup.png
    studio_modeler#screenshot#up_to_date
--}}
![mfa-setup](nx_asset://64c95f94-e3ac-40b1-a03e-16ce33989d83 ?w=415,border=true)

Optional during the previous steps, this second authentication factor will be enforced at this stage.

#### Preparing for Change

We recommend setting up the multi-factor authentication prior to its enforcement, so that you can get accustomed to it.

## FAQ

<a name="what-is-a-token"></a>
### What is a Token?

{{{multiexcerpt 'what-is-a-token' page='token-management'}}}

Feel free to check our [token management]({{page page='token-management'}}) documentation for further details.

### Do I Need a Particular Hotfix for These Changes?

No hotfix is required. Recent hotfixes and tool versions only pack additional help to mention tokens instead of passwords when needed, starting from the following versions:

- 8.10-HF47
- 9.10-HF39
- 10.10-HF19

These changes are only cosmetic ones to clarify how our new authentication system works and have no functional impact.

### I'm Using an Unsupported Nuxeo Server Version. Should I be Concerned?

The same applies for formerly supported releases: no need for code change. Authentication against Nuxeo Online Services when using our command line tools and APIs will have to be done using tokens instead of passwords.

### Why These Changes?

Nuxeo is partnering with Okta, an industry leader around authentication security to bring these changes. They are made as part of our continuous effort to improve security, and bring several benefits:

- Storage decoupling: Nuxeo Online Services will not store your password anymore, reducing the risk of information leak if a breach were to happen. Furthermore, delegating this storage to our partner Okta ensures your password benefits from <a href="https://www.okta.com/security/" target="_blank">state of the art protection</a>.
- Stronger authentication system: Partnering with Okta allows us to provide new security features in order to secure your account, like multi-factor authentication.
- Single Sign On: Signing into Your Nuxeo Online Services account will allow you to access our different services seamlessly, without being prompted for credentials again.
