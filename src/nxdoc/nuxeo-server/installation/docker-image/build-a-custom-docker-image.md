---
title: Build a Custom Docker Image
review:
  date: '2026-06-18'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to build a custom Docker image.
tree_item_index: 200
---

To build an application from Nuxeo, we strongly recommend to customize the Nuxeo Docker Image by building a Docker image from the Nuxeo one. Let's see how you can do this.

## Build a Custom Docker Image From the Nuxeo One

You can simply write a [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) using the Nuxeo image as [parent image](https://docs.docker.com/glossary/#parent_image).
A good practice is to use a [build argument](https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact) before the `FROM` instruction to easily set the version of the Nuxeo parent image, as in the example below. Here, the default value is the `2021` moving tag:

```Dockerfile
ARG NUXEO_VERSION=2023

FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:${NUXEO_VERSION}

# Execute some commands to add layers on top of the parent image
```

Then, the custom image can be built by running the following command in the directory of the `Dockerfile`. In this case, we choose to rely on the 2023.0 version of Nuxeo.

```shell
docker build -t mycompany/myapplication:mytag --build-arg NUXEO_VERSION=2023.0 .
```

To upgrade the custom image to a newer version of Nuxeo, for instance from 2023.0 to 2023.1, you can just rebuild the custom image by updating the `NUXEO_VERSION` build argument:

```shell
docker build -t mycompany/myapplication:mytag --build-arg NUXEO_VERSION=2023.1 .
```

Below, you can find some examples of customization that can be done in such a custom Docker image.

## Installing Nuxeo Packages

We provide a utility script to install remote Nuxeo packages from [Nuxeo Connect](https://connect.nuxeo.com/) and local Nuxeo packages when building an image from the Nuxeo image:

For instance, you can use this script in the following `Dockerfile`:

```Dockerfile
FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023

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

As it contains some non-free codecs, FFmpeg isn't part of the Nuxeo image. However, you can build a custom Docker image, based on the Nuxeo one, including the `ffmpeg` package provided by [RPM Fusion](https://rpmfusion.org/). See the `Dockerfile` sample  below. The resulting `ffmpeg` binary embeds all the codecs required for Nuxeo video conversions.

```Dockerfile
FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023

# You must be the root user to run dnf commands
USER 0
# install RPM Fusion free repository
RUN dnf -y install --nogpgcheck https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-9.noarch.rpm
# install ffmpeg package
RUN dnf -y --enablerepo=ol9_codeready_builder install ffmpeg
# set back original user
USER 900
```

{{#> callout type='tip' }}
You can use the above method to install any software in the custom image.
{{/callout}}

## Installing CCExtractor

[CCExtractor](https://ccextractor.org) is used to extract subtitles from videos. As there is no prebuilt RPM available for Oracle Linux 9, it must be compiled from source. Since CCExtractor also depends on [GPAC](https://gpac.io/), which isn't packaged for Oracle Linux 9 either, GPAC must also be built from source.

The recommended approach is a [multi-stage build](https://docs.docker.com/build/building/multi-stage/) using an Oracle Linux 9 image as the builder stage. This avoids any [glibc](https://www.gnu.org/software/libc/) or shared-library compatibility issue, since the build stage uses the same Linux distribution as the final Nuxeo image. The final image only embeds the runtime dependencies and the compiled binaries, keeping its size minimal.

The `Dockerfile` sample below builds CCExtractor with OCR support enabled (via [Tesseract](https://github.com/tesseract-ocr/tesseract) and [Leptonica](http://www.leptonica.org/)), which is the default and recommended configuration:

```Dockerfile
# ------------------------------------------------------------------------
# Build stage: compile GPAC and CCExtractor on Oracle Linux 9
ARG GPAC_VERSION=v2.4.0
ARG CCEXTRACTOR_VERSION=v0.96.6

FROM oraclelinux:9 AS builder

ARG GPAC_VERSION
ARG CCEXTRACTOR_VERSION

# Install build dependencies (EPEL and CodeReady Builder are required for tesseract-devel and leptonica-devel)
RUN dnf -y install oracle-epel-release-el9 \
  && dnf -y --enablerepo=ol9_codeready_builder install \
    autoconf271 \
    autoconf-archive \
    automake \
    clang \
    clang-devel \
    cmake \
    curl \
    freetype-devel \
    gcc \
    gcc-c++ \
    git \
    leptonica-devel \
    libcurl-devel \
    libjpeg-turbo-devel \
    libpng-devel \
    libxml2-devel \
    make \
    openssl-devel \
    pkgconf-pkg-config \
    tesseract-devel \
    zlib-devel \
  && dnf clean all

# Make autoconf 2.71 (required by CCExtractor) the default autoconf in PATH
ENV PATH="/opt/rh/autoconf271/bin:${PATH}"

# Install Rust toolchain (required by CCExtractor)
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs -o /tmp/rustup-init.sh \
  && sh /tmp/rustup-init.sh -y --default-toolchain stable \
  && rm -f /tmp/rustup-init.sh
ENV PATH="/root/.cargo/bin:${PATH}"

# Build and install GPAC library
WORKDIR /tmp
RUN git clone -b ${GPAC_VERSION} --depth 1 https://github.com/gpac/gpac \
  && cd gpac \
  && ./configure --prefix=/usr --libdir=lib64 \
  && make -j$(nproc) lib \
  && make install-lib \
  && ldconfig

# Build CCExtractor using the autotools workflow
RUN git clone -b ${CCEXTRACTOR_VERSION} --depth 1 https://github.com/CCExtractor/ccextractor \
  && cd ccextractor/linux \
  && ./autogen.sh \
  && ./configure \
  && make -j$(nproc)

# ------------------------------------------------------------------------
# Final stage: copy the CCExtractor binary and its runtime dependencies into the Nuxeo image
FROM docker-private.packages.nuxeo.com/nuxeo/nuxeo:2025

# You must be the root user to run dnf commands and to write under /usr/lib64
USER 0

# Install runtime dependencies (libcurl, libpng, libjpeg, openssl, freetype, libxml2 are already provided by the Nuxeo base image)
RUN dnf -y install oracle-epel-release-el9 \
  && dnf -y install tesseract leptonica \
  && dnf clean all

# Copy only the real versioned GPAC shared library from the builder stage (Docker
# COPY follows symlinks, which would otherwise duplicate the library file), then
# recreate the SONAME symlinks (`libgpac.so.<MAJOR>` and `libgpac.so`) and refresh
# the linker cache. The major version is derived at build time so this snippet
# keeps working when GPAC_VERSION (and therefore the .so filename) is overridden.
COPY --from=builder /usr/lib64/libgpac.so.*.*.* /usr/lib64/
RUN set -eux; \
  gpac_real="$(basename "$(ls -1 /usr/lib64/libgpac.so.*.*.* | head -n1)")"; \
  gpac_major="$(echo "${gpac_real}" | sed -E 's/^libgpac\.so\.([0-9]+)\..*/\1/')"; \
  ln -sf "${gpac_real}" "/usr/lib64/libgpac.so.${gpac_major}"; \
  ln -sf "${gpac_real}" /usr/lib64/libgpac.so; \
  ldconfig

# Copy the CCExtractor binary
COPY --from=builder /tmp/ccextractor/linux/ccextractor /usr/local/bin/ccextractor

# Set back the original Nuxeo user
USER 900
```

### Building for Multiple Platforms

The Nuxeo Docker image is published for both `linux/amd64` and `linux/arm64`. Since the `Dockerfile` sample above compiles CCExtractor from source, the resulting binary is automatically built for whichever platform [`docker buildx`](https://docs.docker.com/build/building/multi-platform/) targets. No platform-specific branching is needed in the `Dockerfile`.

For instance, to build a multi-platform image for both `linux/amd64` and `linux/arm64`:

```shell
docker buildx build --platform linux/amd64,linux/arm64 -t mycompany/myapplication:mytag --push .
```

{{#> callout type='note' }}
The CCExtractor version (`v0.96.6`) and the GPAC version (`v2.4.0`) used in the `Dockerfile` sample above are pinned for reproducibility. You can override them at build time using the `CCEXTRACTOR_VERSION` and `GPAC_VERSION` build arguments, for instance:

```shell
docker build --build-arg CCEXTRACTOR_VERSION=v0.96.6 --build-arg GPAC_VERSION=v2.4.0 -t mycompany/myapplication:mytag .
```
{{/callout}}
