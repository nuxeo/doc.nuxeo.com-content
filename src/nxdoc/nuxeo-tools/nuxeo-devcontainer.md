---
title: Nuxeo DevContainer
description: "The Nuxeo DevContainer allows you to bootstrap, develop and deploy your Nuxeo Custom Application in a containerized environment."
review:
    date: '2021-08-26'
    status: ok
    comment: ''
labels:
    - lts2021-ok
tree_item_index: 300
toc: true
---

{{! excerpt}}
The Nuxeo Development Container allows you to speed up your development flow by bootstrapping, developing and deploying your Nuxeo Custom Application in a containerized environment and continuing using your preferred IDE.
{{! /excerpt}}

{{#> callout type='warning'}}
This new feature may be subject to some minor issues, please report them to the support team.
{{/callout}}

## Requirements

You need to install the following tools:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Code Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

Before going further, you need to have basic knowledge of the following tools and be comfortable on how to bootstrap a Nuxeo Custom Application:

- [Nuxeo CLI]({{page page='nuxeo-cli'}})
- [Nuxeo Getting Started]({{page page='getting-sarted'}})
- [Visual Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers#_getting-started)
- [devcontainer.json Reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)

Nuxeo Development Container bootstrap is available in two ways:

- Using an online hosted script that will bootstrap a new project from scratch; with everything you need to start working on a custom plugin for Nuxeo.
- Using the `devcontainer` Nuxeo CLI generator.

We recommend using the online hosted script.

- **When using the online hosted script:**

  {{#> callout type='warning'}}
  For now, the bootstrap script is only designed to work on *NIX system*, but it will be adapted to Windows.
  {{/callout}}

  The first step is to run our new bootstrap shell script that can create a custom project using Docker; without any other tool installed.

  ```shell
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nuxeo-sandbox/studio-dev-env/master/start-bootstrap.sh) my-first-project"
  ```

- **When using the Nuxeo CLI generator:**

  When Nuxeo CLI is locally installed:

  ```shell
  nuxeo b operation package docker devcontainer
  ```

You will be asked for the required credentials for authenticated access to Nuxeo Online Service and packages.nuxeo.com (Nuxeo artifacts repository), the Studio project you want to bind, as well as a CLID for registering the Nuxeo instance that will be used.

{{#> callout type='info'}}
- NOS Credentials: [How to create a token](https://doc.nuxeo.com/studio/token-management)
- packages.nuxeo.com Credentials: [Nexus User Token](https://help.sonatype.com/iqserver/automating/rest-apis/user-token-rest-api---v2#UserTokenRESTAPI-v2-CreatingaUserToken)
- Nuxeo CLID: [Get Instance CLID](https://connect.nuxeo.com/nuxeo/site/connect/applications)
{{/callout}}

During the generation process, you will be prompted for which version of the Nuxeo Platform you want to create your project for. You can use any version starts from `11.4`, or the `2021.1` version.

The output of this execution, will be in your current working directory:
- new empty custom plugin project `my-first-project`.
- a script to help you start the containerized development environment as a shell: `start-shell.sh`.

The containerized development environment is a Docker image that contains Nuxeo recommended tools:
- Development tooling: Git, NodeJS, NPM, Maven, Docker CLI, Docker Compose, Zulu OpenJDK8, Zulu OpenJDK11 and Nuxeo CLI.
- Third party CLIs: Kafka CLI and Mongo Shell, GCloud SDK, Azure CLI and AWS CLI.

It also adds into the image `tmux` and `ohmyzsh` that you will use for shell interactions.

Using our development container, the authentication for private registries of Maven, NPM and Docker against packages.nuxeo.com will be configured out of the box. It binds the container to your local Docker daemon to allow building and starting other containers from the development environment using the Docker in Docker pattern...

Then, if you use Visual Studio Code as your IDE, you can directly open the project and you will be prompted to start the development environment as a development container. It allows you to open your project inside a container and take advantage of Visual Studio Code's full feature set, plugins, and so on, including an in-container pre-configured shell.

For other IDEs, we recommend you to let the container’s shell (started with `./start-shell.sh` script) open to run the necessary Nuxeo CLI commands described hereafter, or any other tools command.

{{#> callout type='warning'}}
Limitations:

- CLID is required to bootstrap, create a new one associated to your project from the [Nuxeo Online Services - Applications](https://connect.nuxeo.com/nuxeo/site/connect/applications) screen.
- Prompting validation is very basic for now; take care. For instance, there is no check if your credentials have access, or not, to the Studio project you enter.
{{/callout}}

## Usage with Visual Studio Code

Following the previous steps; your project should contain a `.devcontainer` folder. Otherwise, you can bootstrap it using `nuxeo b devcontainer`. Meanwhile, ensure [Visual Studio Code Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) is installed.

### VSCode: Open the devcontainer

Open your project root folder with Visual Code, and you should see a popup at the bottom right saying:</br> "Folder contains a Dev Container configuration file.", click on **Open in Container** button.

Visual Studio Code must restart and launch within the Development Container. More informations: [Visual Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers#_getting-started).

After that step, we assume you execute commands from Visual Code within the integrated terminal.

### VSCode: Build Your Project

Using the integrated terminal, everything has been configured and you only have to execute:

```shell
mvn package
```

## Usage with a Bare Development Container Shell

For the next steps; we assume you are executing the commands within the development environment shell (using `start-shell.sh` script); either from the devcontainer or from the start script.

### Shell: Build Your Project

When building your project, the regular `mvn package` will build as well the Docker Image. It can be disabled by using `-PskipDocker` property.

During the Image build, your package dependencies will be resolved and might require a correct CLID if required dependencies are restricted.

NB: If you are not using the development environment; and your package depends on other restricted Nuxeo packages, you will need to pass NUXEO_CLID (format: NUXEO_CLID=XXXX—XXXX—) as an environment variable to the build command.

```sheel
[NUXEO_CLID=XXXX--XXXX--] mvn package
```

## Deploy your Custom Application Image

The `docker-compose` generator creates a basic Docker Compose description file that starts your custom image and forwards the container’s port 8080 to 8080 on localhost. You can update the `docker-compose` file to start a MongoDB, Elasticsearch, ...

```shell
docker-compose up
```

For a more detailed list of available commands to interact with Docker Compose, see the [Docker Compose CLI Overview](https://docs.docker.com/compose/reference/) page.

{{#> callout type='warning'}}
Limitations:
- For now, the generated `docker-compose.yaml` file is only deploying your custom Docker image. In the future, it will embed external services like MongoDB and Elasticsearch.
- Using VSCode, it is **mandatory** to execute `docker-compose` outside the Development Container in order to properly mount the configuration folder; otherwise your custom configuration parameter won't be taken into account.
- If you are outside development container, or VSCode, you have to update the `docker-compose.yaml` file to append a correct NUXEO_CLID.
{{/callout}}

### Configure Nuxeo using Docker Compose

The default `docker-compose.yaml` file is mounting a `conf.d` folder within the Custom Docker image with a few sampled configuration files. All files listed within that folder are appended to the final configuration file.

Default `docker-compose.yaml` file:

```yaml
version: "3.8"
services:
  nuxeo:
    image: <your-custom-image>:latest
    ports:
      - "8080:8080"
      - "8787:8787"
    environment:
      NUXEO_DEV: "true"
      NUXEO_CLID:
    volumes:
      - ./conf.d:/etc/nuxeo/conf.d
      - data:/var/lib/nuxeo
volumes:
  data: {}
```

Configuration file description:

- `00-docker.conf`: Some JVM tuning to optimize memory usage in a Docker environment.
- `99-debug.conf`: Most used JVM debugging enablement; uncomment the one you want to use.
- `99-mail.conf`: Sample SMTP configuration.

You are free to update, add or remove any configuration file within the `conf.d` folder and modifications will be taken into account after a restart. See [Configuration Parameters Index](#configuration-parameters-index-nuxeoconf) for a detailed list of available configuration parameters.

## Advanced Usage

### Update/Fix Bootstrap or Shell variable Afterwards

If you need to update any value (like using a new CLID); all the secrets are stored in a dotenv file: `.env.nuxeo-cli` in your project root folder. Its content is straightforward and is injected as an environment variable within the development shell.

{{#> callout type='warning'}}
This file MUST not be committed, and must be kept as ignored. When several people are working on the same project; each developer must use his own file.
{{/callout}}

### How to Generate Custom Application Docker Image in a Local Development Environment

Nuxeo CLI is still working as a standalone tool if installed locally.

Note that some updates have been done on the way Studio is bound to your Customer Java plugin. The Studio project is now installed using Project’s package dependency to enforce application dependencies resolution at runtime time.

Otherwise, regular commands still work:

```shell
nuxeo b multi-module operation studio package
nuxeo studio link
nuxeo b docker-compose docker
```

The result is:
- `core` module holding Java custom code.
- `package` module building the project’s Nuxeo Package.
- `docker` module distributing the application as a Docker container.
- `docker-compose` file to start deploy and configure project.

NB: You can use `nuxeo studio import` to create a Constant Java class that contains your available Studio configuration.

### How to Start Containerized Development Environment from any Project

You can create your own “start-shell.sh” script in any project, following this content:

```shell
#!/usr/bin/env sh
set -e

PROJECT=my-first-project
CWD=$(realpath $(dirname $0))

exec docker run --rm -it \
  --privileged -v "/var/run/docker.sock:/var/run/docker.sock" \
  --mount "type=bind,source=${CWD},destination=/home/nuxeo/workspace/${PROJECT}" \
  --mount "type=volume,source=${PROJECT}_m2repo,destination=/home/nuxeo/.m2/repository" \
  docker.packages.nuxeo.com/nos-dev/shell-project:latest
```

### How to Start Containerized Online IDE Based on our Development Environment from any Project

This script starts an online IDE (Code Server) on top of the development environment. Using the initial bootstrap method, you just have to run `start-ide.sh` script; otherwise you can create a similar script in any project, following this content:

```shell
PROJECT=my-first-project
B64_PROJECT=$(echo -n ${PROJECT} | md5)
CWD=$(realpath $(dirname $0))

exec docker run --rm -it \
  -p 8080:8080 \
  --privileged -v "/var/run/docker.sock:/var/run/docker.sock" \
  --mount "type=bind,source=${CWD},destination=/home/nuxeo/workspace/${PROJECT}" \
  --mount "type=volume,source=${PROJECT}_m2repo,destination=/home/nuxeo/.m2/repository" \
  --mount "type=volume,source=cs-settings-${B64_PROJECT},target=/home/nuxeo/.local/share/code-server/User" \
  docker.packages.nuxeo.com/nos-dev/code-server-project:latest
```
