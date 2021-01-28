---
title: Build a Custom Docker Image
review:
  date: '2021-01-28'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to build a custom Docker image.
tree_item_index: 100
---

To build an application from Nuxeo, we strongly recommend to customize the Nuxeo Docker Image by building a Docker image from the Nuxeo one. Let's see how you can do this.

## Build a Custom Docker Image From the Nuxeo One

You can simply write a [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) using the Nuxeo image as [parent image](https://docs.docker.com/glossary/#parent_image).
A good practice is to use a [build argument](https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact) before the `FROM` instruction to easily set the version of the Nuxeo parent image, as in the example below. Here, the default value is the `2021` moving tag:

```Dockerfile
ARG NUXEO_VERSION=2021

FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:${NUXEO_VERSION}

# Execute some commands to add layers on top of the parent image
```

Then, the custom image can be built by running the following command in the directory of the `Dockerfile`. In this case, we choose to rely on the 2021.1 version of Nuxeo.

```shell
docker build -t mycompany/myapplication:mytag --build-arg NUXEO_VERSION=2021.1 .
```

To upgrade the custom image to a newer version of Nuxeo, for instance from 2021.1 to 2021.2, you can just rebuild the custom image by updating the `NUXEO_VERSION` build argument:

```shell
docker build -t mycompany/myapplication:mytag --build-arg NUXEO_VERSION=2021.2 .
```

Below, you can find some examples of customization that can be done in such a custom Docker image.

## Installing Nuxeo Packages

We provide a utility script to install remote Nuxeo packages from [Nuxeo Connect](https://connect.nuxeo.com/) and local Nuxeo packages when building an image from the Nuxeo image:

For instance, you can use this script in the following `Dockerfile`:

```Dockerfile
FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:2021

ARG CLID
ARG CONNECT_URL

COPY --chown=900:0 path/to/local-package-nodeps-*.zip $NUXEO_HOME/local-packages/local-package-nodeps.zip
COPY --chown=900:0 path/to/local-package-*.zip $NUXEO_HOME/local-packages/local-package.zip

# Install a local package without its dependencies (`mp-install --nodeps`)
RUN /install-packages.sh --offline $NUXEO_HOME/local-packages/local-package-nodeps.zip
# Install remote packages and a local package with its dependencies
RUN /install-packages.sh --clid ${CLID} --connect-url ${CONNECT_URL} nuxeo-web-ui nuxeo-drive $NUXEO_HOME/local-packages/local-package.zip
RUN rm -rf $NUXEO_HOME/local-packages
```

## Adding Configuration Properties

As described in this [section]({{page page='configuration-parameters-index-nuxeoconf'}}#docker-image) about the `nuxeo.conf` file, the files from the `/etc/nuxeo/conf.d` directory of the Nuxeo image have their properties appended to the final `nuxeo.conf` file used by the server.

If you want to embed some additional configuration properties in your custom image, you can simply copy some properties files to the `/etc/nuxeo/conf.d` directory when building the custom image.

For instance:

```Dockerfile
FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:2021

COPY /path/to/my-configuration.properties /etc/nuxeo/conf.d/my-configuration.properties
```

## Installing FFmpeg

As it contains some non-free codecs, FFmpeg isn't part of the Nuxeo image. However, you can build a custom Docker image, based on the Nuxeo one, including the `ffmpeg` package provided by [RPM Fusion](https://rpmfusion.org/), see the `Dockerfile` sample  below. The resulting `ffmpeg` binary embeds all the codecs required for Nuxeo video conversions.

```Dockerfile
FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:2021

# we need to be root to run yum commands
USER 0
# install RPM Fusion free repository
RUN yum -y localinstall --nogpgcheck https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
# install ffmpeg package
RUN yum -y install ffmpeg
# set back original user
USER 900
```

{{#> callout type='tip' }}
You can use the above method to install any software in the custom image.
{{/callout}}
