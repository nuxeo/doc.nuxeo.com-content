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

Nuxeo Online Services is being improved to enhance security. This page details what will happen, when, how you could be impacted and how to prepare for the change.

## Authenticating Against Nuxeo Online Services

#### From your Browser - What Changes?

- To access Nuxeo Online Services, you need to enter your _email address_ instead of your username in the login page. If you registered for a trial using Google, use the login with Google button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/login-as-customer
    name: login-customer.png
    studio_modeler#screenshot#up_to_date
--}}
![login-as-customer](nx_asset://0cf607da-99c1-469e-a8c4-4524a1437b38 ?w=650,border=true)

- URL for the login page is changed to https://auth.nuxeo.com (instead of https://sso.nuxeo.com). If you cannot access it, check with your system administrator that the URL is whitelisted.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/security-improvements-faq/auth-nuxeo-com
    name: auth-nuxeo-com.png
    studio_modeler#screenshot#up_to_date
--}}
![auth-nuxeo-com](nx_asset://885d8e2c-1831-4d9d-ac50-6835a7598799 ?border=true)

- Multi factor authentication is enforced. The [multi-factor authentication](#mfa) section in this page provides further details.

#### From the Command Line - What Changes?

To use our APIs, for instance in the following cases:
- Registering an instance using nuxeoctl
- Mirroring artifacts using Nexus
- Triggering a [Studio project release through the Nuxeo Online Services REST API]({{page space='studio' page='how-to-tag-or-release-your-nuxeo-studio-project'}}#with-the-rest-api)
- Using a CI/CD chain with Maven
- Using the Nuxeo CLI commmands to import or export a Studio project configuration
- Using the [Studio Designer Git Access]({{page space='studio' page='nuxeo-studio-designer-git-access'}})

When authenticating, you need to provide your username (unchanged), and a _[token](#what-is-a-token)_ instead of a password (new). Refer to our [token management]({{page space='studio' page='token-management'}}) documentation for further details.

### {{> anchor 'mfa'}}Multi-Factor Authentication

Multi-factor authentication (MFA) is needed to authenticate.

If you have not set up your MFA yet, you will be able to set it up while logging in. This second factor will be requested once a week to authenticate.

#### Impacts

When you log into Nuxeo Online Services using the browser, a second authentication factor will be requested to enhance your account security.

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

{{#> callout type='info' heading='Info'}}
MFA is used only in the browser. It is not needed when using command line tools to automate tasks.
{{/callout}}

#### Multi-Factor Authentication FAQ

##### Who is Impacted by the Change?

This change only applies to people using Nuxeo Studio and Nuxeo Marketplace (called developers from here on). It won't have any effect on people working every day in your Nuxeo Server instance, even if this instance is hosted in Nuxeo Cloud.

#### Can you Provide a Summary of the Change?

When authenticating into Nuxeo Studio or Nuxeo Marketplace, developers are requested to set up a second authentication factor using their phone.

The second factor setup is requested if it is not done yet, then it is asked once a week during authentication.

## General FAQ

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

### Why Make These Changes?

Nuxeo is partnering with Okta, an industry leader around authentication security to bring these changes. They are made as part of our continuous effort to improve security and bring several benefits:

- Storage decoupling: Your password will be stored by our partner Okta. This ensures it benefits from [even better protection](https://www.okta.com/security/).
- Stronger authentication system: Partnering with Okta allows us to provide new features to secure your account, like multi-factor authentication.
- Single Sign-On: Signing into Your Nuxeo Online Services account will allow you to access our different services seamlessly, without being prompted for credentials again.
