---
title: Nuxeo Frame.io Connector
description: 'The Nuxeo Frame.io connector allows users to improve their capabilities of syncing and collaborating on content from/to Adobe Premiere and other video editing tools through Frame.io.'
review:
    date: '2021-09-14'
    status: ok
    comment: ''
labels:
    - Frame.io
    - Connector
toc: true
tree_item_index: 1710
---

{{! excerpt}}
The Nuxeo Frame.io connector allows users to improve their capabilities of syncing and collaborating on content from/to Adobe Premiere, and other video editing tools, through Frame.io.
{{! /excerpt}}

It enables you to store master files in Nuxeo, but collaborate on lower resolution conversions in Frame.io. You can therefore do all the review work in Frame.io and once you are finished, export your asset to Nuxeo. It will import the Master file along with its Frame.io metadata, comments and annotations.

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

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-create-project.png
    name: Screenshot 2021-09-13 at 17.06.47.png
    addins#screenshot#up_to_date
--}}
![frameio-create-project.png](nx_asset://6f0d7adb-cd5e-48c9-a8fd-4443e09f1ba5 ?w=650,border=true)

#### Define an OAuth2 Application

A frame.io administrator user has to create an Oauth2 application. </br>
For this you can:
1. Click on your at the top left, and click on **Apps & Integration**.
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-apps-and-integrations.png
    name: Screenshot 2021-09-13 at 17.07.03.png
    addins#screenshot#up_to_date
  --}}
  ![frameio-apps-and-integrations.png](nx_asset://a5c66480-9be6-4563-a100-aabeae1a1ce9 ?w=650,border=true)
1. From the left menu, select the **Apps** link in the **Developer** category.

  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-apps-developer.png
      name: Screenshot 2021-09-13 at 17.07.25.png
      addins#screenshot#up_to_date
  --}}
  ![frameio-apps-developer.png](nx_asset://d601cc95-ff6d-4ee4-b8d7-12d19683fcba ?border=true)

**In case of blank page:**
1. Log to https://developer.frame.io
1. Navigate to https://developer.frame.io/app/oauth-apps
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-developer.png
      name: Screenshot 2021-09-14 at 16.16.28.png
      addins#screenshot#up_to_date
    --}}
    ![frameio-developer.png](nx_asset://7df055c8-5051-4ffe-8c70-9774086b368f ?w=650,border=true)
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-create-oauth-app.png
      name: Screenshot 2021-09-14 at 16.16.04.png
      addins#screenshot#up_to_date
    --}}
    ![frameio-create-oauth-app.png](nx_asset://60ee2451-ce78-4fd7-a605-eab4b435f42d ?w=350,border=true)
1. Click the **Create an OAuth app** button.
1. Fill in the form:
   - **Name:** Nuxeo
   - **Redirect URL:** your instance:  https://nightly.nuxeo.com/nuxeo/site/oauth2/frameio/callback
   - **Uses PKCE:** false
   - **Scopes:** action.create,action.delete,account.read,comment.read,action.update,action.read,team.read,asset.read,offline
   {{!--     ### nx_asset ###
     path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-edit-oauth-app.png
     name: Screenshot 2021-09-14 at 16.16.51.png
     addins#screenshot#up_to_date
    --}}
    ![frameio-edit-oauth-app.png](nx_asset://8082e52a-7730-415c-9767-4ebdeb81297f ?w=350,border=true)

It should look like this in the end:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-oauth-app-endresult.png
    name: Screenshot 2021-09-13 at 17.10.55.png
    addins#screenshot#up_to_date
--}}
![frameio-oauth-app-endresult.png](nx_asset://01843d62-630e-477d-b385-2b16179b3a6d ?w=350,border=true)

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
/opt/nuxeo/bin/nuxeoctl mp-install nuxeo-frameio
```
1. Start your nuxeo instance:
```
/opt/nuxeo/bin/nuxeoctl start
```

#### Register the Frame.io Provider

Only an administrator user is able to register the Frame.io provider. You only need to do this once to enable your team to bind folders.

1. Log to the Nuxeo UI with Administrative privileges.
1. From the left menu, go to **Administration**, then **Cloud Service**.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-cloud-services.png
      name: Screenshot 2021-09-16 at 11.57.52.png
      addins#screenshot#up_to_date
    --}}
    ![frameio-cloud-services.png](nx_asset://e82a1a6a-13f5-4712-9e89-8a2f096d8ded ?w=650,border=true)
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

  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-edit-provider-entry.png
    name: Screenshot 2021-09-14 at 16.17.22.png
    addins#screenshot#up_to_date
  --}}
  ![frameio-edit-provider-entry.png](nx_asset://cb9cf58b-8e04-4e49-9cc2-cb80acb0b833 ?w=450,border=true)

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
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-bind-to-frameio.png
      name: Screenshot 2021-09-13 at 17.12.44.png
      addins#screenshot#up_to_date
    --}}
    ![frameio-bind-to-frameio.png](nx_asset://0e55f3a5-38c9-4623-92fc-446c4853ce24 ?w=650,border=true)
1. A popup is displayed.</br>
  You can name the custom action that will appear on the frame.io side to push assets to your Nuxeo repository. You can name it **Publish to Nuxeo** as an example.
  {{#> callout type='warning'}}
  If you want to bind another folder, another custom action will be created and you will need to name it differently.
  {{/callout}}
1. Fill the form and click the **Validate** button.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-popup-bind-folder.png
      name: Screenshot 2021-09-13 at 17.13.21.png
      addins#screenshot#up_to_date
    --}}
    ![frameio-popup-bind-folder.png](nx_asset://e993a397-45e3-40f1-b638-babf49729f06 ?w=350,border=true)
1. Take a look at the new tab named **Frame IO**.</br>
    You can now see that your folder is bound with the Frame.io team we selected earlier.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-tab-webui.png
        name: Screenshot 2021-09-13 at 17.13.45.png
        addins#screenshot#up_to_date
    --}}
    ![frameio-tab-webui.png](nx_asset://9d97b65d-fd4e-4827-9d53-211e915692d4 ?w=650,border=true)

### Step 2: Push an asset from Frame IO to Nuxeo

1. Log to Frame IO.
1. Navigate to the shared project.
1. Select a file and push the file to Nuxeo using the custom action.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-publish-to-nuxeo.png
      name: Screenshot 2021-09-13 at 17.14.41.png
      addins#screenshot#up_to_date
    --}}
    ![frameio-publish-to-nuxeo.png](nx_asset://b5a369af-151f-4ef3-a2ec-0da5231ca753 ?w=650,border=true)
1. After a few seconds, the popup displays "Asset pushed to Nuxeo”.</br>
It means that the video is being sent to Nuxeo and is currently being uploaded into your Nuxeo folder. You will receive an email notification when your video is available in your Nuxeo folder.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-popup-success.png
    name: Screenshot 2021-09-13 at 17.15.51.png
    addins#screenshot#up_to_date
--}}
![frameio-popup-success.png](nx_asset://a37a3023-b68c-46c6-b239-d394b9d9207b ?w=350,border=true)

### Step 3: Check the new created document into Nuxeo

From the summary view of the bound folder, check the new created document.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-summary-view-bound-folder.png
    name: Screenshot 2021-09-13 at 17.16.12.png
    addins#screenshot#up_to_date
--}}
![frameio-summary-view-bound-folder.png](nx_asset://1862837c-a505-44fd-b7fc-100dbe1eaac4 ?w=650,border=true)

You are now able to retrieve your video and read the metadata imported from Frame.io in the frame.io document tab.

Note that, if you are sending a new version of the video from Frame.io, we will then increment the version in Nuxeo following your rules.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-tab-new-version.png
    name: Screenshot 2021-09-13 at 17.16.34.png
    addins#screenshot#up_to_date
--}}
![frameio-tab-new-version.png](nx_asset://c87fb71e-aedb-400f-8fa5-496f9d7d9715 ?w=650,border=true)

### Optional: UnBind a Nuxeo Folder with a Frame IO project.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Frame.io/frameio-unbind-nuxeo-folder.png
    name: Screenshot 2021-09-13 at 17.25.10.png
    addins#screenshot#up_to_date
--}}
![frameio-unbind-nuxeo-folder.png](nx_asset://5f5bfc7a-f94d-45e5-ae22-7864bd40b4b0 ?w=650,border=true)

At any given moment, you are able to unbid your folder with your frame.io project.</br>
This will have immediate effect and your frame.io team members won’t be able to send new content to your Nuxeo folder.

{{#> callout type='note'}}
Everything that was previously pushed to your Nuxeo folder will stay in your folder.
{{/callout}}
