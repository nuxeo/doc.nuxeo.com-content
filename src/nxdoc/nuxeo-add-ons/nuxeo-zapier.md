---
title: Nuxeo Zapier Integration
review:
    comment: ''
    date: '2019-03-07'
    status: 'ok'
labels:
    - lts2019-wip
    - vpasquier
    - nuxeo-zapier
    - link-update
    - integration-component
toc: true
tree_item_index: 3000
---

The [Nuxeo Zapier Integration](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-zapier) addon is a plugin containing all the components to integrate Nuxeo Platform with the Zapier Platform.

[Zapier](https://zapier.com) provides workflows to automate the usage of web applications together. It is often described as a translator between Web APIs.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/dashboard.png
    name: dashboard.png
    addins#screenshot#up_to_date
--}}
![dashboard.png](/nx_assets/6c99d9d0-e67f-44a6-beed-72331d90a688.png ?w=450,border=true)

The Nuxeo Zapier integration allows end-user to:

- Authenticate against Nuxeo instances with the add-on setup via OAuth 2
- Configure Nuxeo Platform to subscribe to all Nuxeo Notifications (by default and custom)
- Commands Nuxeo Platform via Nuxeo Automation operations

## Prerequisites

- Make sure to [register to Nuxeo Online Services]({{page version='' space='nxdoc' page='registering-your-nuxeo-instance'}}#registering-online-using-nuxeoctl) using the `nuxeoctl register` command line.

- The `nuxeo-jsf-ui` addon installed on your instance.

## Installation

### From Command Line

**Linux/Mac**:

```
    NUXEO_HOME/bin/nuxeoctl mp-install nuxeo-zapier
```

**Windows**:

```
    NUXEO_HOME\bin\nuxeoctl.bat mp-install nuxeo-zapier
```

### From the Marketplace

Install [the Nuxeo Zapier Integration Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-zapier).

## Configuration

### Nuxeo Setup

1. Start your server, log in as Administrator/Administrator

1. Go to JSF UI using the url `{server:port}/nuxeo/jsf` and go to  **ADMIN** > **Cloud Services** > **Consumers**

1. Click on the **Add** button at the top right and fill in the popup window to configure **nuxeo-zapier**

  - **Name**: as you want
  - **Client ID**: `nuxeo-zapier`
  - **Client Secret**: Add your custom value (to be reused on Zapier's side)
  - **Redirect URIs**: Enter the URL provided by Zapier when configuring you _Zap_ (see [Zapier documentation](https://platform.zapier.com/docs/oauth)).
    - Typically: `https://zapier.com/dashboard/auth/oauth/return/App<YOUR_APP_ID>CLIAPI/`
  - Check the **Auto-grant** box
  - Check the **Activated** box

## Usage

You have two general ways to use Zapier with Nuxeo:

**By creating triggers**:

This will let Zapier subscribe to Nuxeo notifications (default or custom) for receiving Nuxeo events to forward to different other applications (Gmail, Trello, Youtube, Facebook, Dropbox, Slack, Salesforce, etc.)

**By creating actions**:

This will let you post data and/or execute processes on Nuxeo Platform after a trigger from another app  (Gmail, Trello, Youtube, Facebook, Dropbox, Slack, Salesforce...) has been executed.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/steps.png
    name: steps.png
    addins#screenshot#up_to_date
--}}
![steps.png](/nx_assets/e1d9ed3d-e4d3-4aae-94cf-8c3833dceba4.png ?w=250,border=true)

### Authentication

When creating a Nuxeo trigger or action on Zapier, you will need to authenticate via OAuth 2.

On this screen, set the URL of your Nuxeo instance with the secret you set (as mentioned above in the [Nuxeo Setup](#nuxeo-setup) section). You will be invited to type your credentials for authenticating Zapier against Nuxeo.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/auth.png
    name: auth.png
    addins#screenshot#up_to_date
--}}
![auth.png](/nx_assets/3ed8222f-f466-4549-bbf9-3939d084cac5.png ?w=450,border=true)

### Triggers

Two Nuxeo triggers are available on the Zapier platform:

- A generic trigger that allows you to select the notification you would like to subscribe to.
- A trigger that notifies Zapier each time a document is created for a given type(s).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/triggers.png
    name: triggers.png
    addins#screenshot#up_to_date
--}}
![triggers.png](/nx_assets/28b16bc4-9634-4c6c-902a-49bcd4b76c06.png ?w=450,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/genericnotif.png
    name: genericnotif.png
    addins#screenshot#up_to_date
--}}
![genericnotif.png](/nx_assets/db624111-6258-4598-9ef7-57b99702eef9.png ?w=450,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/specificnotif.png
    name: specificnotif.png
    addins#screenshot#up_to_date
--}}
![specificnotif.png](/nx_assets/aa6a5786-772d-4a6c-8d9d-36290ffac84b.png ?w=450,border=true)

### Specific Actions

Five Nuxeo specific Actions are available on the Zapier platform:

- Attach binary on a given document
- Create a document in a given location
- Update a given document
- Import a document in a given location
- Start a workflow on the given document(s)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/actions.png
    name: actions.png
    addins#screenshot#up_to_date
--}}
![actions.png](/nx_assets/31d38177-d6a7-4331-95cd-dadd35b5e920.png ?w=450,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/wf.png
    name: wf.png
    addins#screenshot#up_to_date
--}}
![wf.png](/nx_assets/8c089b3a-3e20-40db-abea-49314f502c28.png ?w=450,border=true)

### Generic Automation Action

There is also one generic action to use any Nuxeo Automation operations:

- You select any operations provided by the platform (default or custom)
- Be careful to set inputs if required (Zapier won't validate this form)
- Don't forget to set at least the required parameters

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/genericoperation.png
    name: genericoperation.png
    addins#screenshot#up_to_date
--}}
![genericoperation.png](/nx_assets/89568537-faa0-43e0-9a81-85bf0057b6a4.png ?w=450,border=true)

Regarding the metadata properties if suggested by the form, you can use the following format:

```
dc:title=######
dc:description=######
....
```

Jump lines to set another metadata (and don't forget you can use the dropdown to use the Zapier metadata results in this template).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Zapier/operation.png
    name: operation.png
    addins#screenshot#up_to_date
--}}
![operation.png](/nx_assets/87d8afa6-8554-4791-95b0-ab768c640884.png ?w=450,border=true)

<div style="text-align: right">
[**For more information, check the README**&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>](https://raw.githubusercontent.com/nuxeo-sandbox/nuxeo-zapier/master/README.md)
</div>
