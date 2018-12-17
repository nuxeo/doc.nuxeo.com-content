---
title: Nuxeo Zapier Integration
review:
    comment: ''
    date: '2018-12-14'
    status: wip
labels:
    - nuxeo-zapier
    - excerpt
    - multiexcerpt
    - lts2019-wip
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Zapier
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Zapier'
    source_link: /display/USERDOC/Nuxeo+Zapier
---
The [Nuxeo Zapier Integration add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-zapier) is a plugin containing all the components to integrate Nuxeo Platform with the Zapier Platform.

[Zapier](https://zapier.com) provides workflows to automate the use of web applications together.  It is often described as a translator between web APIs.

![]({{file name='dashboard.png'}} ?w=550,border=true)

The [Nuxeo Zapier App](WIP) allows end-user to:

- Authenticate against Nuxeo instances with the add-on setup via OAuth 2
- Configure Nuxeo Platform to subscribe to all Nuxeo Notifications (by default and custom)
- Commands Nuxeo Platform via Nuxeo Automation operations

## Usage

### Nuxeo Setup

- [Download a Nuxeo server](http://www.nuxeo.com/en/downloads)
- Unzip it
- Deploy `nuxeo-zapier-webhook `NUXEO_HOME/nxserver/bundles`

OR

- Install nuxeo-zapier plugin from command line

  - Linux/Mac: 
    - `NUXEO_HOME/bin/nuxeoctl mp-init`
    - `NUXEO_HOME/bin/nuxeoctl mp-install nuxeo-zapier`
    - `NUXEO_HOME/bin/nuxeoctl start`
  - Windows: 
    - `NUXEO_HOME\bin\nuxeoctl.bat mp-init`
    - `NUXEO_HOME\bin\nuxeoctl.bat mp-install nuxeo-zapier`
    - `NUXEO_HOME\bin\nuxeoctl.bat start`

  or Install [the Nuxeo Zapier Integration Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-zapier)

- From your browser, go to `http://localhost:8080/nuxeo`

- Follow Nuxeo Wizard by clicking 'Next' buttons, re-start once completed

- Check Nuxeo correctly re-started `http://localhost:8080/nuxeo`

  - username: Administrator
  - password: Administrator

- Go to Admin Center > Cloud Services > Providers

- Configure 'nuxeo-zapier' entry secret field and set a custom one.

### Zapier Configuration

You have two general ways to use Zapier with Nuxeo:

- By creating triggers

This will let Zapier to subscribe to Nuxeo notifications (default or custom) for receiving Nuxeo events to forward to different other applications (Gmail, Trello, Youtube, Facebook, Dropbox, Slack, Salesforce...)

- By creating actions

This will let you post data and/or execute process on Nuxeo Platform after a trigger from another app  (Gmail, Trello, Youtube, Facebook, Dropbox, Slack, Salesforce...) has been executed.

![]({{file name='steps.png'}} ?w=250,border=true)

#### Authentication

When creating a Nuxeo trigger or action on Zapier, you will need to authenticate via OAuth2.

On this screen, set the URL of your Nuxeo instance with the secret you set (as mentioned above in Nuxeo Setup). You will be invited to type your credentials for authenticating Zapier against Nuxeo.

![]({{file name='auth.png'}} ?w=450,border=true)

#### Triggers

Two Nuxeo triggers are available on the Zapier platform:

- A generic trigger that allows you to select the notification you would like to subscribe to
- A trigger that notify Zapier each time a document is created for given type(s)

![]({{file name='triggers.png'}} ?w=550,border=true)

![]({{file name='genericnotif.png'}} ?w=550,border=true)

![]({{file name='specificnotif.png'}} ?w=550,border=true)

#### Specific Actions

Five Nuxeo specific Actions are available on the Zapier platform:

- An action to attach binary on a given document
- An action to create a document in a given location
- An action to update a given document
- An action to import a document in a given location
- An action to start a worflow on given document(s)

![]({{file name='actions.png'}} ?w=550,border=true)

![]({{file name='wf.png'}} ?w=550,border=true)

#### Generic Automation Action

There is also one generic action to use any Nuxeo Automation operations:

- You select any operations provided by the platform (default or custom)
- Be careful to set inputs if required (this form won't be validated by Zapier) 
- Don't forget to set at least the required parameters

![]({{file name='genericoperation.png'}} ?w=550,border=true)

Regarding the metadata properties if suggested by the form, you can use the following format:

```
dc:title=######
dc:description=######
....
```

Jump lines to set another metadata (and don't forget you can use the dropdown to use the Zapier metadata results in this template).

![]({{file name='operation.png'}} ?w=550,border=true)