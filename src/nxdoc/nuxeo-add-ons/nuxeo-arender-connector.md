---
title: Nuxeo Annotations with ARender
description: 'The Nuxeo Annotations with ARender addon allows users to preview and annotate any content stored in the Nuxeo repository: Office documents, PDF, images, videos with the ARender previewer, from Arondor.'
review:
    comment: ''
    date: '2019-01-21'
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

To ease deployment, Nuxeo provides two Docker images, one for each piece of ARender software: `arender-previewer` and `arender-rendition`.

{{#> callout type='warning' heading='Private addon'}}
You should contact your Nuxeo Administrator or your Nuxeo sales representative to get access to these images.
{{/callout}}

{{#> callout type='info' heading='Docker Images Version'}}
Docker images have the same version than marketplace packages.
You should always use same version for docker images and marketplace package.
{{/callout}}

You can also install both pieces directly on dedicated hosts by following [ARender Documentation](https://arender.io/doc/current4/documentation/setup/index-setup.html). Don't forget to take the ARender previewer in order to leverage the connector between ARender previewer and Nuxeo.

All communications are made over HTTP, we recommend usage of HTTPS for production. Below are the ports of each piece:
- previewer is reachable on port 8080 when exposed directly by Tomcat, we recommend to setup an Apache or Nginx in front of it
- rendition is reachable on port 8761

Below the needed communication (for firewall rules/docker network setup):
- Nuxeo needs to reach ARender previewer
- ARender previewer needs to reach ARender rendition
- ARender previewer needs to reach Nuxeo

### Embedded Installation - Development

For development purposes, you need to run the Docker image for rendition and bind its port to localhost:
```
docker run -p 8761:8761 -it ARENDER_DOCKER_IMAGE_ID
```
Then you need to install [nuxeo-arender-connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender-connector) marketplace package.

It installs ARender integration inside Nuxeo and ARender previewer inside the Nuxeo's Tomcat.

### Docker Installation - Production

For production, we recommend to deploy each ARender piece as a Docker container.

You can deploy several ARender renditions. Their URL needs to be given to ARender previewer. ARender previewer is responsible for renditions load. ARender renditions don't need to communicate with each other.

Then you can deploy an ARender previewer and give it rendition URLs as the environment variable `renditionHostEnv`.

{{#> callout type='info' heading='ARender previewer behavior'}}
ARender previewer owns in its cache a session corresponding to the t-uple user, document and blob.</br>
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
["https://rendition1:8761", "https://rendition2:8761"]
```

## Configuration

### Nuxeo Configuration

The ARender connector relies on the JWT authentication. You need to define a secret `nuxeo.jwt.secret` in your `nuxeo.conf` to enable it.

If your ARender rendition server doesn't run on same host than Nuxeo's Tomcat, you can change the ARender rendition URL by setting `arender.server.rendition.hosts` in your `nuxeo.conf` (default value is `http://localhost:8761`).

You can change ARender previewer URL used by Nuxeo to open ARender session by setting `arender.server.previewer.host` in your `nuxeo.conf` (default value if `http://localhost:8080`).

### ARender Previewer Configuration

For an on-host installation, you can follow the [ARender Documentation](https://arender.io/doc/current4/documentation/setup/presentation/configuration.html).

For an embedded installation, you can modify the `arender-hmi.properties` files under `NUXEO_HOME/nxserver/config/ARenderConfiguration` folder.

For a Docker installation, you can extends our image and copy your properties file to `/docker-entrypoint-init.d/arender.properties`:
```
FROM dockerin-arender.nuxeo.com:443/arender-previewer:MP_VERSION

COPY arender.properties /docker-entrypoint-init.d/arender.properties
```

You can also modify the `arender-hmi.properties` that is deployed inside the `/ARenderConfiguration` in the previewer Docker container.

Editing these configuration files helps you to tailor the ARender interface to fit specific UI and UX needs. Please follow the [ARender configuration guide](https://arender.io/doc/current4/documentation/hmi/index-hmi.html).

You can for example:

- Add and/or remove buttons from the ARender interface
- Modify ARender behaviors on specific user actions (like validating a comment when the user clicks on "Enter")
- Reference a new theme (by creating your custom CSS file)

![]({{file name='arender-customized.png'}} ?w=350)

## Functional Overview

Once the ARender addon is properly installed and configured a new **Annotations** pill is available on each document with the picture or video facet:

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
1. Click on the Save button icon in the top bar.</br>
    Your annotation is displayed.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-sticky-note-displayed
        name: annotation-sticky-note-displayed.png
        addins#screenshot#up_to_date
    --}}
    ![annotation-sticky-note-displayed](nx_asset://9800ba81-ea6f-469d-8861-48ec1a216e2b ?w=350,border=true)

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

### Compare Files

{{#> callout type='note' heading='Limitations'}}
This feature only allows you to compare two text files.
{{/callout}}

The ARender addon allows you to compare two files belonging to two different versions. By default, ARender compares the binary stored in the `file:content` property corresponding to the main file. You can access this feature from the [Compare Versions Screen]({{page version='' space='userdoc' page='compare'}}) by clicking on the **eye button**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/compare-arender
    name: compare_arender.png
    addins#screenshot#up_to_date
--}}
![compare-arender](nx_asset://fb24e3d8-b22d-45ca-820e-f8b1bb8b17a4 ?w=650,border=true)

It opens a new window with the two documents, highlighting what was deleted, modified and added.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/compare_arender_2
    name: compare_arender_2.png
    addins#screenshot#up_to_date
--}}
![compare_arender_2](nx_asset://7be7595f-3e11-468a-a004-1700e45e3ab3 ?w=650,border=true)

Finally, you can see the annotations linked to each version on the same screen, and even annotate one file from this view.

## Going Further

The connector can be customized in many different ways, for example if you want to have the possibility to watermark a document with specific stamps, if you want some actions/tools displayed and/or hidden in the top bar of the annotation screen, etc.
