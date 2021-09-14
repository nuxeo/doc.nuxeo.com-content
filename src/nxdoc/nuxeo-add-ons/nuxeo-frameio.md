---
title: Nuxeo Frame.io Connector
description: 'Nuxeo Frame.io Connector enables you to...'
review:
    date: '2021-09-14'
    status: ok
    comment: ''
labels:
    - Frame.io
    - Connector
toc: true
tree_item_index: 1650
---

This page will help you to:
- Configure the Frame.io account.
- Deploy and configure the Nuxeo Frame IO addon.
- Test the addon.

## Installation

### Frame.io Side

#### Registration

1. You first need to register a [Frame IO account or connect to your account](https://www.frame.io).
1. Create a team/verify that all users within your team have the right access.
1. Add a new project and upload some documents.

SCREENSHOT

#### Define an OAuth2 Application

A frame.io administrator user has to create an Oauth2 application. </br>
For this you can:
1. Click on your at the top left, and click on **Apps & Integration**.

SCREENSHOT

1. From the left menu, select the **Apps** link in the **Developer** category.

SCREENSHOT

**In case of blank page:**
1. Log to https://developer.frame.io
1. Navigate to https://developer.frame.io/app/oauth-apps
SCREENSHOT
1. Click the **Create an OAuth app** button.
1. Fill the form:
   1. **Name:** Nuxeo
   1. **Redirect URL:** your instance:  https://nightly.nuxeo.com/nuxeo/site/oauth2/frameio/callback
   1. **Uses PKCE:** false
   1. **Scopes:** action.create,action.delete,account.read,comment.read,action.update,action.read,team.read,asset.read,offline
   SCREENSHOT

It should look like this in the end:
SCREENSHOT   

{{#> callout type='warning'}}
You need to Copy the client id and secret because we will need them at a later stage.
{{/callout}}

### Nuxeo Side

#### Prerequisites

Your Nuxeo instance must be live.</br>
As an example: https://nightly.nuxeo.com/nuxeo

The URL should match the previously created OAuth 2 app redirect URL on the Frame IO side!

#### Addon Deployment

1. Stop your nuxeo instance:
```
/opt/nuxeo/bin/nuxeoctl stop
```
1. Install the Nuxeo addon as usual:
```
/opt/nuxeo/bin/nuxeoctl mp-install nuxeo-frame-io-marketplace-10.10-SNAPSHOT.zip
```
1. Start your nuxeo instance:
```
/opt/nuxeo/bin/nuxeoctl start
```

#### Register the Frame.io Provider

Only an administrator user is able to register the Frame.io provider. You only need to do this once to enable your team to bind folders.

1. Log to the Nuxeo UI with Administrative privileges.
1. From the left menu, go to **Administration**, then **Cloud Service**.
Screenshot
1. Add a new provider.

The following form will be prefilled for you, you only need to add the Client ID and Client Secret, enable the provider and enable the service.

Fill the form:
  - **Service name**: frameio
  - **Description**: Frame IO Provider
  - **Client ID**: paste from Frame IO Oauth2 application
  - **Client Secret**: paste from Frame IO Oauth2 application
  - **Authorization Server URL**: https://applications.frame.io/oauth2/auth
  - **Token Server URL**: https://applications.frame.io/oauth2/token
  - **User Authorization URL**: <empty>
  - **Scopes**: action.create,action.delete,account.read,comment.read,action.update,action.read,team.read,asset.read,offline

  Screenshot

Your team will now be ready to bind folders with their Frame.io projects.

## Use Case

### Prerequisites

The user must have:
- A Frame.io account
- Rights access to the Frame.io project
- A Nuxeo account.

### Step 1: Bind a Nuxeo Folder with a Frame.io project.

1. Log to Nuxeo.
1. Create a new Folder or go to an existing one.
1. From the summary view, click to the **Bind to Frame IO** available on the action menu.
SCREENSHOT
1. A popup is displayed.</br>
  You can name the custom action that will appear on the frame.io side to push assets to your Nuxeo repository. You can name it **Publish to Nuxeo** as an example.
  {{#> callout type='warning'}}
  If you want to bind another folder, another custom action will be created and you will need to name it differently.
  {{/callout}}
1. Fill the form and click the **Validate** button.
  SCREENSHOT
1. Take a look at the new tab named **Frame IO**.</br>
    You can now see that your folder is bound with the Frame.io team we selected earlier.
    SCREENSHOT

### Step 2: Push an asset from Frame IO to Nuxeo

1. Log to Frame IO.
1. Navigate to the shared project.
1. Select a file and push the file to Nuxeo using the custom action.
  SCREENSHOT
1. After a few seconds, the popup displays "Asset pushed to Nuxeo”.</br>
It means that the video is being sent to Nuxeo and is currently being uploaded into your Nuxeo folder. You will receive an email notification when your video is available in your Nuxeo folder.
  SCREENSHOT

### Step 3: Check the new created document into Nuxeo

From the summary view of the bound folder, check the new created document.

SCREENSHOT

You are now able to retrieve your video and read the metadata imported from Frame.io in the frame.io document tab.

Note that, if you are sending a new version of the video from Frame.io, we will then increment the version in Nuxeo following your rules.

SCREENSHOT

### Optional: UnBind a Nuxeo Folder with a Frame IO project.

SCREENSHOT

At any given moment, you are able to unbid your folder with your frame.io project.</br>
This will have immediate effect and your frame.io team members won’t be able to send new content to your Nuxeo folder.

{{#> callout type='note'}}
Everything that was previously pushed to your Nuxeo folder will stay in your folder.
{{/callout}}
