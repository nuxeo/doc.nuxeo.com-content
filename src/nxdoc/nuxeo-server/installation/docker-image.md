---
title: Install Nuxeo with the Docker Image
review:
  date: '2023-04-03'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to install the Nuxeo Platform with the Docker image.
tree_item_index: 250
---

## Preamble

This page explains how to install the Nuxeo server with the base Nuxeo Docker image. Yet, to build an application from Nuxeo, most of the time, you will need to customize this image and build your own. For this purpose, we strongly recommend to use an immutable image by [building a custom Docker image]({{page page='build-a-custom-docker-image'}}) from the Nuxeo one.

{{#> callout type='info'  heading='Hyland University'}}
Watch the related course on Hyland University:</br>
[Nuxeo Platform Quickstart](https://university.hyland.com/courses/e4113)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_quickstart.png
    name: university_quickstart.png
    server#screenshot#up_to_date
--}}
![university_quickstart.png](/nx_assets/2e9054c7-c6f3-4d2b-ae10-6221e17b3be8.png ?w=450,border=true)
{{/callout}}

## Requirements

{{{multiexcerpt 'lts2023-docker-prerequisites' space='nxdoc' page='generic-multi-excerpts'}}}

## Architectures

The Nuxeo 2023 Docker image, `docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023`, supports multiple platforms: it contains variants for the `amd64` (`x86`) and `arm64v8` architectures.

When pulling this image, Docker automatically selects the variant that matches your OS and architecture. For instance, if you're running on:

- Linux (AMD64), you'll get the `amd64` variant.
- Apple Silicon M1 (ARM64), you'll get the `arm64` variant.

**The `arm64` variant doesn't include the LibreOffice converter**. Unfortunately, there is currently no LibreOffice RPM package available in a recent version for Rocky Linux (the base OS) in the `arm64` architecture. Consequently:

{{#> callout type='warning' }}
The `arm64` variant of the Nuxeo 2023 Docker image is not production-ready. It is for development purpose only. When running `docker pull docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023` or `docker run docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023`, if you're running on an ARM64 architecture (typically Apple Silicon M1), the pulled Docker image doesn't include LibreOffice. Thus, the conversion features relying on LibreOffice won't be available, typically converting Office documents to PDF.
{{/callout}}

{{#> callout type='info' }}
You can force the target platform when pulling or running the Docker image with the `--platform` option, for instance to pull the `amd64` variant: `docker pull docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023 --platform=linux/amd64`
{{/callout}}

## What's in the Nuxeo Image

The Nuxeo Docker image is described by this [Dockerfile](https://github.com/nuxeo/nuxeo/blob/master/docker/Dockerfile).

Based on Rocky Linux 9.2, it includes:

- Azul's [Zulu OpenJDK 17](https://www.azul.com/downloads/?version=java-17-lts&package=jdk#zulu).
- A bare Nuxeo server without any package installed.
- A default embedded database, H2 (only valid for testing purposes).
- An embedded Elasticsearch (only valid for testing purposes too).
- Some basic Open Source converters, e.g.: ImageMagick, LibreOffice.
- A `nuxeo` user with the `900` fixed UID.
- The directories required to have the Nuxeo configuration, data and logs outside of the server directory, with appropriate permissions.
- An entrypoint script to configure the server.
- The default recommended volumes.
- The environment variables required by the server, typically `NUXEO_HOME` and `NUXEO_CONF`.
- The exposed port `8080`.

{{#> callout type='warning' }}
To use the video related features in Nuxeo, such as conversions, storyboarding and metadata extraction, you need to have [FFMpeg](https://ffmpeg.org/) installed in the image. Please read the [FFmpeg]({{page page='build-a-custom-docker-image'}}#installing-ffmpeg) section to understand why it is not included in the Nuxeo image and how to build an image including it.
{{/callout}}

## Running the Image

First, you need to be authenticated in order to pull the Docker image:

```shell
docker login docker-private.packages.nuxeo.com -u <username> -p <token_pass_code>
```

To pull the latest tag of the `nuxeo/nuxeo` image from the Docker registry and run a container from it, run:

```shell
docker run --name nuxeo -p 8080:8080 docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023
```

The `2023` tag points to the latest release, for instance [2023.0](https://github.com/nuxeo/nuxeo-lts/releases/tag/v2023.0).

To get the latest build, versioned `2023.x.y`, you can use the `2023.x` tag.

The default command executed when running a container is `nuxeoctl console`. It can be overridden by specifying an argument to `docker run`. For instance, to open a bash shell in the container and automatically remove the container when it exits, just run:

```shell
docker run -it --rm docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023 bash
```

For a production setup and general best practices, please read about [Mounting Data, Log and Temporary Directories as Volumes]({{page page='setup-best-practices'}}#mounting-data-log-and-temporary-directories-as-volumes).

## Configuring the Image at Runtime

Though we encourage to have immutable images [configured at build time]({{page page='build-a-custom-docker-image'}}), in some cases it makes sense to configure a container at runtime. This typically applies to the address and credentials of each back-end store (database, Elasticsearch, S3, etc.) that are specific to a given deployment: development, staging, production, etc.

### Configuration Properties

To add or update some configuration properties when running a container from a Nuxeo image, please read the related section about [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}#docker-image).

### Environment Variables

Currently, these are the environment variables that are taken into account by a Nuxeo image:

- `JAVA_OPTS`
- `NUXEO_CLID`
- `NUXEO_CONNECT_URL`
- `NUXEO_PACKAGES`

#### JAVA_OPTS

Please first have a look at the default [JVM settings]({{page page='setup-best-practices'}}#container-environment) in the Nuxeo Docker image.

The value of `JAVA_OPTS` is appended to the `JAVA_OPTS` property defined in `nuxeo.conf` at startup.

For instance, to make the Nuxeo Launcher display the JVM settings in the console, run:

```shell
docker run --name nuxeo \
  -p 8080:8080 \
  -e JAVA_OPTS=-XshowSettings:vm \
  docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023
```

#### NUXEO_CLID

The value of `NUXEO_CLID` is copied to `/var/lib/nuxeo/instance.clid` at startup. Please check the [Registering your Nuxeo Instance]({{page version='' space='nxdoc' page='registering-your-nuxeo-instance'}}#registering-offline-using-nuxeoctl) documentation page to create a valid CLID.

For instance, to run a container with a registered Nuxeo instance:

```shell
docker run --name nuxeo \
  -p 8080:8080 \
  -e NUXEO_CLID=<NUXEO_CLID> \
  docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023
```

#### NUXEO_CONNECT_URL

`NUXEO_CONNECT_URL` allows to override the default Connect URL at startup.

For instance, to run a container with another Connect URL than the default one:

```shell
docker run --name nuxeo \
  -p 8080:8080 \
  -e NUXEO_CONNECT_URL=<NUXEO_CONNECT_URL> \
  docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023
```

#### NUXEO_PACKAGES

`NUXEO_PACKAGES` allows to define a space separated list of Nuxeo packages to install at startup.

For instance, to run a container with the `nuxeo-web-ui` and `nuxeo-drive` packages installed:

```shell
docker run --name nuxeo \
  -p 8080:8080 \
  -e NUXEO_CLID=<NUXEO_CLID> \
  -e NUXEO_PACKAGES="nuxeo-web-ui nuxeo-drive" \
  docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023
```

#### NUXEO_DEV

Setting `NUXEO_DEV=true` allows to run the Nuxeo image in development mode, meaning:

1. Enable the following configuration properties, see the [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) page for more details:

  ```properties
  org.nuxeo.dev=true
  org.nuxeo.rest.stack.enable=true
  # for hot reload
  nuxeo.server.sdk=true
  nuxeo.server.sdkInstallReloadTimer=true
  ```

1. Override the default command executed when running a container, allowing to execute some `nuxeoctl` commands inside the container without killing it. This way, you can for instance:

    - Copy some JAR files to the `nxserver/bundles` directory of the server and restart it with `nuxeoctl restart`:

    ```shell
    docker run --name nuxeo \
      -p 8080:8080 \
      -e NUXEO_DEV=true \
      docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023

    docker ps
    CONTAINER ID   IMAGE
    0eee2751d09d   docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023

    docker exec 0eee2751d09d nuxeoctl restart
    ```

    - Register your instance with `nuxeoctl register`.
    - Use hot reload with the [Nuxeo Dev Tools Extension]({{page page='nuxeo-dev-tools-extension'}}).
    - Use hot reload with [Nuxeo CLI]({{page page='nuxeo-cli'}}).

1. Activate debugging for the `nuxeoctl mp-install` command run when installing Nuxeo packages with [`NUXEO_PACKAGES`](#nuxeo_packages).

### Shell Scripts

To run some shell scripts when starting a container from a Nuxeo image, you can add
`*.sh` files in the `/docker-entrypoint-initnuxeo.d` directory of the image.

They will be alphabetically sorted and executed at the very end of the `ENTRYPOINT`, after handling the environment variables. Thus, if you run a container by passing the `NUXEO_CLID` environment variable, invoking `nuxeoctl` in such a shell script will work as being registered.
