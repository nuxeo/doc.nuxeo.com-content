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

[Zapier](https://zapier.com) provides workflows to automate the use of web applications together. It is often described as a translator between Web APIs.

![]({{file name='dashboard.png'}} ?w=450,border=true)

The Nuxeo Zapier integration allows end-user to:

- Authenticate against Nuxeo instances with the add-on setup via OAuth 2
- Configure Nuxeo Platform to subscribe to all Nuxeo Notifications (by default and custom)
- Commands Nuxeo Platform via Nuxeo Automation operations

## Installation

### From Command Line

**Linux/Mac**:

1. ```
    NUXEO_HOME/bin/nuxeoctl mp-init
   ```
1. ```
    NUXEO_HOME/bin/nuxeoctl mp-install nuxeo-zapier
   ```
1. ```
    NUXEO_HOME/bin/nuxeoctl start
   ```

**Windows**:

1. ```
    NUXEO_HOME\bin\nuxeoctl.bat mp-init
   ```
1. ```
    NUXEO_HOME\bin\nuxeoctl.bat mp-install nuxeo-zapier
   ```
1. ```
    NUXEO_HOME\bin\nuxeoctl.bat start
   ```

### From the Marketplace

Install [the Nuxeo Zapier Integration Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-zapier).

## Configuration

### Nuxeo Setup

1. From your browser, go to `http://localhost:8080/nuxeo`

1. Follow Nuxeo Wizard and start your server

1. Check Nuxeo correctly re-started `http://localhost:8080/nuxeo`
  1. username: Administrator
  1. password: Administrator

1. Go to **Administration** > **Cloud Services** > **Providers**

1. Click on the **Add** button at the top right and fill in the popup window to configure **nuxeo-zapier** entry secret field and set a custom one.

## Usage

You have two general ways to use Zapier with Nuxeo:

**By creating triggers**:

This will let Zapier subscribe to Nuxeo notifications (default or custom) for receiving Nuxeo events to forward to different other applications (Gmail, Trello, Youtube, Facebook, Dropbox, Slack, Salesforce...)

**By creating actions**:

This will let you post data and/or execute processes on Nuxeo Platform after a trigger from another app  (Gmail, Trello, Youtube, Facebook, Dropbox, Slack, Salesforce...) has been executed.

![]({{file name='steps.png'}} ?w=250,border=true)

### Authentication

When creating a Nuxeo trigger or action on Zapier, you will need to authenticate via OAuth 2.

On this screen, set the URL of your Nuxeo instance with the secret you set (as mentioned above in the [Nuxeo Setup](#nuxeo-steup) section). You will be invited to type your credentials for authenticating Zapier against Nuxeo.

![]({{file name='auth.png'}} ?w=450,border=true)

### Triggers

Two Nuxeo triggers are available on the Zapier platform:

- A generic trigger that allows you to select the notification you would like to subscribe to
- A trigger that notify Zapier each time a document is created for given type(s)

![]({{file name='triggers.png'}} ?w=450,border=true)

![]({{file name='genericnotif.png'}} ?w=450,border=true)

![]({{file name='specificnotif.png'}} ?w=450,border=true)

### Specific Actions

Five Nuxeo specific Actions are available on the Zapier platform:

- Attach binary on a given document
- Create a document in a given location
- Update a given document
- Import a document in a given location
- Start a workflow on given document(s)

![]({{file name='actions.png'}} ?w=450,border=true)

![]({{file name='wf.png'}} ?w=450,border=true)

### Generic Automation Action

There is also one generic action to use any Nuxeo Automation operations:

- You select any operations provided by the platform (default or custom)
- Be careful to set inputs if required (this form won't be validated by Zapier)
- Don't forget to set at least the required parameters

![]({{file name='genericoperation.png'}} ?w=450,border=true)

Regarding the metadata properties if suggested by the form, you can use the following format:

```
dc:title=######
dc:description=######
....
```

Jump lines to set another metadata (and don't forget you can use the dropdown to use the Zapier metadata results in this template).

![]({{file name='operation.png'}} ?w=450,border=true)

<div style="text-align: right">
[**For more information, check the README**&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>](https://raw.githubusercontent.com/nuxeo-sandbox/nuxeo-zapier/master/README.md)
</div>
