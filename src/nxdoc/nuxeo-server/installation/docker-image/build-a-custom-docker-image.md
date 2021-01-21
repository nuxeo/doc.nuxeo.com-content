---
title: Build a Custom Docker Image
review:
  date: '2021-01-21'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to build a custom Docker image.
tree_item_index: 100
---

To build an application from Nuxeo, most of the time, you will need to customize the Nuxeo Docker Image. Let's see how you can do this.

## Installing Nuxeo Packages

We provide a utility script to install remote Nuxeo packages from [Nuxeo Connect](https://connect.nuxeo.com/) and local Nuxeo packages when building an image from the Nuxeo image:

For instance, you can use this script in the following `Dockerfile`:

```Dockerfile
FROM docker.packages.nuxeo.com/nuxeo/nuxeo

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
FROM docker.packages.nuxeo.com/nuxeo/nuxeo

COPY /path/to/my-configuration.properties /etc/nuxeo/conf.d/my-configuration.properties
```

## Installing FFmpeg

As it contains some non-free codecs, FFmpeg isn't part of the Nuxeo image. However, you can build a custom Docker image, based on the Nuxeo one, including the `ffmpeg` package provided by [RPM Fusion](https://rpmfusion.org/), see the `Dockerfile` sample  below. The resulting `ffmpeg` binary embeds all the codecs required for Nuxeo video conversions.

```Dockerfile
FROM docker.packages.nuxeo.com/nuxeo/nuxeo

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
