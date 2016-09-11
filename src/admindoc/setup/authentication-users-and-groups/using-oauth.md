---
title: Using OAuth
review:
    comment: ''
    date: ''
    status: ok
labels:
    - authentication
    - oauth
toc: true
confluence:
    ajs-parent-page-id: '21921913'
    ajs-parent-page-title: 'Authentication, users and groups'
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Using+OAuth
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Using+OAuth'
    page_id: '21921819'
    shortlink: G4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/G4BOAQ'
    source_link: /display/ADMINDOC60/Using+OAuth
history:
    - 
        author: Solen Guitter
        date: '2014-11-27 17:02'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-11-27 12:20'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-10-30 00:38'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-09-24 11:35'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-08-29 15:09'
        message: 'Updated screenshots, added links to the explorer, fixed formatting.'
        version: '14'
    - 
        author: Florent Guillaume
        date: '2013-08-28 14:32'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: Migrated to Confluence 4.0
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: ''
        version: '11'
    - 
        author: Florent Guillaume
        date: '2011-02-09 15:17'
        message: ''
        version: '10'
    - 
        author: Florent Guillaume
        date: '2011-02-09 15:17'
        message: ''
        version: '9'
    - 
        author: Florent Guillaume
        date: '2011-02-09 15:14'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2011-02-09 15:02'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2011-02-09 15:00'
        message: typography cleanups
        version: '6'
    - 
        author: Thierry Delprat
        date: '2011-02-07 17:13'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2011-02-07 17:09'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2011-02-07 16:45'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-02-07 16:44'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-02-07 14:03'
        message: ''
        version: '1'

---
## Background Information About OAuth

This section proposes a quick introduction to OAuth concepts.

For a detailed presentation of OAuth, you should read the [OAuth 1.0 Protocol specification](http://tools.ietf.org/html/rfc5849).

### Problem to Solve

OAuth addresses authentication issues in cases that include:

*   A Service Provider that exposes a web service,
*   A User that wants to access the service,
*   A Service Consumer that will access the Service Provider on behalf of the user.

In this context, the end user may have different accounts on each application.

The User may also want to grant more or less rights to the consumer. Typically, when Application A accesses services of Application B, it may be granted only read access. But when using Application C, users wants to grant Read/Write.

![]({{file name='Selection_061.png'}} ?w=500,border=true)

### 3-Legged OAuth

OAuth provides a solution to handle this problem.

The synopsis of the authentication goes like that:

1.  User wants to access a module of Application A that needs to access a Service hosted by B (for example an OpenSocial Gadget).
2.  Application A will request a "Request Token" from Application B.
3.  Application B will respond with:

    *   A Request Token,
    *   An authentication URL.
4.  User will be redirected to the authentication URL on the Application B.
5.  User will then:

    1.  Authenticate against Application B;
    2.  Accept the access request from Application A displayed by Application B (and maybe specify some associated security).
6.  User will then be redirected to Application A (on the callback URL, with the token and a random verifier).
7.  Application A will receive the request and call Application B to exchange the Request Token for an Access Token
8.  Application B will only allow the exchange if:
9.  *   The verifier is OK,
    *   The Request Token has been granted by user.
10.  Application A will then:

    *   Store the Access Token,
    *   Use it to access Service in B on behalf of User.

The interesting part is that:

*   User does not have to give Application A his login/password on Application B,
*   User can choose how Application A can access his data on Application B:

    *   Define security if needed,
    *   He should also be able to revoke the grant at any time;
*   Application A can store the token and reuse it as long as it is valid (no more authentication needed),
*   Application A and B do not need to share the same user DB.

### 2-Legged OAuth (Signed Fetch)

Of course 3-Legged OAuth is not always the best option. In some situations, you only want to do a server-to-server authentication.

To answer this use case, OAuth supports a simple mode that will only use the OAuth signature system (see below) to have a trusted communication between two servers.

### OAuth Signature

An important part of OAuth is that the HTTP requests have to be signed:

*   To be able to verify the identity of the caller,
*   To be sure the request was not modified during the transfer.

For that OAuth can use two different signing methods:

*   HMAC symmetric signature (Shared Secret),
*   RSA1 asymmetric signature (Public /Private keys).

All requests using OAuth (2-Legged or 3-Legged) are signed using one of these two signature method. The signature method is part of the request and may be chosen by the client, but the server may also enforce one of them.

In terms of security both methods have pros and cons, but RSA1 is generally more expensive.

## OAuth in Nuxeo Platform

### Managing Service Consumers in the Nuxeo Platform

#### Generic Consumers

Consumers are declared in Nuxeo [OAuthConsumerRegistry](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewService/org.nuxeo.ecm.platform.oauth.consumers.OAuthConsumerRegistry).

You can access this service via tab **Admin** > **OAuth** > **Consumers**.

![]({{file name='oauth-consumers-tab.png'}} ?w=650,border=true)

To define a OAuth Consumer you will need to enter:

*   A Consumer Key: identifier of the application,
*   A Consumer Secret (HMAC key) and/or a RSA1 public key,
*   A callback URL:

    *   Only needed for 3-Legged OAuth,
    *   Most consumers will automatically provide this callback URL as part of the OAuth dialog.
*   A security mode:

    *   You can restrain consumer usage to 3-Legged OAuth;
    *   You can accept 2-Legged OAuth (i.e. only server-to-server authentication). In this case you will need to choose how the Nuxeo user will be chosen:

        *   OpenSocial viewer
        *   OpenSocial owner
        *   Dedicated login

Depending on the consumer, it may not allow all possibilities:

*   Maybe only HMAC signature will be supported
*   Maybe only 3-Legged OAuth will be supported
*   ...

For example, you may want to use iGoogle as a consumer of some of your Nuxeo Gadgets and services. In this case, you will need to:

*   Use a consumer with www.google.com as consumer key.
*   Use RSA1 key as documented [here.](http://code.google.com/intl/fr/apis/gadgets/docs/oauth.html#rsa)
*   Provide in Nuxeo the callback URL [http://oauth.gmodules.com/gadgets/oauthcallback](http://oauth.gmodules.com/gadgets/oauthcallback).

![]({{file name='Selection_059.png'}} ?w=500,border=true)

#### The Special Case of Nuxeo/Shindig

When the Nuxeo Platform is both the provider and the consumer, 2-Legged OAuth (signed Fetch) is used with a HMAC Signature. The HMAC secret is dynamically generated at runtime and shared between Shindig and Nuxeo in memory.

#### Nuxeo OAuth URLs

Access URL: `/nuxeo/oauth/access-token` (URL to request an Access Token).

Request URL: `/nuxeo/oauth/request-token` (URL to request a Request Token).

Authorization URL: `/nuxeo/oauth/authorize` (URL used by a User to grant access).

### Managing Service Providers in the Nuxeo Platform

Service providers are declared in [OAuthServiceProviderRegistry](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewService/org.nuxeo.ecm.platform.oauth.providers.OAuthServiceProviderRegistry).

You can access it via **Admin** > **OAuth** > **Service providers**.

![]({{file name='oauth-service-providers-tab.png'}} ?w=650,border=true)

You will have to enter the following information:

*   A gadget URL (AppId): the identifier of the gadget inside Nuxeo that will use the service,
*   A service Name: the name of the service as used in the makeRequest call,
*   A consumer Key: the consumer key (login) that must be used to call the service,
*   A consumer Secret (HMAC key): a shared secret used to sign OAuth requests,
*   OAuth callback URLs.

OAuth callback URLs will only be used if the gadget does not provide the needed information as part of the Gadget Spec (it should). If the consumer secret is empty, Nuxeo with use the server global RSA1 key.

When looking up the right service provider, Nuxeo will do the search based on the service Name and the AppId and fallback to the closest match.

### Managing Tokens

OAuth requires Nuxeo to manage Tokens:

*   Request Tokens are managed in memory (transient)
*   Access Token are managed in the SQL DB

You can use the Admin tab screens to:

*   Add the Tokens that Nuxeo granted or was granted
*   Revoke (delete) the Tokens

&nbsp;

* * *