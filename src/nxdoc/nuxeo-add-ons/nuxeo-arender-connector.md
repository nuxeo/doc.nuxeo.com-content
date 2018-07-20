---
title: Nuxeo ARender Connector
review:
    comment: ''
    date: '2019-07-18'
    status: ok
labels:
    - arender-connector
toc: true
tree_item_index: 1050

---

ARender software is made of two pieces:

- previewer
- rendition

ARender rendition server needs to be installed on a dedicated host.

ARender previewer is extended by Nuxeo to integrate the ARender Previewer with the Nuxeo REST API, it corresponds to [nuxeo-arender-connector-hmi](https://github.com/nuxeo/nuxeo-arender-connector/tree/master/nuxeo-arender-connector-hmi) in ARender Connector. It is built as a war to deploy.

Here's a chart describing actions during first connection to ARender:

<!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo Arender Connector/ARender starting flow
    name: arender-flow.png
    addons#diagram#up_to_date
-->
{{> anchor 'functional-flow'}}![](NX_ASSET://a7219ae8-866b-47bd-b975-3b45aac2a592 ?border=true)

## Installation

There're several ways to install ARender software.

You can install both piece directly on dedicated hosts by following [ARender Documentation](https://arender.io/doc/current/documentation/setup/index-setup.html). Don't forget to take ARender previewer on our [Nexus](https://mavenpriv.nuxeo.com/nexus/#nexus-search;quick~nuxeo-arender-connector-hmi) in order to leverage the connector between ARender previewer and Nuxeo.

To ease deployment, Nuxeo provides two Docker images, one for each piece of ARender software:
- dockerin-arender.nuxeo.com:443/arender-previewer
- dockerin-arender.nuxeo.com:443/arender-rendition

{{#> callout type='info' heading='Docker Images Version'}}
Docker images have the same version than marketplace packages.

You should always use same version for docker images and marketplace package.
{{/callout}}

All communications are made over HTTP, we recommend usage of HTTPS for production. Below are the ports of each piece:
- previewer is reachable on port 8080 when exposed directly by Tomcat, we recommend to setup an Apache or Nginx in front of it
- rendition is reachable on port 1990

Below the needed communication (for firewall rules / docker network setup):
- Nuxeo needs to reach ARender previewer
- ARender previewer needs to reach ARender rendition
- ARender previewer needs to reach Nuxeo

### Embedded installation - Development

For development purposes, you need to run the Docker image for rendition and bind its port to local host:
```
docker run -p 1990:1990 -it -d dockerin-arender.nuxeo.com:443/arender-rendition:MP_VERSION
```
Where `MP_VERSION` is the marketplace package version installed on Nuxeo.

Then you need to install [nuxeo-arender-connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender-connector) marketplace package.

This will install ARender integration inside Nuxeo and ARender previewer inside the Nuxeo's Tomcat.

If your ARender rendition server doesn't run on same host than Nuxeo's Tomcat, you can change the ARender rendition url by setting `arender.server.rendition.hosts` in your nuxeo.conf (default value is `http://localhost:1990`).

### Docker installation - Production

For production, we recommend to deploy each ARender pieces as a Docker container.

You can deploy several ARender renditions. Their url needs to be given to ARender previewer. ARender previewer is responsible of renditions load. ARender renditions don't need to communicate between each others.

Then you can deploy an ARender previewer and give it rendition urls as the environment variable `renditionHostEnv`.

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

You can change ARender previewer url used by Nuxeo to open ARender session by setting `arender.server.previewer.host` in your nuxeo.conf (default value if `http://localhost:8080`).

### ARender Previewer Configuration

For a on-host installation, you can follow [ARender Documentation](https://arender.io/doc/current/documentation/setup/presentation/configuration.html).

For an embedded installation, you can place your properties files under `NUXEO_HOME/nxserver/config/ARenderConfiguration` folder.

For a Docker installation, you can extends our image and copy your properties file to `/docker-entrypoint-init.d/arender.properties`:
```
FROM dockerin-arender.nuxeo.com:443/arender-previewer:MP_VERSION

COPY arender.properties /docker-entrypoint-init.d/arender.properties
```
