---
title: Nuxeo Drive Security Informations
review:
    comment: ''
    date: '2016-12-26'
    status: ok
labels:
    - nuxeo-drive-component
toc: true
---

We recommend you to always have a up-to-date version of Nuxeo Drive

## Authentication flow

Nuxeo Drive use a token-based authentication, it first authenticate the user through a server page authentication so it use the same authentication mechanism than your Nuxeo instance.

Once the authentication is done, Nuxeo generate a token and send it to the Drive module.

![]({{file page='nuxeo-drive' name='drive-auth.svg'}})
<!--
sequenceDiagram
opt Authentication
Drive->> Nuxeo: Access Authentication Page
Nuxeo->>Nuxeo: Authenticate user
Nuxeo->> Nuxeo: Generate token
Nuxeo->> Drive: Return a token
Drive->>Drive: Store token
end
loop For each API
Drive->> Nuxeo: Send command with token
Nuxeo->> Nuxeo: Verify token
Nuxeo->> Nuxeo: Execute command
Nuxeo->> Drive: Result
end
-->

The token is stored inside the user profile Nuxeo Drive database, we recommend that you encrypt UserProfile with the OS mechanism.

## File IO

Nuxeo Drive will access the following folders : 

- `.nuxeo-drive` folder inside user profile
- `Nuxeo Drive` folder or the root folder for synchronization
- `Nuxeo Drive application` folder for the autoupdate mechanism

## Network IO

Nuxeo Drive use only HTTP(S) connection and doesn't bind any sockets.

The auto-update module initiate connection to the update website *(community.nuxeo.com by default)* at regular interval specified in the client configuration

Each Drive engine initiate HTTP connection to your Nuxeo Server based on the URL you provided, so if you mapped with SSL the connection will be secured.

## Required privileges

The autolock feature use the `SE_DEBUG_PRIVILEGE` to list every processus for the current user and their opened handlers.

The Drive process runs under user rights, so it is bound to the same restrictions on the OS and filesystem

