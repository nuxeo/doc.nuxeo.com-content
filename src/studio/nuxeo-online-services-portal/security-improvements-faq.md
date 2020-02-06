---
title: NOS Security Improvements FAQ
description: Learn how NOS will improve your security, how you could be impacted and how to prepare for the change.
review:
  comment: ''
  date: ''
  status: ok
toc: true
tree_item_index: 200
---

Nuxeo Online Services will be improved in the next couple of months to enhance security. This page details what will happen, when, how you could be impacted and how to prepare for the change.

## In Brief

Changes will be done in 2 steps:

### Step 1 - Login Page Update and Token Enforcement
- [Login page update](#login-page-update): URL and design will be updated and your email will be asked to authenticate instead of your username.
- [Token usage](#token-usage): [tokens](#what-is-a-token) will be required instead of passwords in our command line tools and APIs.

### Step 2 - Multi-Factor Authentication
- [Multi-factor authentication](#mfa): an additional authentication factor will become mandatory to log into Nuxeo Online Services.

## Upcoming Changes

### Login Page Update

#### Timeline

- Anytime before Feb. 24: new login page is available to test
- Feb. 24, 2020: new login page becomes official

{{#> callout type='info'}}
Timeline has been pushed back from Feb. 10 to Feb. 24 in order to provide additional preparation time. This date is now the final one and won't be moved further.
{{/callout}}

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

When accessing Nuxeo Online Services, a different login page will be displayed, with a new design and a new URL: https://auth.nuxeo.com (instead of https://sso.nuxeo.com).

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

It is recommended to check with your system administrator that the new URL is authorized for access.

A simple way to check is to click on the **Sign in with Okta** button available in the current page, and use it to log in with your usual credentials.

Your _email address_ will be requested instead of your _username_ to login into Nuxeo Online Services.

{{#> callout type='info'}}
When using Okta, a security question will be asked as a way to recover your password, and optionally to set up multi-factor authentication. The [multi-factor authentication](#mfa) will become mandatory later on.
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/account-setup
    name: account-setup.png
    studio_modeler#screenshot#up_to_date
--}}
![account-setup](nx_asset://bc216582-68b8-4858-846d-2bde22123efc ?w=650,border=true)

Command line tools will remain compatible and no update is needed on this side.</br>
To provide consistency and allow you to use your email address everywhere if you prefer to, we will make sure that our tools and APIs can accept either username or email address when requesting a username.

### {{> anchor 'token-usage'}}Tokens to Become Mandatory

#### Timeline

- Anytime before Feb. 24: tokens can be used as the recommended option, passwords remain compatible
- Feb. 24, 2020: tokens are enforced as a password replacement in all tools and APIs

{{#> callout type='info'}}
Timeline has been pushed back from Feb. 10 to Feb. 24 in order to provide additional preparation time. This date is now the final one and won't be moved further.
{{/callout}}

Communication will be sent out by email to all of our customers prior to the change.

#### Impacts

Whenever using command line tools like:
- [nuxeoctl]({{page space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}),
- [Nuxeo CLI]({{page space='nxdoc' page='nuxeo-cli'}}),
- Maven,
- the REST API to [trigger Nuxeo Studio releases]({{page space='studio' page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api),
- [Studio Designer Git Access]({{page space='studio' page='nuxeo-studio-designer-git-access'}})

Nuxeo Online Services will request a [token](#what-is-a-token) instead of your password to authenticate.

{{#> callout type='info'}}
It only impacts command line tools and APIs. It doesn't change the way you log into Nuxeo Online Services when using your browser, for instance when accessing Nuxeo Studio. Our tools and APIs can accept either your username or your email address when requesting a username.
{{/callout}}

#### Preparing for Change

[Tokens](#what-is-a-token) work already as of today, and will keep working after the change. Although our client tools have been updated to prompt for a token instead of a password, passwords remain as a compatibility option until the change is effective.

Switching to tokens will help you to prevent any breakage after the change.

See our [token management]({{page page='token-management'}}) documentation for details on how to create and apply your token.

### {{> anchor 'mfa'}}Multi-Factor Authentication

#### Timeline

- Anytime before March 10, 2020: multi-factor authentication can be set up manually and remains optional
- March 10, 2020: multi-factor authentication is enforced

{{#> callout type='info'}}
Timeline has been pushed back from Feb. 25 to March 10 in order to provide additional preparation time. This date is now the final one and won't be moved further.
{{/callout}}

Communication will be sent out by email to all of our customers before any change.

#### Impacts

When you log into Nuxeo Online Services, a second authentication factor will be requested to enhance your account security.

These factors can be one of the following:
- Code provided by a smartphone application (most secure)
- Voice call to a phone number
- SMS sent to a phone number (less secure)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/mfa-setup
    name: mfa-setup.png
    studio_modeler#screenshot#up_to_date
--}}
![mfa-setup](nx_asset://64c95f94-e3ac-40b1-a03e-16ce33989d83 ?w=415,border=true)

Optional during the previous steps, this second authentication factor will be enforced at this stage.

#### Preparing for Change

We recommend setting up the multi-factor authentication before this enforcement, so that you can get familiar with it.

## FAQ

### What is a Token?

{{{multiexcerpt 'what-is-a-token' page='token-management'}}}

Feel free to check our [token management]({{page page='token-management'}}) documentation for further details.

### Do I Need a Particular Hotfix for These Changes?

No hotfix is required.</br>
Latest hotfixes and tool versions only pack additional help to mention tokens instead of passwords when needed, starting from the following versions:

- 8.10-HF47
- 9.10-HF39
- 10.10-HF19

These changes are only visual to clarify how our new authentication system works and have no functional impact.

### I'm Using an Unsupported Nuxeo Server Version. Should I Be Concerned?

The same applies for formerly supported releases: no need for code change. Authentication against Nuxeo Online Services when using our command line tools and APIs will have to be done using tokens instead of passwords.

### Why These Changes?

Nuxeo is partnering with Okta, an industry leader around authentication security to bring these changes. They are made as part of our continuous effort to improve security and bring several benefits:

- Storage decoupling: Your password will be stored by our partner Okta. This ensures it benefits from [even better protection](https://www.okta.com/security/).
- Stronger authentication system: Partnering with Okta allows us to provide new features to secure your account, like multi-factor authentication.
- Single Sign-On: Signing into Your Nuxeo Online Services account will allow you to access our different services seamlessly, without being prompted for credentials again.
