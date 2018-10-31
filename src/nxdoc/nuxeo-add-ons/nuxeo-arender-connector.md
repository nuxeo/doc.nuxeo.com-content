---
title: Nuxeo Annotations with ARender
description: 'The Nuxeo Annotations with ARender addon allows users to preview and annotate any content stored in the Nuxeo repository: Office documents, PDF, images, videos with the ARender previewer, from Arondor.'
review:
    comment: ''
    date: '2019-07-18'
    status: ok
labels:
    - arender-connector
toc: true
tree_item_index: 1050

---
{{! excerpt}}
The Nuxeo Annotations with ARender addon allows users to preview and annotate any document stored in the Nuxeo repository: Office documents, PDF, images, videos with the ARender previewer, from Arondor.
{{! /excerpt}}

ARender software is made of two pieces:
- Previewer
- Rendition

ARender rendition server needs to be installed on a dedicated host.

ARender previewer is extended by Nuxeo to integrate the ARender Previewer with the Nuxeo REST API, it corresponds to [nuxeo-arender-connector-hmi](https://github.com/nuxeo/nuxeo-arender-connector/tree/master/nuxeo-arender-connector-hmi) in ARender Connector. It is built as a war file to deploy.

Here's a chart describing actions during first connection to ARender:
![]({{file name='arender-flow.png'}} ?w=650,border=true)

## Installation

There're several ways to install ARender software.

You can install both piece directly on dedicated hosts by following [ARender Documentation](https://arender.io/doc/current/documentation/setup/index-setup.html). Don't forget to take ARender previewer on our [Nexus](https://mavenpriv.nuxeo.com/nexus/#nexus-search;quick~nuxeo-arender-connector-hmi) in order to leverage the connector between ARender previewer and Nuxeo.

To ease deployment, Nuxeo provides two Docker images, one for each piece of ARender software:
- `dockerin-arender.nuxeo.com:443/arender-previewer`
- `dockerin-arender.nuxeo.com:443/arender-rendition`

{{#> callout type='info' heading='Docker Images Version'}}
Docker images have the same version than marketplace packages.
You should always use same version for docker images and marketplace package.
{{/callout}}

All communications are made over HTTP, we recommend usage of HTTPS for production. Below are the ports of each piece:
- previewer is reachable on port 8080 when exposed directly by Tomcat, we recommend to setup an Apache or Nginx in front of it
- rendition is reachable on port 1990

Below the needed communication (for firewall rules/docker network setup):
- Nuxeo needs to reach ARender previewer
- ARender previewer needs to reach ARender rendition
- ARender previewer needs to reach Nuxeo


{{#> callout type='warning' heading='Prerequisite'}}
To fetch images, you need to be authenticated to docker repository:
```
docker login dockerin-arender.nuxeo.com:443
```
{{/callout}}


### Embedded Installation - Development

For development purposes, you need to run the Docker image for rendition and bind its port to localhost:
```
docker run -p 1990:1990 -it -d dockerin-arender.nuxeo.com:443/arender-rendition:MP_VERSION
```
Where `MP_VERSION` is the marketplace package version installed on Nuxeo.

Then you need to install [nuxeo-arender-connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender-connector) marketplace package.

It installs ARender integration inside Nuxeo and ARender previewer inside the Nuxeo's Tomcat.

If your ARender rendition server doesn't run on same host than Nuxeo's Tomcat, you can change the ARender rendition URL by setting `arender.server.rendition.hosts` in your `nuxeo.conf` (default value is `http://localhost:1990`).

### Docker Installation - Production

For production, we recommend to deploy each ARender piece as a Docker container.

You can deploy several ARender renditions. Their URL needs to be given to ARender previewer. ARender previewer is responsible for renditions load. ARender renditions don't need to communicate with each other.

Then you can deploy an ARender previewer and give it rendition URLs as the environment variable `renditionHostEnv`.

{{#> callout type='info' heading='ARender previewer behavior'}}
ARender previewer owns in its cache a session corresponding to the t-uple user, document and blob.

You'll need to ask for a new session if the previewer crashes (action 1. on [chart](#functional-flow)).
{{/callout}}

{{#> callout type='warning' heading='ARender previewer clustering'}}
You can't currently have a cluster of ARender previewer because previewers don't share sessions.
{{/callout}}

If you need to change this settings while ARender previewer is running, you have a REST API on ARender previewer.

To get current setting:
```
GET /arendergwt/weather?format=json
```
To update it:
```
POST /arendergwt/weather?format=json
["https://rendition1:1990", "https://rendition2:1990"]
```

## Configuration

### Nuxeo Configuration

You can change ARender previewer URL used by Nuxeo to open ARender session by setting `arender.server.previewer.host` in your `nuxeo.conf` (default value if `http://localhost:8080`).

### ARender Previewer Configuration

For a on-host installation, you can follow [ARender Documentation](https://arender.io/doc/current/documentation/setup/presentation/configuration.html).

For an embedded installation, you can place your properties files under `NUXEO_HOME/nxserver/config/ARenderConfiguration` folder.

For a Docker installation, you can extends our image and copy your properties file to `/docker-entrypoint-init.d/arender.properties`:

```
FROM dockerin-arender.nuxeo.com:443/arender-previewer:MP_VERSION

COPY arender.properties /docker-entrypoint-init.d/arender.properties
```

Editing the `arender.properties` file helps you to tailor the Arender interface to fit specific UI and UX needs. Please follow the [ARender configuration guide](https://arender.io/doc/current/documentation/hmi/index-hmi.html).

You can for example:

- Add, remove, move buttons from the ARender interface
- Modify ARender behaviors on specific user actions (like validating a comment when the user clicks on "Enter" )
- Reference a new theme (by creating your custom CSS file)

![]({{file name='arender-customized.png'}} ?w=350)

## Functional Overview

Once the ARender addon is properly installed and configured a new **Annotations** pill is available on each document **which have the Picture or Video facet**:

![]({{file name='annotation-tab.png'}} ?w=350)

### Add a New Annotation

You can access the annotations by hovering the dedicated button ![]({{file name='annotation-icon.png'}} ?w=20), a sub menu appears:

![]({{file name='annotation-submenu.png'}} ?w=350,border=true)

Different types of annotations are available:

- A sticky note
- A text box
- Highlight text
- Draw different shapes (arrow, circle, polygon, etc.)
- Show/Hide annotations

**To add an annotation:**

1. Go to the annotations pill
1. Click on an annotation type, like the sticky note.</br>
    An empty box is displayed on your document.
    ![]({{file name='annotation-sticky-note-empty.png'}} ?w=250,border=true)
1. Write your annotation.
1. Click on the Save button ICON in the top bar.
    Your annotation is displayed.
    ![]({{file name='annotation-sticky-note-displayed.png'}} ?w=350,border=true)

### Access to the Annotations

Two views are available at the top right:
![]({{file name='annotation-views.png'}} ?w=150)
- ![]({{file name='annotation-document-pages-thumbs.png'}} ?w=20): The documents pages thumbs, opened by default
- ![]({{file name='annotation-browser-navigation.png'}} ?w=20): The annotation browser

From the annotation browser, you can see the list of all the annotations done on the document you are viewing, grouped by document pages.

You can search and filter any annotation by expending the following item:

![]({{file name='annotation-search.png'}} ?w=350,border=true)

You can also manage annotations from this view:

- Leave a comment
- Reply to a comment
- Delete a comment
- Accept, reject, cancelled, completed a comment

![]({{file name='annotation-comment-replied.png'}} ?w=350,border=true)

## Going Further

The connector can be customized in many different ways, for example if you want to have the possibility to watermark a document with specific stamps, if you want some actions/tools displayed and/or hidden in the top bar of the annotation screen, etc.
